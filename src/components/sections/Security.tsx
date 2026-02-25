'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, RefreshCw, Bell, FileCheck } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: '256-bit Encryption',
    description: 'Military-grade AES-256 encryption protects every transaction and piece of personal data.',
  },
  {
    icon: Lock,
    title: '3D Secure',
    description: 'Multi-factor authentication on every online purchase for an extra layer of protection.',
  },
  {
    icon: Eye,
    title: 'Fraud Detection',
    description: 'AI-powered monitoring flags suspicious activity in real time before it reaches you.',
  },
  {
    icon: RefreshCw,
    title: 'Instant Freeze',
    description: 'Lock or unlock your card in a single tap. Full control from the app, zero delay.',
  },
  {
    icon: Bell,
    title: 'Real-time Alerts',
    description: 'Instant push notifications for every transaction, login, and account change.',
  },
  {
    icon: FileCheck,
    title: 'PCI DSS Compliant',
    description: 'Certified against the highest payment card industry security standards.',
  },
];

const certifications = [
  { name: 'PCI DSS', level: 'Level 1' },
  { name: 'ISO 27001', level: 'Certified' },
  { name: 'SOC 2', level: 'Type II' },
  { name: 'GDPR', level: 'Compliant' },
];

export function Security() {
  return (
    <section id="security" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            <Shield className="w-4 h-4" />
            Security
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Your money is <span className="text-indigo-600">protected</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Industry-leading security measures guard your funds and personal information around the clock.
          </p>
        </motion.div>

        {/* Security grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-neutral-100 bg-white hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-indigo-600" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100"
        >
          <h3 className="text-xl font-bold text-neutral-900 text-center mb-8">
            Certified & Compliant
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="text-center p-4 rounded-xl bg-white border border-neutral-100"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="font-bold text-sm text-neutral-900">{cert.name}</div>
                <div className="text-xs text-neutral-500">{cert.level}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
