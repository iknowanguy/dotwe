import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-16">
          {/* Left side - Info and Copyright */}
          <div className="space-y-10">
            <div>
              <h4 className="text-gray-900 mb-6 text-xs font-normal uppercase tracking-wider">Info</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-normal">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-normal">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/delete" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-normal">
                    Account Deletion
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-gray-500 text-xs max-w-md font-normal">
              © 2025 .We — The Default 'I Know a Guy' Partner Globally.
            </p>
          </div>

          {/* Right side - Socials */}
          <div>
            <h4 className="text-gray-900 mb-6 text-xs font-normal uppercase tracking-wider">Socials</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-normal">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-normal">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-normal">
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

