'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function CardComparison() {
  const comparisonData = [
    {
      feature: 'Card Issuance',
      kavipay: 'Instant (Virtual) / 5-7 days (Physical)',
      traditional: '2-4 weeks',
    },
    {
      feature: 'Global Acceptance',
      kavipay: '45M+ merchants worldwide',
      traditional: 'Limited to select countries',
    },
    {
      feature: 'Monthly Fees',
      kavipay: '$0',
      traditional: '$5-$15',
    },
    {
      feature: 'Foreign Transaction Fees',
      kavipay: '0%',
      traditional: '2-3%',
    },
    {
      feature: 'ATM Withdrawal Fees',
      kavipay: 'Low flat rate',
      traditional: '$3-$5 + percentage',
    },
    {
      feature: 'Card Controls',
      kavipay: 'Freeze/unfreeze instantly',
      traditional: 'Call customer service',
    },
    {
      feature: 'Multiple Cards',
      kavipay: 'Unlimited virtual cards',
      traditional: 'Usually 1 card per account',
    },
    {
      feature: 'Real-time Notifications',
      kavipay: true,
      traditional: false,
    },
    {
      feature: 'Spending Analytics',
      kavipay: true,
      traditional: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            How Kavipay{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Compares
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            See why users are switching from traditional banks to Kavipay
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b-2 border-neutral-200">
            <div className="text-neutral-600 font-semibold">Feature</div>
            <div className="text-center">
              <div className="inline-flex px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-bold">
                Kavipay
              </div>
            </div>
            <div className="text-center text-neutral-600 font-semibold">
              Traditional Banks
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-1">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <div className="font-medium text-neutral-900">{row.feature}</div>
                <div className="text-center">
                  {typeof row.kavipay === 'boolean' ? (
                    row.kavipay ? (
                      <div className="inline-flex w-8 h-8 rounded-full bg-success/20 items-center justify-center">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                    ) : (
                      <div className="inline-flex w-8 h-8 rounded-full bg-neutral-200 items-center justify-center">
                        <X className="w-5 h-5 text-neutral-500" />
                      </div>
                    )
                  ) : (
                    <span className="text-primary-600 font-semibold">{row.kavipay}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof row.traditional === 'boolean' ? (
                    row.traditional ? (
                      <div className="inline-flex w-8 h-8 rounded-full bg-success/20 items-center justify-center">
                        <Check className="w-5 h-5 text-success" />
                      </div>
                    ) : (
                      <div className="inline-flex w-8 h-8 rounded-full bg-error/20 items-center justify-center">
                        <X className="w-5 h-5 text-error" />
                      </div>
                    )
                  ) : (
                    <span className="text-neutral-600">{row.traditional}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
