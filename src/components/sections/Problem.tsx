'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

export function Problem() {
  const problems = [
    {
      icon: '💸',
      title: 'Surprise Charges',
      description: 'ATM fees. Foreign transaction fees. Overdraft charges. When does it end?',
    },
    {
      icon: '🚫',
      title: 'Card Declined... Again',
      description: "Your card doesn't work abroad. Or online. Or for subscriptions. What's the point?",
    },
    {
      icon: '⏰',
      title: 'Waiting. Always Waiting.',
      description: 'Days for transfers. Weeks for new cards. Life moves faster than your bank.',
    },
    {
      icon: '🤯',
      title: 'Endless Restrictions',
      description: 'Spending limits. Country blocks. Verification loops. Just let me use my money.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Your Bank is Holding You Back
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            You deserve better than outdated systems and endless restrictions
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
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card hover={false} className="text-center h-full">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">
                  {problem.title}
                </h3>
                <p className="text-neutral-600 text-sm">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl text-primary-600 font-semibold">
            There&apos;s a Better Way →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
