'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="font-semibold text-xl sm:text-2xl md:text-xl text-gray-900 tracking-tight">
              .We
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#product" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm">
              Product
            </a>
            <a href="/#traction" className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm">
              Traction
            </a>
            <Link href="/early-access">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm px-5 py-2">
                Get Early Access
              </Button>
            </Link>
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
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col py-3 px-5 space-y-1">
              <a href="/#product" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2.5 px-1" onClick={() => setMobileMenuOpen(false)}>
                Product
              </a>
              <a href="/#traction" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-base py-2.5 px-1" onClick={() => setMobileMenuOpen(false)}>
                Traction
              </a>
              <Link href="/early-access" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg w-full mt-2 py-2.5 text-base font-medium">
                  Get Early Access
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
