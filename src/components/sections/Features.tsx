'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { CreditCard, Globe, Zap, Lock, DollarSign, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: CreditCard,
      title: 'Virtual & Physical Cards',
      description:
        'No more waiting days for cards. Get instant virtual cards for global shopping, or order physical cards (Nigeria). Add to Apple Pay & Google Pay in seconds.',
      badge: 'Most Popular',
      badgeColor: 'bg-primary-500',
    },
    {
      icon: Globe,
      title: 'True Global Access',
      description: 'No more blocked transactions abroad. Spend at 45M+ Visa/Mastercard merchants worldwide. Your money works everywhere you do.',
      badge: 'Essential',
      badgeColor: 'bg-accent-500',
    },
    {
      icon: Zap,
      title: 'Instant Everything',
      description: 'No more waiting for transfers. Load your card and start spending in seconds. Fund instantly from bank accounts or other payment methods.',
      badge: 'Fast',
      badgeColor: 'bg-warning',
    },
    {
      icon: Lock,
      title: 'Bank-Grade Security',
      description: 'No more security worries. Military-grade encryption, 3D Secure authentication, and real-time fraud detection keep your money safe 24/7.',
      badge: 'Secure',
      badgeColor: 'bg-success',
    },
    {
      icon: DollarSign,
      title: 'Zero Hidden Fees',
      description: 'No more surprise charges. No monthly fees, no account minimums, no hidden costs. Transparent pricing - you only pay what you spend.',
      badge: 'Transparent',
      badgeColor: 'bg-primary-600',
    },
    {
      icon: TrendingUp,
      title: 'Smart Money Tools',
      description: 'No more spreadsheets. AI-powered spending insights, automated budgeting, and real-time notifications help you manage money effortlessly.',
      badge: 'Smart',
      badgeColor: 'bg-accent-600',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Payment That Actually Works for You
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Say goodbye to blocked transactions, hidden fees, and endless waiting. Global payments made simple.
          </p>
        </motion.div>

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group relative overflow-hidden h-full">
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${feature.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {feature.badge}
                  </div>

                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-5 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>

                  {/* Hover effect border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
