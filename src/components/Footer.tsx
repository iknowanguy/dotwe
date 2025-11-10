import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12">
          {/* Left side - Info and Copyright */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h4 className="text-gray-900 mb-4 md:mb-6 text-sm font-medium uppercase tracking-wider">Info</h4>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/delete" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
                    Account Deletion
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-500 text-xs md:text-sm max-w-md">
              © 2025 .We — The Default 'I Know a Guy' Partner Globally.
            </p>
          </div>

          {/* Right side - Socials */}
          <div>
            <h4 className="text-gray-900 mb-4 md:mb-6 text-sm font-medium uppercase tracking-wider">Socials</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm md:text-base">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

