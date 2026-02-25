'use client';

import { motion } from 'framer-motion';
import { Download, UserCheck, CreditCard } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download the App',
    description: 'Get Kavipay from the App Store or Google Play. Sign up takes less than 2 minutes.',
    color: 'bg-indigo-600',
    iconBg: 'bg-indigo-50 text-indigo-600',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Verify Your Identity',
    description: 'Quick KYC verification with your ID. Automated process completes in under 2 minutes.',
    color: 'bg-violet-600',
    iconBg: 'bg-violet-50 text-violet-600',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Start Spending',
    description: 'Fund your wallet, create a virtual card, and start spending globally — instantly.',
    color: 'bg-emerald-600',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Get started in <span className="text-indigo-600">3 easy steps</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto">
            From download to first purchase in less than 10 minutes. No paperwork, no branch visits.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-[2px]">
                    <div
                      className="h-full"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, #D1D5DB 0px, #D1D5DB 6px, transparent 6px, transparent 12px)',
                      }}
                    />
                  </div>
                )}

                <div className="text-center">
                  {/* Step number */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${step.color} text-white text-xl font-bold mb-6`}>
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                    <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-7 h-7" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
