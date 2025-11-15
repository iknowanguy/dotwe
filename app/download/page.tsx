import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900">
            Download .we
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Get early access to the .we app. Available for Android devices.
          </p>
          
          <div className="mt-12 space-y-4">
            <a 
              href="https://www.dotwe.app/download" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-sm font-normal shadow-none transition-all"
            >
              Download for Android
            </a>
            <p className="text-xs text-gray-500 mt-4">
              The download will open in a new window
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

