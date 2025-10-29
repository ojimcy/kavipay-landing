'use client';

import { motion } from 'framer-motion';
import { Smartphone, Download, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui';
import { ApplePayLogo, GooglePayLogo } from '@/components/icons/PaymentLogos';

export function AppDownload() {
  const benefits = [
    'Instant account setup in under 2 minutes',
    'Get your virtual card immediately - works globally',
    'Add to Apple Pay & Google Pay for contactless payments',
    'Pay utilities in Nigeria - airtime, data, electricity & TV',
  ];

  return (
    <section id="download" className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 border-4 border-white rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Download className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Available Now
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Download Kavipay Today
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of users who are already enjoying borderless payments. Get started in minutes.
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
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 px-6 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition-all shadow-lg"
              >
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 px-6 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition-all shadow-lg"
              >
                <div className="text-2xl">🤖</div>
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-sm text-white/80">Works with:</div>
              <div className="flex items-center gap-3">
                <div className="bg-white px-4 py-2 rounded-lg flex items-center">
                  <ApplePayLogo className="h-6" />
                </div>
                <div className="bg-white px-4 py-2 rounded-lg flex items-center">
                  <GooglePayLogo className="h-6" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone mockup with QR code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            {/* QR Code */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <div className="text-center mb-4">
                <div className="text-neutral-900 font-bold text-lg mb-1">
                  Scan to Download
                </div>
                <div className="text-neutral-600 text-sm">
                  Available on iOS & Android
                </div>
              </div>

              {/* QR Code placeholder */}
              <div className="w-48 h-48 bg-neutral-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* QR Code pattern simulation */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-neutral-900'} rounded-sm`}
                    ></div>
                  ))}
                </div>
                {/* Center logo */}
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold">
                  KP
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-neutral-600 text-sm">
                <Smartphone className="w-4 h-4" />
                <span>Point your camera here</span>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-1">1K+</div>
                <div className="text-sm text-white/80">Waitlist</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-1">Global</div>
                <div className="text-sm text-white/80">Reach</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-1">$0</div>
                <div className="text-sm text-white/80">Fees</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
