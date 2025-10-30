'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, RefreshCw, Bell, FileCheck } from 'lucide-react';
import { Card } from '@/components/ui';

export function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: '256-bit Encryption',
      description: 'Military-grade encryption protects all your data and transactions',
    },
    {
      icon: Lock,
      title: '3D Secure',
      description: 'Advanced authentication for online purchases adds an extra layer of security',
    },
    {
      icon: Eye,
      title: 'Fraud Detection',
      description: 'AI-powered real-time monitoring identifies and blocks suspicious activity',
    },
    {
      icon: RefreshCw,
      title: 'Instant Freeze',
      description: 'Lock or unlock your card instantly from the app with a single tap',
    },
    {
      icon: Bell,
      title: 'Real-time Alerts',
      description: 'Get instant notifications for every transaction and account activity',
    },
    {
      icon: FileCheck,
      title: 'PCI DSS Compliant',
      description: 'Certified compliance with payment card industry security standards',
    },
  ];

  const certifications = [
    { name: 'PCI DSS', level: 'Level 1' },
    { name: 'ISO 27001', level: 'Certified' },
    { name: 'SOC 2', level: 'Type II' },
    { name: 'GDPR', level: 'Compliant' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-50 via-white to-primary-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Bank-Grade Security
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            Your Money is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Protected
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We use industry-leading security measures to protect your funds and personal information. Your security is our top priority.
          </p>
        </motion.div>

        {/* Security Features Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-neutral-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              Certified & Compliant
            </h3>
            <p className="text-neutral-600">
              Our partners meet the highest industry standards for security and compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-primary-50 border border-neutral-200 hover:border-primary-300 transition-all cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-neutral-900 mb-1">{cert.name}</div>
                <div className="text-sm text-neutral-600">{cert.level}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-success/10 to-primary-100 px-6 py-4 rounded-full border border-success/20">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm font-semibold text-neutral-900">
                99.9% uptime • Zero data breaches • Trusted by 50,000+ users
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
