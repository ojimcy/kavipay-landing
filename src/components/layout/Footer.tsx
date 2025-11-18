'use client';

import { analytics } from '@/lib/analytics';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Virtual Cards', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Status', href: '#' },
    ],
    legal: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  };

  const socialLinks = [
    { label: 'Twitter', href: '#', icon: '𝕏' },
    { label: 'Instagram', href: '#', icon: 'IG' },
    { label: 'LinkedIn', href: '#', icon: 'in' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logos/kavi-logo-white.png"
                alt="Kavipay"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-neutral-400 mb-6">
              Your money, without borders. Spend globally with zero fees.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                onClick={() => analytics.downloadClick('ios')}
                className="inline-block"
              >
                <div className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-100 transition">
                  Download on App Store
                </div>
              </a>
              <a
                href="#"
                onClick={() => analytics.downloadClick('android')}
                className="inline-block"
              >
                <div className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-100 transition">
                  Get it on Google Play
                </div>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-400">
            © {currentYear} Kavipay. All rights reserved.
          </p>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-neutral-400 hover:text-white transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
