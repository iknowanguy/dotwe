'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EarlyAccessPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Simple email validation
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // Here you would typically send the email to your backend
      // For now, we'll just show success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setEmail('');
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    // Direct download link to APK
    window.location.href = 'https://www.dotwe.app/download';
  };

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
              Join the exclusive early access program and be among the first to try .we
            </p>
          </div>

          {/* Main Card */}
          <div className="border border-gray-200 rounded-lg p-6 sm:p-8 space-y-6">
            {!success ? (
              <>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gray-600" />
                    Early Access Download
                  </h2>
                  <p className="text-sm text-gray-600">
                    Enter your email to get access to the .we Android APK
                  </p>
                </div>

                {/* Error Alert */}
                {error && (
                  <div className="border border-red-200 bg-red-50 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-900 text-sm font-medium">Error</p>
                      <p className="text-red-800 text-sm">{error}</p>
                    </div>
                  </div>
                )}

                {/* What you'll get */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h3 className="font-medium text-gray-900 mb-3 text-sm">
                    What you'll get:
                  </h3>
                  <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                      <span>Exclusive early access to .we Android app</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                      <span>Secure download link</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-500" />
                      <span>Installation instructions included</span>
                    </li>
                  </ul>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border-gray-300 h-11 px-4 rounded-lg text-sm focus:border-gray-400 focus:ring-0"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white h-11 text-sm font-normal shadow-none"
                  >
                    {isLoading ? 'Processing...' : 'Get Download Link'}
                  </Button>
                </form>
              </>
            ) : (
              <div className="space-y-5 text-center">
                <div className="border border-gray-200 bg-gray-50 rounded-lg p-5">
                  <CheckCircle2 className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <h3 className="text-gray-900 text-sm font-medium mb-2">
                    Success!
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Check your email for the download link.
                  </p>
                </div>

                <Button
                  onClick={handleDownload}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white h-11 text-sm font-normal shadow-none"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download APK Directly
                </Button>
              </div>
            )}
          </div>

          {/* Installation Instructions */}
          <div className="border border-gray-200 rounded-lg p-6 space-y-4">
            <h3 className="font-medium text-sm text-gray-900">Installation Instructions:</h3>
            <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside leading-relaxed">
              <li>Download the APK file to your Android device</li>
              <li>Go to Settings → Security → Enable "Unknown Sources"</li>
              <li>Open the downloaded APK file to install</li>
              <li>Follow the on-screen prompts to complete installation</li>
            </ol>
          </div>

          {/* Security Note */}
          <div className="border border-gray-200 bg-gray-50 rounded-lg p-6">
            <div className="flex gap-3">
              <Shield className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-medium text-sm text-gray-900">Security Note</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Always download APKs from trusted sources. Your email is only used for early access registration and will not be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

