'use client';

import { motion } from 'framer-motion';
import { Smartphone, Download, Check, ArrowRight } from 'lucide-react';
import { ApplePayLogo, GooglePayLogo } from '@/components/icons/PaymentLogos';

export function AppDownload() {
  const benefits = [
    'Instant account setup in less than 2 minutes',
    'Get your virtual card immediately - works globally',
    'Add to Apple Pay & Google Pay for contactless payments',
    'Pay utilities in Nigeria - airtime, data, electricity & TV',
  ];

  return (
    <section id="download" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
              <Download className="w-4 h-4 text-secondary-400" />
              <span className="text-sm font-medium text-white/90">Coming Soon</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Join the Kavipay{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
                Waitlist
              </span>
            </h2>

            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
              Be among the first to experience borderless payments. Our app is currently under review and launching soon.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-secondary-400" />
                  </div>
                  <span className="text-white/80 text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-xl border border-white/10 cursor-not-allowed">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60">Coming Soon on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-xl border border-white/10 cursor-not-allowed">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60">Coming Soon on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xs text-white/50 uppercase tracking-wider">Works with</span>
              <div className="flex items-center gap-2">
                <div className="bg-white px-3 py-1.5 rounded-lg"><ApplePayLogo className="h-5" /></div>
                <div className="bg-white px-3 py-1.5 rounded-lg"><GooglePayLogo className="h-5" /></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="w-64 md:w-72 aspect-[9/16] bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 rounded-[2.5rem] p-2 shadow-2xl shadow-primary-500/20">
                <div className="w-full h-full bg-neutral-950 rounded-[2rem] p-4 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-950 rounded-b-2xl z-10" />
                  <div className="flex-1 flex flex-col items-center justify-center gap-6 mt-4">
                    <div className="text-center">
                      <div className="text-white/50 text-xs mb-1">Total Balance</div>
                      <div className="text-white text-3xl font-bold">$2,450.00</div>
                    </div>
                    <div className="w-full max-w-[220px] aspect-[1.586] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-4 shadow-lg">
                      <div className="flex flex-col justify-between h-full text-white">
                        <div className="flex justify-between items-start">
                          <div className="text-[10px] font-bold tracking-wider">KAVIPAY</div>
                          <div className="w-8 h-5 bg-white/20 rounded-sm" />
                        </div>
                        <div>
                          <div className="text-xs tracking-[0.2em] mb-1.5 font-mono">•••• 8642</div>
                          <div className="flex justify-between items-end">
                            <div className="text-[9px] text-white/70">JOHN DOE</div>
                            <div className="text-[10px] font-bold">VISA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      {['Send', 'Top Up', 'More'].map((action) => (
                        <div key={action} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white/70" />
                          </div>
                          <span className="text-[10px] text-white/50">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-soft-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary-600" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500">Status</div>
                    <div className="text-xs font-bold text-neutral-900">Active</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-soft-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500">Coverage</div>
                    <div className="text-xs font-bold text-neutral-900">Global</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-8 w-full max-w-sm">
              {[
                { value: '1K+', label: 'Waitlist' },
                { value: 'Global', label: 'Reach' },
                { value: '$0', label: 'Fees' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
