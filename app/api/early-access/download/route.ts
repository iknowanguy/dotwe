import { NextRequest, NextResponse } from "next/server";
import { verifyDownloadToken } from "@/lib/jwt";
import { generateSignedDownloadUrl } from "@/lib/supabase";
import { recordDownload, getEarlyAccessSignup } from "@/lib/database";

// Force dynamic rendering for this API route
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    // Get token from query parameters
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Download token is required" },
        { status: 400 }
      );
    }

    // Verify the JWT token
    const payload = await verifyDownloadToken(token);

    if (!payload) {
      return NextResponse.json(
        {
          error: "Invalid or expired download token. Please sign in again.",
        },
        { status: 401 }
      );
    }

    const { email } = payload;

    // Verify user exists in database
    const signup = await getEarlyAccessSignup(email);

    if (!signup) {
      return NextResponse.json(
        { error: "User not found. Please sign up for early access first." },
        { status: 404 }
      );
    }

    // Generate a time-limited signed URL for the APK
    const apkFilePath = process.env.APK_FILE_PATH || "dotwe-early-access.apk";
    const signedUrl = await generateSignedDownloadUrl(apkFilePath, 3600); // 1 hour expiry

    if (!signedUrl) {
      return NextResponse.json(
        {
          error: "Failed to generate download link. Please contact support.",
        },
        { status: 500 }
      );
    }

    // Record the download event
    await recordDownload(email);

    // Return the signed URL with metadata
    return NextResponse.json(
      {
        success: true,
        downloadUrl: signedUrl,
        fileName: apkFilePath,
        sha256Checksum: process.env.APK_SHA256_CHECKSUM || "",
        expiresIn: 3600, // seconds
        message: "Download link generated successfully",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
