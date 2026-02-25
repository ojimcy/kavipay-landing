'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  CreditCard,
  Globe,
  Zap,
  Shield,
  Smartphone,
  Receipt,
} from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Virtual & Physical Cards',
    description: 'Get instant virtual cards for global shopping. Order physical cards in Nigeria. Add to Apple Pay & Google Pay.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Globe,
    title: 'Spend Globally',
    description: 'Accepted at 45M+ Visa/Mastercard merchants worldwide. No blocked transactions, no borders.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Zap,
    title: 'Instant Funding',
    description: 'Load your card and start spending in seconds. Fund from bank accounts or mobile money.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: '256-bit encryption, 3D Secure, real-time fraud detection. Your money is always protected.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Smartphone,
    title: 'Pay Bills Easily',
    description: 'Buy airtime, data, pay electricity & TV bills directly from the app. Available in Nigeria.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Receipt,
    title: 'Zero Hidden Fees',
    description: 'No monthly fees, no minimums, no surprises. Transparent pricing — you only pay what you see.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Everything you need to{' '}
            <span className="text-indigo-600">manage your money</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            From virtual cards to bill payments — one app for all your financial needs.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-2xl border border-neutral-100 bg-white hover:shadow-lg hover:border-neutral-200 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* App showcase: Cards feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
              Virtual Cards
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Get your card in seconds, spend anywhere
            </h3>
            <p className="text-neutral-500 leading-relaxed mb-6">
              Create unlimited virtual cards instantly. Each card comes with its own details, perfect for subscriptions, online shopping, or separating expenses. Works with Visa and Mastercard networks globally.
            </p>
            <ul className="space-y-3">
              {[
                'Instant virtual card creation',
                'Works with Apple Pay & Google Pay',
                'Freeze or unfreeze in one tap',
                'Real-time spending notifications',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-neutral-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative w-[240px] sm:w-[260px]">
              <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/15 to-violet-500/10 rounded-[40px] blur-[30px]" />
              <div className="relative bg-neutral-900 rounded-[2.5rem] p-[5px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
                <div className="bg-neutral-950 rounded-[2.2rem] overflow-hidden">
                  <Image
                    src="/images/app/screen-cards.svg"
                    alt="Kavipay Cards Screen"
                    width={375}
                    height={812}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* App showcase: Utilities feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:order-1"
          >
            <div className="relative w-[240px] sm:w-[260px]">
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/15 to-teal-500/10 rounded-[40px] blur-[30px]" />
              <div className="relative bg-neutral-900 rounded-[2.5rem] p-[5px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
                <div className="bg-neutral-950 rounded-[2.2rem] overflow-hidden">
                  <Image
                    src="/images/app/screen-send.svg"
                    alt="Kavipay Utilities Screen"
                    width={375}
                    height={812}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:order-2"
          >
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
              Bill Payments
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Pay bills and buy airtime from one place
            </h3>
            <p className="text-neutral-500 leading-relaxed mb-6">
              No more switching between apps. Buy airtime, data bundles, pay electricity bills, and subscribe to cable TV — all from your Kavipay wallet with zero extra fees.
            </p>
            <ul className="space-y-3">
              {[
                'Airtime & data for all networks',
                'Electricity bill payments (PHCN)',
                'Cable TV subscriptions (DSTV, GOtv, Startimes)',
                'Instant delivery, zero fees',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-neutral-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
