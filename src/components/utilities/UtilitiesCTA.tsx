'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { ArrowRight, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function UtilitiesCTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-accent-600 via-primary-600 to-accent-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <Smartphone className="w-10 h-10" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Paying Bills Today
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Download Kavipay and simplify your life. Pay all your bills, buy airtime, and manage subscriptions from one app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/#download">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-accent-600 hover:bg-neutral-100"
                >
                  Download the App
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Link href="/card">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-2 border-white hover:bg-white/10"
                >
                  Explore Cards
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>150+ providers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Instant processing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-4">Have questions?</p>
          <Link
            href="/#faq"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Check out our FAQ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
