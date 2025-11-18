'use client';

import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, CreditCard } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Smartphone,
      title: 'Download & Sign Up',
      description: 'Takes 2 minutes',
    },
    {
      number: 2,
      icon: CheckCircle,
      title: 'Complete Verification',
      description: 'Quick ID check (0-2 minutes)',
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Start Spending',
      description: 'Get instant card, fund & use now',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-lg text-neutral-600">
            From download to first purchase in less than 10 minutes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Step Number */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold mb-6"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-10 h-10 text-primary-600" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>

                {/* Connector Line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
