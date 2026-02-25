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
    <section className="py-8 md:py-12 bg-white border-b border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Waitlist Badge */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[
                'from-primary-400 to-primary-600',
                'from-secondary-400 to-secondary-600',
                'from-primary-500 to-secondary-500',
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
                >
                  K
                </div>
              ))}
              <div className="w-9 h-9 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center text-neutral-500 text-[10px] font-bold">
                +
              </div>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm">1,000+ Early Users</div>
              <div className="text-xs text-neutral-500">Join the waitlist today</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-neutral-200" />

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">
              Powered by
            </p>
            {partners.map((partner, index) => {
              const LogoComponent = partner.Component;
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <LogoComponent className="h-6" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
