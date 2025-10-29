'use client';

import { motion } from 'framer-motion';
import { Smartphone, Wifi, Globe, Users } from 'lucide-react';

export function AirtimeData() {
  const plans = [
    {
      icon: Smartphone,
      title: 'Mobile Airtime',
      description: 'Recharge any mobile number instantly',
      features: [
        'MTN, Airtel, Glo, 9mobile supported',
        'Instant top-up',
        'Send airtime to friends & family',
        'No extra charges',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Wifi,
      title: 'Mobile Data',
      description: 'Buy data bundles at competitive rates',
      features: [
        'Daily, weekly & monthly plans',
        'MTN, Airtel, Glo, 9mobile',
        'Automatic renewal options',
        'Competitive rates',
      ],
      color: 'from-accent-500 to-accent-600',
    },
  ];

  const operators = [
    'MTN', 'Airtel', 'Glo', '9mobile'
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-100 to-primary-100 px-4 py-2 rounded-full mb-6">
            <Smartphone className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-semibold text-accent-700">
              Airtime & Data
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            Stay Connected,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500">
              Always
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Buy airtime and data for yourself or send to loved ones. Instant delivery to all major Nigerian network operators.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${plan.color} rounded-3xl p-8 shadow-xl text-white`}
              >
                <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {plan.title}
                </h3>

                <p className="text-white/90 mb-6 text-lg">
                  {plan.description}
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <span className="text-sm">✓</span>
                      </span>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Supported operators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-200"
        >
          <div className="text-center mb-8">
            <Globe className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              All Major Nigerian Networks Supported
            </h3>
            <p className="text-neutral-600">
              Buy airtime and data for MTN, Airtel, Glo, and 9mobile
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {operators.map((operator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-lg text-neutral-700 font-medium"
              >
                {operator}
              </motion.div>
            ))}
          </div>

          {/* Additional features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-200">
            {[
              {
                icon: Users,
                title: 'Send to Anyone',
                description: 'Top up friends & family in Nigeria',
              },
              {
                icon: Smartphone,
                title: 'Quick Recharge',
                description: 'Save favorites for instant top-ups',
              },
              {
                icon: Globe,
                title: 'All Networks',
                description: 'Works with all major Nigerian operators',
              },
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 items-center justify-center mb-3">
                    <FeatureIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
