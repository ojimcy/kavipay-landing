'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { analytics } from '@/lib/analytics';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const handleDownload = () => {
    analytics.ctaClick('hero_download');
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    analytics.ctaClick('hero_learn_more');
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-20 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-indigo-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              Now Available
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight mb-6"
            >
              Your Money,{' '}
              <span className="text-indigo-600">Without Borders</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-md"
            >
              Get instant virtual cards, shop globally, pay bills, and manage your money — all from one app. Works with Apple Pay & Google Pay.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-indigo-700 transition-all duration-200 shadow-[0_4px_14px_rgba(99,102,241,0.3)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Get the App
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleLearnMore}
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-200 text-neutral-700 px-7 py-3.5 rounded-xl font-semibold text-base hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200"
              >
                Learn More
              </button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['bg-indigo-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'].map((bg, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${bg} border-2 border-white`}
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600">
                  <strong className="text-neutral-900">2,400+</strong> users
                </span>
              </div>

              <div className="h-8 w-px bg-neutral-200 hidden sm:block" />

              <div className="flex items-center gap-3">
                <Image src="/images/payment-logos/visa.png" alt="Visa" width={40} height={14} className="opacity-60" />
                <Image src="/images/payment-logos/mastercard.png" alt="Mastercard" width={40} height={14} className="opacity-60" />
                <Image src="/images/payment-logos/apple-pay.png" alt="Apple Pay" width={40} height={14} className="opacity-60" />
                <Image src="/images/payment-logos/google-pay.png" alt="Google Pay" width={40} height={14} className="opacity-60" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup with real app screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[300px] mx-auto">
                {/* Glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-emerald-500/15 rounded-[50px] blur-[40px]" />

                {/* Phone body */}
                <div className="relative bg-neutral-900 rounded-[3rem] p-[6px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.3)]">
                  <div className="bg-neutral-950 rounded-[2.6rem] overflow-hidden">
                    {/* Notch */}
                    <div className="relative z-10 flex justify-center pt-2">
                      <div className="h-[24px] w-[90px] bg-neutral-950 rounded-b-2xl" />
                    </div>

                    {/* App Screenshot */}
                    <div className="relative -mt-2">
                      <Image
                        src="/images/app/screen-home.svg"
                        alt="Kavipay App - Dashboard"
                        width={375}
                        height={812}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-12 top-20 bg-white rounded-xl px-4 py-3 shadow-lg border border-neutral-100 hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Success Rate</div>
                  <div className="text-base font-bold text-neutral-900">99.9%</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-32 bg-white rounded-xl px-4 py-3 shadow-lg border border-neutral-100 hidden md:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Speed</div>
                  <div className="text-base font-bold text-neutral-900">Instant</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
