'use client';

import { useState, useEffect, useRef } from 'react';
import { analytics } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  CreditCard,
  Wallet,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/faq' },
];

const productItems = [
  {
    label: 'Cards',
    description: 'Virtual & physical cards for global spending',
    href: '/card',
    icon: CreditCard,
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    label: 'Utilities',
    description: 'Pay bills, buy airtime, and more',
    href: '/utilities',
    icon: Wallet,
    color: 'text-emerald-600 bg-emerald-50',
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleDownloadClick = () => {
    analytics.ctaClick('header');
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setProductsOpen(false), 150);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-neutral-100'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logos/logo.png"
                alt="Kavipay"
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    productsOpen ? 'text-indigo-600' : 'text-neutral-600 hover:text-neutral-900'
                  )}
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', productsOpen && 'rotate-180')} />
                </button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px]"
                    >
                      <div className="bg-white rounded-xl shadow-lg border border-neutral-100 p-1.5 overflow-hidden">
                        {productItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                          >
                            <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0', item.color)}>
                              <item.icon className="w-4.5 h-4.5" />
                            </div>
                            <div>
                              <div className="font-semibold text-sm text-neutral-900">{item.label}</div>
                              <div className="text-xs text-neutral-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadClick}
                className="hidden sm:inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
              >
                Get the App
              </button>

              <button
                className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[68px] left-0 right-0 z-50 lg:hidden"
            >
              <div className="mx-2 sm:mx-4 bg-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden">
                <div className="p-3 space-y-1">
                  {/* Products */}
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                  >
                    Products
                    <ChevronDown className={cn('w-4 h-4 text-neutral-400 transition-transform', mobileProductsOpen && 'rotate-180')} />
                  </button>

                  {mobileProductsOpen && (
                    <div className="pl-3 space-y-1">
                      {productItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-50 text-sm"
                          onClick={closeMobileMenu}
                        >
                          <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', item.color)}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-neutral-900">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}

                  <div className="h-px bg-neutral-100 mx-3" />

                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 text-neutral-300" />
                    </Link>
                  ))}

                  <div className="h-px bg-neutral-100 mx-3" />

                  <div className="pt-2 pb-1">
                    <button
                      onClick={() => { handleDownloadClick(); closeMobileMenu(); }}
                      className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Get the App
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
