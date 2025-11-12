"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Download, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EarlyAccessPage() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [downloadToken, setDownloadToken] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [checksum, setChecksum] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/early-access" });
    } catch (err) {
      setError("Failed to sign in. Please try again.");
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/early-access/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to register for early access");
      }

      setDownloadToken(data.downloadToken);
      setSuccess(data.message);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!downloadToken) {
      setError("No download token available. Please sign up first.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/early-access/download?token=${downloadToken}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate download link");
      }

      setDownloadUrl(data.downloadUrl);
      setChecksum(data.sha256Checksum);
      
      // Automatically trigger download
      window.location.href = data.downloadUrl;
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-signup after Google sign-in
  useEffect(() => {
    if (status === "authenticated" && !downloadToken && !isLoading) {
      handleSignup();
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">
            Get Early Access
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Join the exclusive early access program and be among the first to try dotwe
          </p>
        </div>

        {/* Main Card */}
        <Card className="border border-gray-200 shadow-none">
          <CardHeader className="space-y-2">
            <CardTitle className="flex items-center gap-2 text-lg font-medium text-gray-900">
              <Shield className="h-5 w-5 text-gray-600" />
              Early Access Download
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Sign in with Google to unlock your exclusive APK download
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive" className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-900 text-sm font-medium">Error</AlertTitle>
                <AlertDescription className="text-red-800 text-sm">{error}</AlertDescription>
              </Alert>
            )}

            {/* Success Alert */}
            {success && (
              <Alert className="border-gray-200 bg-gray-50">
                <CheckCircle2 className="h-4 w-4 text-gray-600" />
                <AlertTitle className="text-gray-900 text-sm font-medium">Success!</AlertTitle>
                <AlertDescription className="text-gray-600 text-sm">
                  {success}
                </AlertDescription>
              </Alert>
            )}

            {/* Not Signed In */}
            {status === "unauthenticated" && (
              <div className="space-y-5">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-gray-900 mb-3 text-sm">
                    What you'll get:
                  </h3>
                  <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                      <span>Exclusive early access to dotwe Android app</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                      <span>Secure, one-time download link</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                      <span>SHA-256 checksum for verification</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                      <span>Installation instructions included</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white h-11 text-sm font-normal shadow-none"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <svg
                        className="mr-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Sign in with Google
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Loading State */}
            {status === "loading" && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-gray-600" />
              </div>
            )}

            {/* Signed In - Ready to Download */}
            {status === "authenticated" && downloadToken && !downloadUrl && (
              <div className="space-y-5">
                <Alert className="border-gray-200 bg-gray-50">
                  <CheckCircle2 className="h-4 w-4 text-gray-600" />
                  <AlertTitle className="text-gray-900 text-sm font-medium">
                    You're all set!
                  </AlertTitle>
                  <AlertDescription className="text-gray-600 text-sm">
                    Signed in as <strong>{session?.user?.email}</strong>
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white h-11 text-sm font-normal shadow-none"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating download link...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download APK
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Download Complete */}
            {downloadUrl && checksum && (
              <div className="space-y-5">
                <Alert className="border-gray-200 bg-gray-50">
                  <CheckCircle2 className="h-4 w-4 text-gray-600" />
                  <AlertTitle className="text-gray-900 text-sm font-medium">
                    Download Started!
                  </AlertTitle>
                  <AlertDescription className="text-gray-600 text-sm">
                    Your download should start automatically. If it doesn't, click the link below.
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 space-y-4">
                  <div>
                    <h4 className="font-medium text-xs text-gray-900 mb-2 uppercase tracking-wider">SHA-256 Checksum:</h4>
                    <code className="text-xs bg-white p-3 rounded border border-gray-200 block break-all text-gray-700 font-mono">
                      {checksum || "Not available"}
                    </code>
                  </div>

                  <Button
                    onClick={() => window.location.href = downloadUrl}
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 h-11 text-sm font-normal"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex-col items-start space-y-5 border-t border-gray-200 pt-6">
            <div className="w-full">
              <h3 className="font-medium text-sm text-gray-900 mb-3">Installation Instructions:</h3>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside leading-relaxed">
                <li>Download the APK file to your Android device</li>
                <li>Go to Settings → Security → Enable "Unknown Sources"</li>
                <li>Open the downloaded APK file to install</li>
                <li>Follow the on-screen prompts to complete installation</li>
                <li>Verify the SHA-256 checksum for security (optional)</li>
              </ol>
            </div>

            {session && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="w-full text-gray-600 hover:text-gray-900 hover:bg-gray-50 text-sm font-normal"
              >
                Sign Out
              </Button>
            )}
          </CardFooter>
        </Card>

        {/* Security Note */}
        <Card className="border-gray-200 bg-gray-50 shadow-none">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Shield className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-sm text-gray-900">Security Note</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Always verify the SHA-256 checksum before installing the APK. Never install APKs from untrusted sources. Your email is only used for early access registration and will not be shared with third parties.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
