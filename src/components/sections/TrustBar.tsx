'use client';

import { motion } from 'framer-motion';
import { VisaLogo, MastercardLogo, ApplePayLogo, GooglePayLogo } from '@/components/icons/PaymentLogos';

export function TrustBar() {
  const partners = [
    { name: 'Visa', Component: VisaLogo },
    { name: 'Mastercard', Component: MastercardLogo },
    { name: 'Apple Pay', Component: ApplePayLogo },
    { name: 'Google Pay', Component: GooglePayLogo },
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Waitlist Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                KP
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                KP
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                KP
              </div>
            </div>
            <div>
              <div className="font-bold text-neutral-900">1,000+ Early Users</div>
              <div className="text-sm text-neutral-600">Join the waitlist</div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-neutral-200"></div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
              Powered by
            </p>
            {partners.map((partner, index) => {
              const LogoComponent = partner.Component;
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="transition-transform"
                >
                  <LogoComponent className="h-7" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
