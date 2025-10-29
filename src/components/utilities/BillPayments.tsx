'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { Zap, Droplet, Wifi, Phone, Tv, Building } from 'lucide-react';

export function BillPayments() {
  const categories = [
    {
      icon: Zap,
      title: 'Electricity Bills',
      description: 'Pay your electricity bills for all Nigerian Distribution Companies (DISCOs). Instant confirmation and payment receipts.',
      providers: ['Ikeja Electric', 'Eko Electric', 'Abuja Electric', 'Ibadan Electric', 'All DISCOs'],
      color: 'from-yellow-100 to-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: Tv,
      title: 'TV Subscription',
      description: 'Renew your TV subscriptions easily. Support for all major providers in Nigeria.',
      providers: ['DSTV', 'GOTV', 'StarTimes', 'ShowMax'],
      color: 'from-red-100 to-pink-100',
      iconColor: 'text-red-600',
    },
    {
      icon: Building,
      title: 'International Bills',
      description: 'Pay bills for international services. More providers coming soon.',
      providers: ['Coming Soon'],
      color: 'from-indigo-100 to-blue-100',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Bill Payments
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            All Your Bills,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              One Platform
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Pay your bills instantly with just a few taps. Support for all major service providers in Nigeria.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${category.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {category.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-100">
                    <div className="text-xs text-neutral-500 mb-2">Supported providers:</div>
                    <div className="flex flex-wrap gap-1">
                      {category.providers.map((provider, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded"
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Why Pay Bills with Kavipay?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Instant Processing',
                description: 'Bills are paid instantly. No more waiting days for confirmation.',
              },
              {
                title: 'Auto-Pay Options',
                description: 'Set up recurring payments and never miss a due date again.',
              },
              {
                title: 'Payment History',
                description: 'Access all your payment receipts and history in one place.',
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">{feature.title}</div>
                  <div className="text-sm text-neutral-600">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
