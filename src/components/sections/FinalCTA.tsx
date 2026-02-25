'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from '@/components/ui';
import { analytics } from '@/lib/analytics';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail('');
        analytics.emailSubmit('final_cta');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (platform: 'ios' | 'android') => {
    analytics.downloadClick(platform);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 via-transparent to-secondary-500/30 animate-gradient" style={{ backgroundSize: '200% 200%' }} />

      {/* Decorative orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-400 rounded-full blur-[140px]"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-secondary-300" />
            <span className="text-sm font-medium text-white/90">Ready to get started?</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Take{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-100 to-secondary-300">
              Control?
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-xl mx-auto leading-relaxed">
            Join thousands spending smarter with Kavipay. No fees, no borders, no limits.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <button
              onClick={() => handleDownload('ios')}
              className="group bg-white text-neutral-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-50 transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-0.5 min-w-[200px] flex items-center justify-center gap-2"
            >
              <span>Download for iOS</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
            <button
              onClick={() => handleDownload('android')}
              className="group bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/25 transition-all duration-300 border border-white/20 min-w-[200px] flex items-center justify-center gap-2"
            >
              <span>Download for Android</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>
          </div>

          {/* Email Waitlist */}
          <div className="max-w-md mx-auto">
            <p className="text-sm mb-4 text-white/70">
              Or get early access to new features via email
            </p>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-secondary-300" />
                </div>
                <p className="font-semibold text-lg">You&apos;re on the list!</p>
                <p className="text-sm text-white/70 mt-1">
                  Check your email for updates
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 rounded-xl focus:border-white/40 focus:ring-white/20"
                />
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className="bg-white text-primary-700 hover:bg-neutral-50 shadow-none hover:shadow-soft-lg border-0 rounded-xl"
                >
                  {loading ? 'Joining...' : 'Join'}
                </Button>
              </form>
            )}

            {error && (
              <p className="text-sm text-red-200 mt-3">{error}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
