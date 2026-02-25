'use client';

import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, CreditCard } from 'lucide-react';

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

function ConnectorLine({ index }: { index: number }) {
  return (
    <div className="hidden md:flex items-center justify-center absolute top-14 -right-[calc(50%-2rem)] z-0 w-[calc(100%-4rem)]">
      <motion.div
        className="h-[3px] w-full rounded-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #6366F1 0px, #6366F1 8px, transparent 8px, transparent 16px)',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.4 + index * 0.3,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

function PulseRing({ delay }: { delay: number }) {
  return (
    <>
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-primary-400"
        animate={{
          scale: [1, 1.6],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: 'easeOut',
        }}
      />
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-primary-300"
        animate={{
          scale: [1, 2],
          opacity: [0.4, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay + 0.4,
          ease: 'easeOut',
        }}
      />
    </>
  );
}

export function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-neutral-50/50 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-50/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold tracking-wide mb-5"
          >
            Simple Onboarding
          </motion.span>
          <h2 className="text-3xl md:text-h2 font-bold text-neutral-900 mb-4">
            Get Started in 3 Easy Steps
          </h2>
          <p className="text-lg md:text-body-lg text-neutral-500 max-w-xl mx-auto">
            From download to first purchase in less than 10 minutes. No paperwork, no branch visits.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Line (between steps, desktop only) */}
                {index < steps.length - 1 && <ConnectorLine index={index} />}

                {/* Step Number with Pulse */}
                <div className="relative mb-6">
                  <PulseRing delay={index * 0.7} />
                  <motion.div
                    className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white text-xl font-bold shadow-lg shadow-primary-500/25"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  className="w-full rounded-2xl bg-white border border-neutral-100 p-8 pt-6 shadow-card transition-shadow duration-300 group-hover:shadow-card-hover"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Icon Box */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-5 rounded-xl bg-primary-100 flex items-center justify-center"
                    whileHover={{
                      rotate: [0, -8, 8, -4, 0],
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-primary-600" strokeWidth={1.8} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
