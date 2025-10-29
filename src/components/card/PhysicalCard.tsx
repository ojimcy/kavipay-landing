'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { CreditCard, Store, Banknote, Truck, Star, Shield } from 'lucide-react';

export function PhysicalCard() {
  const features = [
    {
      icon: Store,
      title: 'Shop Everywhere',
      description: 'Use at 45M+ stores, restaurants, and service providers worldwide.',
    },
    {
      icon: Banknote,
      title: 'ATM Withdrawals',
      description: 'Withdraw cash at ATMs globally with competitive exchange rates.',
    },
    {
      icon: Truck,
      title: 'Free Delivery in Nigeria',
      description: 'Get your card delivered to any address in Nigeria at no extra cost.',
    },
    {
      icon: Star,
      title: 'Premium Materials',
      description: 'Sleek metal cards available for premium users with exclusive benefits.',
    },
    {
      icon: Shield,
      title: 'Contactless Payments',
      description: 'Tap to pay with NFC technology. Fast, secure, and convenient.',
    },
    {
      icon: CreditCard,
      title: 'Custom Designs',
      description: 'Choose from multiple card designs or upload your own custom artwork.',
    },
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white px-4 py-2 rounded-full mb-6">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Physical Cards
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            Premium Physical Cards,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-600">
              Delivered in Nigeria
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Order a premium physical card for in-person shopping and ATM access. <span className="font-semibold text-neutral-900">Currently available in Nigeria</span>. Choose from classic plastic or upgrade to sleek metal cards.
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full mt-4">
            <span className="text-lg">🇳🇬</span>
            <span className="text-sm font-semibold">Available in Nigeria</span>
          </div>
        </motion.div>

        {/* Features Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center mb-4 group-hover:from-neutral-800 group-hover:to-neutral-900 transition-all">
                    <Icon className="w-6 h-6 text-neutral-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Card tiers showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Standard Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-neutral-200">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Standard Card</h3>
                <p className="text-neutral-600">Perfect for everyday use</p>
              </div>
              <div className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                Free
              </div>
            </div>

            {/* Card visual */}
            <div className="aspect-[1.586] bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-6 p-5 shadow-lg">
              <div className="flex flex-col justify-between h-full text-white">
                <div className="text-sm font-bold">KAVIPAY</div>
                <div>
                  <div className="text-sm tracking-wider mb-2">•••• •••• •••• 4589</div>
                  <div className="text-xs">Classic Plastic</div>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-500 mt-1">✓</span>
                <span className="text-neutral-700">Free delivery in Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-500 mt-1">✓</span>
                <span className="text-neutral-700">Zero annual fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-500 mt-1">✓</span>
                <span className="text-neutral-700">Contactless payments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-500 mt-1">✓</span>
                <span className="text-neutral-700">ATM withdrawals globally</span>
              </li>
            </ul>
          </div>

          {/* Premium Card */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 shadow-xl border border-neutral-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500 rounded-full blur-3xl opacity-20"></div>

            <div className="flex items-start justify-between mb-6 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Premium Metal</h3>
                <p className="text-neutral-300">For power users</p>
              </div>
              <div className="px-4 py-2 bg-accent-500 text-white rounded-full text-sm font-semibold">
                $5/mo
              </div>
            </div>

            {/* Card visual */}
            <div className="aspect-[1.586] bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-xl mb-6 p-5 shadow-2xl border border-neutral-600 relative z-10">
              <div className="flex flex-col justify-between h-full text-white">
                <div className="flex justify-between items-start">
                  <div className="text-sm font-bold">KAVIPAY</div>
                  <div className="text-lg">💎</div>
                </div>
                <div>
                  <div className="text-sm tracking-wider mb-2">•••• •••• •••• 8642</div>
                  <div className="text-xs">Premium Metal</div>
                </div>
              </div>
            </div>

            <ul className="space-y-3 relative z-10">
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">✓</span>
                <span className="text-neutral-200">All Standard benefits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">✓</span>
                <span className="text-neutral-200">Sleek metal card design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">✓</span>
                <span className="text-neutral-200">Priority customer support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">✓</span>
                <span className="text-neutral-200">Higher spending limits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-400 mt-1">✓</span>
                <span className="text-neutral-200">Free ATM withdrawals globally</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
