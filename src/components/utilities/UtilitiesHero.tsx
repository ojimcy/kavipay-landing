'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { Zap, Smartphone, DollarSign, Clock } from 'lucide-react';

export function UtilitiesHero() {
  const highlights = [
    { icon: Clock, text: '24/7 availability' },
    { icon: DollarSign, text: 'No hidden fees' },
    { icon: Zap, text: 'Instant processing' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-accent-50 via-white to-primary-50 pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-100 to-primary-100 border border-accent-200 px-4 py-2 rounded-full">
              <Smartphone className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-700">
                Bills & Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
              Pay Bills,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 via-accent-600 to-primary-500">
                Effortlessly
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-2xl">
              Pay utility bills, buy airtime and data, send money to friends, and more. All from one convenient app, available 24/7.
            </p>

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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg">
                Start Paying Bills
              </Button>
              <Button variant="secondary" size="lg">
                See All Services
              </Button>
            </div>
          </motion.div>

          {/* Right: Services showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
              {/* Service cards */}
              {[
                { icon: '⚡', title: 'Electricity', color: 'from-yellow-400 to-orange-500' },
                { icon: '📱', title: 'Airtime', color: 'from-primary-400 to-primary-600' },
                { icon: '💧', title: 'Water', color: 'from-blue-400 to-blue-600' },
                { icon: '📡', title: 'Internet', color: 'from-accent-400 to-accent-600' },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 shadow-xl cursor-pointer`}
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <div className="text-white font-bold text-lg">{service.title}</div>
                  <div className="text-white/80 text-sm mt-1">Pay instantly</div>
                </motion.div>
              ))}
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-20 blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
