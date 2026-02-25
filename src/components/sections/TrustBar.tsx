'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Visa', src: '/images/payment-logos/visa.png' },
  { name: 'Mastercard', src: '/images/payment-logos/mastercard.png' },
  { name: 'Apple Pay', src: '/images/payment-logos/apple-pay.png' },
  { name: 'Google Pay', src: '/images/payment-logos/google-pay.png' },
];

export function TrustBar() {
  return (
    <section className="py-10 md:py-14 bg-neutral-50 border-y border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          <p className="text-sm text-neutral-400 uppercase tracking-widest font-semibold">
            Powered by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                width={80}
                height={30}
                className="h-7 w-auto opacity-50 hover:opacity-80 transition-opacity duration-200 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
