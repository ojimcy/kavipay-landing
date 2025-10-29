'use client';

import { motion } from 'framer-motion';
import { Globe, DollarSign, Lock, Zap, Bell, BarChart } from 'lucide-react';

export function CardFeatures() {
  const features = [
    {
      icon: Globe,
      value: '45M+',
      label: 'Global Merchants',
      description: 'Accepted everywhere Visa & Mastercard work',
    },
    {
      icon: DollarSign,
      value: '0%',
      label: 'Foreign Fees',
      description: 'No hidden charges on international transactions',
    },
    {
      icon: Lock,
      value: '100%',
      label: 'Secure',
      description: '3D Secure & real-time fraud detection',
    },
    {
      icon: Zap,
      value: 'Instant',
      label: 'Activation',
      description: 'Start spending within seconds',
    },
    {
      icon: Bell,
      value: 'Real-time',
      label: 'Notifications',
      description: 'Get alerts for every transaction',
    },
    {
      icon: BarChart,
      value: 'Smart',
      label: 'Insights',
      description: 'Track spending with detailed analytics',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need in One Card
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Packed with features to make your spending easier, safer, and smarter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1">{feature.value}</div>
                <div className="text-lg font-semibold mb-2">{feature.label}</div>
                <div className="text-sm text-white/80">{feature.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
