'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EarlyAccessPage() {
  const handleDownload = () => {
    // Direct download link to Google Drive folder
    window.location.href = 'https://drive.google.com/drive/folders/1pXSgzfsTMbsqiuw1N--5dRrWkgzmDZ6e?usp=sharing';
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
          <div className="border border-gray-200 rounded-lg p-6 sm:p-8 space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">
                Early Access Download
              </h2>
              <p className="text-sm text-gray-600">
                Download the .we Android APK
              </p>
              
              <button
                onClick={handleDownload}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white h-11 text-sm font-normal shadow-none rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
            </div>
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
              <svg className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
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

