'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { Zap, ShoppingCart, Lock, Smartphone, RefreshCw, Eye } from 'lucide-react';

export function VirtualCard() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Creation',
      description: 'Create unlimited virtual cards in seconds. Start spending immediately after activation.',
    },
    {
      icon: ShoppingCart,
      title: 'Perfect for Online Shopping',
      description: 'Shop safely on any website worldwide. Ideal for subscriptions and e-commerce.',
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Create single-use cards for risky transactions. Freeze or delete cards anytime.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Add to Apple Pay, Google Pay, or Samsung Pay for contactless payments anywhere.',
    },
    {
      icon: RefreshCw,
      title: 'Disposable Cards',
      description: 'Generate temporary cards for free trials without worrying about recurring charges.',
    },
    {
      icon: Eye,
      title: 'Complete Control',
      description: 'View card details instantly, set spending limits, and track every transaction in real-time.',
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-200 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Virtual Cards
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            Global Virtual Cards,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Instant Access
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Create virtual cards instantly and shop <span className="font-semibold text-neutral-900">anywhere in the world</span>. Add to Apple Pay & Google Pay for global contactless payments. Perfect for freelancers, digital nomads, and online shoppers.
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full mt-4">
            <span className="text-lg">🌍</span>
            <span className="text-sm font-semibold">Works Globally</span>
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-accent-500 transition-all">
                    <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
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

        {/* Visual showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Create Cards in Seconds
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                No waiting, no paperwork. Create unlimited virtual cards instantly from the app. Each card comes with its own unique number, CVV, and expiry date.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-neutral-700">No annual or monthly fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-neutral-700">Accepted at millions of online merchants worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-neutral-700">3D Secure authentication for maximum security</span>
                </li>
              </ul>
            </div>

            {/* Phone mockup placeholder */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-[9/16] bg-neutral-900 rounded-3xl shadow-2xl p-4 relative">
                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-6 flex items-center justify-center text-white text-center">
                  <div>
                    <div className="text-5xl mb-4">💳</div>
                    <p className="text-sm opacity-90">
                      Virtual card creation screen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300 rounded-full blur-3xl opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
}
