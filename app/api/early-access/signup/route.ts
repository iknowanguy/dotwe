import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { upsertEarlyAccessSignup } from "@/lib/database";
import { generateDownloadToken } from "@/lib/jwt";

// Force dynamic rendering for this API route
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // Get the authenticated session
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized. Please sign in with Google." },
        { status: 401 }
      );
    }

    const { email } = session.user;
    const googleId = session.user.id;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Store the signup in database
    const signup = await upsertEarlyAccessSignup(email, googleId);

    if (!signup) {
      return NextResponse.json(
        { error: "Failed to register for early access. Please try again." },
        { status: 500 }
      );
    }

    // Generate a download token (short-lived, one-time use)
    const downloadToken = await generateDownloadToken(email, googleId);

    // Return success with download token
    return NextResponse.json(
      {
        success: true,
        message: "Successfully registered for early access!",
        downloadToken,
        email,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Early access signup error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
