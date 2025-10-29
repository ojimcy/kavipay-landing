'use client';

import { motion } from 'framer-motion';
import { Shield, Verified, Globe2, TrendingUp } from 'lucide-react';

export function SocialProof() {
  const partners = [
    { name: 'Mastercard', text: 'MASTERCARD' },
    { name: 'Visa', text: 'VISA' },
    { name: 'Apple Pay', text: 'APPLE PAY' },
    { name: 'Google Pay', text: 'GOOGLE PAY' },
    { name: 'Samsung Pay', text: 'SAMSUNG PAY' },
  ];

  const metrics = [
    { icon: Globe2, value: 'Nigeria', label: 'Launching In', color: 'text-primary-500' },
    { icon: TrendingUp, value: 'Coming', label: 'Global Expansion', color: 'text-accent-500' },
    { icon: Shield, value: 'Bank-Grade', label: 'Security', color: 'text-success' },
    { icon: Verified, value: '99.9%', label: 'Uptime Goal', color: 'text-primary-600' },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      <div className="container mx-auto px-4">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 mb-3`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-neutral-600 mb-8 font-medium uppercase tracking-wider">
            Trusted Payment Partners
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  scale: 1.05,
                }}
                className="text-neutral-400 font-bold text-base md:text-lg tracking-wider cursor-pointer hover:text-primary-500 transition-all px-4 py-2 rounded-lg hover:bg-primary-50"
              >
                {partner.text}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center text-xs">👤</div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center text-xs">👤</div>
              <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center text-xs">👤</div>
            </div>
            <span className="text-sm font-semibold">
              Join our <span className="font-bold">waitlist</span> and be among the first users in <span className="font-bold">Nigeria</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
