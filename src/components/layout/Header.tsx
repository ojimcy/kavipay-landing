'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';
import { analytics } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import { ChevronDown, CreditCard, Wallet, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadClick = () => {
    analytics.ctaClick('header');
    // Scroll to app download section
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/logo.png"
                alt="Kavipay"
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-neutral-700 hover:text-primary-500 transition-colors font-medium"
              >
                Products
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform",
                  productsOpen && "rotate-180"
                )} />
              </button>

              {/* Dropdown Menu */}
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50">
                  <Link
                    href="/card"
                    className="flex items-start gap-3 px-4 py-3 hover:bg-primary-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-500 group-hover:to-secondary-500 transition-all">
                      <CreditCard className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                        Cards
                      </div>
                      <div className="text-xs text-neutral-600 mt-0.5">
                        Virtual & physical cards for global spending
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/utilities"
                    className="flex items-start gap-3 px-4 py-3 hover:bg-primary-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center group-hover:from-secondary-500 group-hover:to-primary-500 transition-all">
                      <Wallet className="w-5 h-5 text-secondary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                        Utilities
                      </div>
                      <div className="text-xs text-neutral-600 mt-0.5">
                        Pay bills, buy airtime, and more
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#features"
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              className="text-neutral-700 hover:text-primary-500 transition-colors font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={handleDownloadClick}
              className="hidden sm:inline-flex"
            >
              Get the App
            </Button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-neutral-700 hover:text-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-lg py-4 z-40">
            <div className="space-y-4 px-4">
              {/* Products Section */}
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 px-2">
                  Products
                </div>
                <Link
                  href="/card"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CreditCard className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-semibold text-neutral-900">Cards</div>
                    <div className="text-xs text-neutral-600">Virtual & physical cards</div>
                  </div>
                </Link>
                <Link
                  href="/utilities"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Wallet className="w-5 h-5 text-secondary-600" />
                  <div>
                    <div className="font-semibold text-neutral-900">Utilities</div>
                    <div className="text-xs text-neutral-600">Pay bills & buy airtime</div>
                  </div>
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="pt-4 border-t border-neutral-200">
                <Link
                  href="/#features"
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/#how-it-works"
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/#faq"
                  className="block px-4 py-2 text-neutral-700 hover:text-primary-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </div>

              {/* Mobile CTAs */}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    analytics.ctaClick('header_login');
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    handleDownloadClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  Get the App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
