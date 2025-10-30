'use client';

import { Button } from '@/components/ui';
import { analytics } from '@/lib/analytics';
import { motion } from 'framer-motion';
import { ApplePayLogo, GooglePayLogo } from '@/components/icons/PaymentLogos';

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
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 border border-primary-200 px-4 py-2 rounded-full"
            >
              <span className="text-2xl">🌍</span>
              <span className="text-sm font-semibold text-primary-700">
                Global Virtual Cards | Powered by Visa & Mastercard
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
              Your Money,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500">
                Without Borders
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
              Virtual cards that work with <span className="font-semibold text-neutral-900">Apple Pay & Google Pay</span>. Shop anywhere in the world, instantly. Zero fees, total control.
            </p>

            {/* Regional services note */}
            <p className="text-sm text-neutral-500">
              Physical cards & utilities available in Nigeria
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleDownload}
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleLearnMore}
              >
                See How It Works ↓
              </Button>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-neutral-900">Join the Waitlist</div>
                  <div className="text-neutral-600">1,000+ early users</div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-neutral-200"></div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <ApplePayLogo className="h-5" />
                  <div className="w-px h-5 bg-neutral-200"></div>
                  <GooglePayLogo className="h-5" />
                </div>
                <div className="text-sm text-neutral-600">
                  Ready to use
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="relative w-full max-w-sm">
              {/* Phone mockup with enhanced design */}
              <div className="aspect-[9/16] bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 rounded-3xl shadow-2xl p-3 relative overflow-hidden">
                {/* Screen */}
                <div className="w-full h-full bg-neutral-900 rounded-2xl p-4 flex flex-col">
                  {/* Status bar */}
                  <div className="flex items-center justify-between text-white text-xs mb-4 opacity-70">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4">📶</div>
                      <div className="w-4 h-4">🔋</div>
                    </div>
                  </div>

                  {/* Card preview */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full max-w-[280px] aspect-[1.586] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-5 shadow-xl">
                      <div className="flex flex-col justify-between h-full text-white">
                        <div className="flex justify-between items-start">
                          <div className="text-xs font-semibold">KAVIPAY</div>
                          <div className="text-lg">💳</div>
                        </div>
                        <div>
                          <div className="text-sm tracking-wider mb-2">•••• •••• •••• 8642</div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-[8px] opacity-70">CARDHOLDER</div>
                              <div className="text-xs font-semibold">John Doe</div>
                            </div>
                            <div className="text-xs font-bold">VISA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div className="text-center text-white/60 text-xs">
                    Tap to manage card
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden md:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success/20 to-success/30 flex items-center justify-center">
                    <span className="text-lg">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-neutral-600">Success Rate</div>
                    <div className="text-lg font-bold text-neutral-900">99.9%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="hidden md:block absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-neutral-600">Speed</div>
                    <div className="text-lg font-bold text-neutral-900">Instant</div>
                  </div>
                </div>
              </motion.div>

              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl blur-3xl -z-10"
              />

              {/* Sparkle effects */}
              <motion.div
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
                className="absolute top-10 right-10 text-2xl"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
