'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui';
import { analytics } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  CreditCard,
  Wallet,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-50 to-violet-50',
  },
  {
    label: 'Utilities',
    description: 'Pay bills, buy airtime, and more',
    href: '/utilities',
    icon: Wallet,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleDownloadClick = () => {
    analytics.ctaClick('header');
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setProductsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)] border-b border-white/60'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="flex items-center gap-2 group"
              >
                <Image
                  src="/images/logos/logo.png"
                  alt="Kavipay"
                  width={140}
                  height={40}
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </Link>
            </motion.div>

            {/* Navigation - Desktop (Centered) */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  className={cn(
                    'relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-xl',
                    productsOpen
                      ? 'text-indigo-600'
                      : 'text-neutral-600 hover:text-neutral-900'
                  )}
                  onClick={() => setProductsOpen(!productsOpen)}
                >
                  Products
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-300',
                      productsOpen && 'rotate-180'
                    )}
                  />
                  {/* Hover underline */}
                  <span
                    className={cn(
                      'absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-indigo-500 transition-transform duration-300 origin-left',
                      productsOpen ? 'scale-x-100' : 'scale-x-0'
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] origin-top"
                    >
                      {/* Arrow indicator */}
                      <div className="flex justify-center -mb-[6px] relative z-10">
                        <div className="w-3 h-3 rotate-45 bg-white border-l border-t border-neutral-100 rounded-sm" />
                      </div>
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_20px_40px_-4px_rgba(0,0,0,0.1)] border border-neutral-100/80 p-2 overflow-hidden">
                        {productItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setProductsOpen(false)}
                            className="flex items-start gap-3.5 px-3 py-3 rounded-xl hover:bg-neutral-50 transition-all duration-200 group"
                          >
                            <div
                              className={cn(
                                'flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105',
                                item.bgGradient
                              )}
                            >
                              <item.icon
                                className={cn(
                                  'w-5 h-5 transition-colors duration-300',
                                  item.href === '/card'
                                    ? 'text-indigo-600'
                                    : 'text-emerald-600'
                                )}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-neutral-900 group-hover:text-indigo-600 transition-colors duration-200">
                                  {item.label}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                              </div>
                              <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 rounded-xl group"
                >
                  {link.label}
                  {/* Subtle underline animation */}
                  <span className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </nav>

            {/* Right side: CTA + Mobile toggle */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <Button
                variant="primary"
                size="sm"
                onClick={handleDownloadClick}
                className="hidden sm:inline-flex rounded-2xl bg-indigo-600 hover:bg-indigo-700 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(99,102,241,0.25)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_rgba(99,102,241,0.35)] transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 mr-1.5" />
                Get the App
              </Button>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden relative p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay + Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Slide-down panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-[72px] left-0 right-0 z-50 lg:hidden"
            >
              <div className="mx-2 sm:mx-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_20px_40px_-4px_rgba(0,0,0,0.1)] border border-neutral-100/80 overflow-hidden">
                <div className="p-4 space-y-1">
                  {/* Products accordion */}
                  <div>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <span>Products</span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 text-neutral-400 transition-transform duration-300',
                          mobileProductsOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 pr-1 pb-2 space-y-1">
                            {productItems.map((item, index) => (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group"
                                  onClick={closeMobileMenu}
                                >
                                  <div
                                    className={cn(
                                      'flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br flex items-center justify-center',
                                      item.bgGradient
                                    )}
                                  >
                                    <item.icon
                                      className={cn(
                                        'w-4.5 h-4.5',
                                        item.href === '/card'
                                          ? 'text-indigo-600'
                                          : 'text-emerald-600'
                                      )}
                                    />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-sm text-neutral-900">
                                      {item.label}
                                    </div>
                                    <div className="text-xs text-neutral-500">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Separator */}
                  <div className="h-px bg-neutral-100 mx-3" />

                  {/* Navigation Links */}
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * (index + 1), duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-indigo-600 transition-colors duration-200 group"
                        onClick={closeMobileMenu}
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-200" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Separator */}
                  <div className="h-px bg-neutral-100 mx-3" />

                  {/* Mobile CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    className="pt-2 pb-1 space-y-2"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full rounded-xl text-neutral-600 hover:text-neutral-900"
                      onClick={() => {
                        analytics.ctaClick('header_login');
                        closeMobileMenu();
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full rounded-2xl bg-indigo-600 hover:bg-indigo-700 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(99,102,241,0.25)]"
                      onClick={() => {
                        handleDownloadClick();
                        closeMobileMenu();
                      }}
                    >
                      <Sparkles className="w-4 h-4 mr-1.5" />
                      Get the App
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
