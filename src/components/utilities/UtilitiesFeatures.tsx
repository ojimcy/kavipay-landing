'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Bell, History, DollarSign, HeadphonesIcon } from 'lucide-react';

export function UtilitiesFeatures() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Pay bills anytime, anywhere. No business hours restrictions.',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Bank-level encryption protects every transaction you make.',
    },
    {
      icon: Bell,
      title: 'Payment Reminders',
      description: 'Get notified before due dates. Never miss a payment again.',
    },
    {
      icon: History,
      title: 'Transaction History',
      description: 'Access detailed records of all your payments and top-ups.',
    },
    {
      icon: DollarSign,
      title: 'No Hidden Fees',
      description: 'Transparent pricing. What you see is what you pay.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our customer support team is always ready to help.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 text-white relative overflow-hidden">
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
            Built for Your Convenience
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Everything you need to manage your bills and payments in one simple, secure platform
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
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: 'All', label: 'Major Providers' },
            { value: 'Coming', label: 'Soon' },
            { value: '99.9%', label: 'Target Uptime' },
            { value: '<30s', label: 'Processing Time' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
