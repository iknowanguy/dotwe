'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="font-medium text-base text-gray-900 tracking-tight">
              .We
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="/#product" className="text-gray-600 hover:text-gray-900 transition-colors font-normal text-sm">
              Product
            </a>
            <a href="/#traction" className="text-gray-600 hover:text-gray-900 transition-colors font-normal text-sm">
              Traction
            </a>
            <Link href="/thefuture" className="text-gray-600 hover:text-gray-900 transition-colors font-normal text-sm">
              Memo
            </Link>
            <a href="https://www.dotwe.app/download" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm px-4 py-2 font-normal shadow-none">
                Download
              </Button>
            </a>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-xl">
            <div className="flex flex-col py-4 px-6 space-y-2">
              <a href="/#product" className="text-gray-600 hover:text-gray-900 transition-colors font-normal text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                Product
              </a>
              <a href="/#traction" className="text-gray-600 hover:text-gray-900 transition-colors font-normal text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                Traction
              </a>
              <Link href="/thefuture" className="text-gray-600 hover:text-gray-900 transition-colors font-normal text-sm py-2" onClick={() => setMobileMenuOpen(false)}>
                Memo
              </Link>
              <a href="https://www.dotwe.app/download" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg w-full mt-2 py-2.5 text-sm font-normal shadow-none">
                  Download
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
