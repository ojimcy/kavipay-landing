'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { analytics } from '@/lib/analytics';

export function AppDownload() {
  const benefits = [
    'Instant virtual card creation',
    'Works with Apple Pay & Google Pay',
    'Pay utilities — airtime, data, electricity & TV',
    'Bank-grade security with 3D Secure',
    'Zero hidden fees, transparent pricing',
  ];

  return (
    <section id="download" className="py-20 md:py-28 bg-neutral-950 relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-indigo-500/20">
              Download Now
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your finances,{' '}
              <span className="text-indigo-400">in your pocket</span>
            </h2>

            <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-lg">
              Download Kavipay and take control of your money. Join thousands already spending smarter.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-neutral-300 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                onClick={() => analytics.downloadClick('ios')}
                className="inline-flex items-center gap-3 bg-white text-neutral-900 px-6 py-3.5 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#"
                onClick={() => analytics.downloadClick('android')}
                className="inline-flex items-center gap-3 bg-white text-neutral-900 px-6 py-3.5 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 leading-none">Get it on</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-[260px] sm:w-[280px]">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/25 to-emerald-500/15 rounded-[50px] blur-[50px]" />

              {/* Phone */}
              <div className="relative bg-neutral-800 rounded-[2.8rem] p-[5px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]">
                <div className="bg-neutral-950 rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/images/app/screen-home.svg"
                    alt="Kavipay App"
                    width={375}
                    height={812}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-12 border-t border-neutral-800"
        >
          {[
            { value: '2.4K+', label: 'Active Users' },
            { value: 'Global', label: 'Coverage' },
            { value: '$0', label: 'Hidden Fees' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
