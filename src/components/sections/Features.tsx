'use client';

import { motion } from 'framer-motion';
import {
  CreditCard,
  Globe,
  Zap,
  Lock,
  DollarSign,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  span: 1 | 2;
}

const features: Feature[] = [
  {
    icon: CreditCard,
    title: 'Virtual & Physical Cards',
    description:
      'No more waiting days for cards. Get instant virtual cards for global shopping, or order physical cards (Nigeria). Add to Apple Pay & Google Pay in seconds.',
    badge: 'Most Popular',
    badgeColor: 'text-primary-700',
    badgeBg: 'bg-primary-50 border border-primary-200',
    span: 2,
  },
  {
    icon: Globe,
    title: 'True Global Access',
    description:
      'No more blocked transactions abroad. Spend at 45M+ Visa/Mastercard merchants worldwide. Your money works everywhere you do.',
    badge: 'Essential',
    badgeColor: 'text-secondary-700',
    badgeBg: 'bg-secondary-50 border border-secondary-200',
    span: 2,
  },
  {
    icon: Zap,
    title: 'Instant Everything',
    description:
      'No more waiting for transfers. Load your card and start spending in seconds. Fund instantly from bank accounts or other payment methods.',
    badge: 'Fast',
    badgeColor: 'text-amber-700',
    badgeBg: 'bg-amber-50 border border-amber-200',
    span: 1,
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description:
      'Military-grade encryption, 3D Secure authentication, and real-time fraud detection keep your money safe 24/7.',
    badge: 'Secure',
    badgeColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-50 border border-emerald-200',
    span: 1,
  },
  {
    icon: DollarSign,
    title: 'Zero Hidden Fees',
    description:
      'No monthly fees, no account minimums, no hidden costs. Transparent pricing — you only pay what you spend.',
    badge: 'Transparent',
    badgeColor: 'text-primary-700',
    badgeBg: 'bg-primary-50 border border-primary-200',
    span: 1,
  },
  {
    icon: TrendingUp,
    title: 'Smart Money Tools',
    description:
      'AI-powered spending insights, automated budgeting, and real-time notifications help you manage money effortlessly.',
    badge: 'Smart',
    badgeColor: 'text-violet-700',
    badgeBg: 'bg-violet-50 border border-violet-200',
    span: 1,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4"
          >
            Features
          </motion.span>

          <h2 className="text-h2-mobile md:text-h2 text-neutral-900 mb-5 max-w-3xl mx-auto">
            Payment That Actually{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Works for You
            </span>
          </h2>

          <p className="text-lg md:text-body-lg text-neutral-500 max-w-2xl mx-auto">
            Say goodbye to blocked transactions, hidden fees, and endless waiting.
            Global payments made simple.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.span === 2;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`group relative ${
                  isLarge ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                {/* Gradient border wrapper — visible on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />

                {/* Card body */}
                <div
                  className={`relative h-full bg-white border border-neutral-100 rounded-2xl transition-shadow duration-300 group-hover:shadow-card-hover ${
                    isLarge ? 'p-8 md:p-10' : 'p-7 md:p-8'
                  }`}
                >
                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className="relative">
                      <div
                        className={`${
                          isLarge ? 'w-14 h-14' : 'w-12 h-12'
                        } rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300`}
                      >
                        <Icon
                          className={`${
                            isLarge ? 'w-7 h-7' : 'w-6 h-6'
                          } text-primary-600 group-hover:text-white transition-colors duration-300`}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

                    {/* Badge */}
                    <span
                      className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${feature.badgeBg} ${feature.badgeColor}`}
                    >
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-semibold text-neutral-900 mb-2.5 group-hover:text-primary-600 transition-colors duration-200 ${
                      isLarge ? 'text-xl md:text-2xl' : 'text-lg'
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-neutral-500 leading-relaxed ${
                      isLarge ? 'text-base md:text-[17px]' : 'text-sm md:text-[15px]'
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Bottom gradient line — appears on hover */}
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
