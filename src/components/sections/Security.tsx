'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  RefreshCw,
  Bell,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { Card } from '@/components/ui';

const securityFeatures = [
  {
    icon: Shield,
    title: '256-bit Encryption',
    description:
      'Military-grade AES-256 encryption safeguards every transaction and piece of personal data end-to-end.',
    accent: 'from-primary-500 to-primary-600',
    accentLight: 'from-primary-50 to-primary-100',
  },
  {
    icon: Lock,
    title: '3D Secure',
    description:
      'Multi-factor authentication on every online purchase adds an impenetrable extra layer of verification.',
    accent: 'from-primary-600 to-primary-700',
    accentLight: 'from-primary-50 to-indigo-100',
  },
  {
    icon: Eye,
    title: 'Fraud Detection',
    description:
      'AI-powered behavioral analysis monitors transactions in real time, blocking suspicious activity before it reaches you.',
    accent: 'from-secondary-500 to-secondary-600',
    accentLight: 'from-secondary-50 to-secondary-100',
  },
  {
    icon: RefreshCw,
    title: 'Instant Freeze',
    description:
      'Lock or unlock your card in a single tap from the app. Full control, zero delay, total peace of mind.',
    accent: 'from-primary-500 to-secondary-500',
    accentLight: 'from-primary-50 to-secondary-50',
  },
  {
    icon: Bell,
    title: 'Real-time Alerts',
    description:
      'Instant push notifications for every transaction, login, and account change so nothing slips past you.',
    accent: 'from-secondary-500 to-secondary-600',
    accentLight: 'from-secondary-50 to-emerald-100',
  },
  {
    icon: FileCheck,
    title: 'PCI DSS Compliant',
    description:
      'Fully certified against the highest payment card industry security standards, audited annually.',
    accent: 'from-primary-600 to-primary-700',
    accentLight: 'from-primary-50 to-primary-100',
  },
];

const certifications = [
  { name: 'PCI DSS', level: 'Level 1' },
  { name: 'ISO 27001', level: 'Certified' },
  { name: 'SOC 2', level: 'Type II' },
  { name: 'GDPR', level: 'Compliant' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const certVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Security() {
  return (
    <section
      id="security"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-primary-50/10 pointer-events-none" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-16 -left-32 w-[420px] h-[420px] rounded-full bg-primary-400/[0.06] blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-secondary-400/[0.07] blur-[100px]"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-300/[0.04] blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-primary-200/60 shadow-sm px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600 tracking-wide">
              Bank-Grade Security
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-h2 font-bold text-neutral-900 mb-5 leading-tight">
            Your Money is{' '}
            <span className="gradient-text">Protected</span>
          </h2>

          <p className="text-lg md:text-body-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Industry-leading security measures guard your funds and personal
            information around the clock. Your safety is non-negotiable.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20"
        >
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  hover
                  className="group relative h-full border-neutral-100/80 hover:border-primary-200/60 hover:shadow-card-hover"
                >
                  {/* Subtle top-left gradient glow on hover */}
                  <div className="absolute -top-px -left-px w-24 h-24 bg-gradient-to-br from-primary-100/0 to-transparent rounded-tl-2xl group-hover:from-primary-100/40 transition-all duration-500 pointer-events-none" />

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accentLight} flex items-center justify-center group-hover:bg-gradient-to-br group-hover:${feature.accent} transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-neutral-900 mb-1.5 group-hover:text-primary-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white rounded-2xl border border-neutral-100 shadow-card p-8 md:p-12"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
              Certified & Compliant
            </h3>
            <p className="text-neutral-500 text-sm md:text-base max-w-xl mx-auto">
              Our infrastructure meets the highest global standards for security,
              privacy, and compliance.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={certVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative text-center p-5 md:p-6 rounded-xl bg-gradient-to-br from-neutral-50/80 to-primary-50/40 border border-neutral-200/60 hover:border-primary-300/60 hover:shadow-soft transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 group-hover:from-primary-600 group-hover:to-secondary-500 flex items-center justify-center shadow-sm transition-all duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-neutral-900 text-sm md:text-base mb-0.5">
                  {cert.name}
                </div>
                <div className="text-xs md:text-sm text-neutral-500 font-medium">
                  {cert.level}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 md:mt-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-secondary-50 to-primary-50 border border-secondary-200/40 px-5 py-3 rounded-full">
              <CheckCircle2 className="w-4.5 h-4.5 text-secondary-500 flex-shrink-0" />
              <span className="text-sm font-medium text-neutral-700 tracking-tight">
                99.9% uptime{' '}
                <span className="text-neutral-300 mx-1">&bull;</span>{' '}
                Zero data breaches{' '}
                <span className="text-neutral-300 mx-1">&bull;</span>{' '}
                Trusted by 50,000+ users
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
