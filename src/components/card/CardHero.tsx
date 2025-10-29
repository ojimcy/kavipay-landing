'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { CreditCard, Zap, Globe, Shield } from 'lucide-react';

export function CardHero() {
  const highlights = [
    { icon: Zap, text: 'Instant issuance' },
    { icon: Globe, text: '45M+ merchants' },
    { icon: Shield, text: 'Bank-level security' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 border border-primary-200 px-4 py-2 rounded-full">
              <CreditCard className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">
                Virtual & Physical Cards
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
              Spend Globally,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500">
                Without Limits
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
              Get instant <span className="font-semibold text-neutral-900">virtual cards for global shopping</span> or order <span className="font-semibold text-neutral-900">physical cards (Nigeria)</span>. Works everywhere Visa and Mastercard are accepted.
            </p>

            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="text-lg">🌍</span>
                <span>Virtual: Global</span>
              </div>
              <div className="w-px h-4 bg-neutral-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🇳🇬</span>
                <span>Physical: Nigeria</span>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg">
                Get Your Card Now
              </Button>
              <Button variant="secondary" size="lg">
                Compare Card Types
              </Button>
            </div>
          </motion.div>

          {/* Right: Card showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Virtual card */}
              <motion.div
                initial={{ x: -20, rotate: -5 }}
                animate={{ x: 0, rotate: -8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-0 left-0 w-full z-10"
              >
                <div className="aspect-[1.586] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-6 shadow-2xl">
                  <div className="flex flex-col justify-between h-full text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-semibold opacity-80 mb-1">VIRTUAL CARD</div>
                        <div className="text-lg font-bold">KAVIPAY</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <CreditCard className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <div className="text-base tracking-wider mb-4">•••• •••• •••• 4589</div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-[10px] opacity-70">VALID THRU</div>
                          <div className="text-sm font-semibold">12/27</div>
                        </div>
                        <div className="text-sm font-bold">VISA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Physical card */}
              <motion.div
                initial={{ x: 20, rotate: 5 }}
                animate={{ x: 0, rotate: 8 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative mt-20 ml-auto w-full"
              >
                <div className="aspect-[1.586] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-6 shadow-2xl border border-neutral-700">
                  <div className="flex flex-col justify-between h-full text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-semibold opacity-80 mb-1">PHYSICAL CARD</div>
                        <div className="text-lg font-bold">KAVIPAY</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                        <span className="text-lg">💎</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-base tracking-wider mb-4">•••• •••• •••• 8642</div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-[10px] opacity-70">VALID THRU</div>
                          <div className="text-sm font-semibold">12/27</div>
                        </div>
                        <div className="text-sm font-bold">MASTERCARD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-20 blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
