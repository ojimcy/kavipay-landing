'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from '@/components/ui';
import { analytics } from '@/lib/analytics';

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
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (platform: 'ios' | 'android') => {
    analytics.downloadClick(platform);
    // Add actual app store links here
  };

  return (
    <section id="download" className="py-16 md:py-24 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 animate-gradient relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Take Control?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands spending smarter with Kavipay
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleDownload('ios')}
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition min-w-[200px]"
            >
              Download for iOS
            </button>
            <button
              onClick={() => handleDownload('android')}
              className="bg-white text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition min-w-[200px]"
            >
              Download for Android
            </button>
          </div>

          {/* Email Waitlist */}
          <div className="max-w-md mx-auto">
            <p className="text-sm mb-4 opacity-90">
              Or get early access to new features via email
            </p>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4"
              >
                <p className="font-medium">✓ You&apos;re on the list!</p>
                <p className="text-sm opacity-90 mt-1">
                  Check your email for updates
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  disabled={loading}
                  className="bg-white text-primary-600 hover:bg-neutral-100 border-0"
                >
                  {loading ? 'Joining...' : 'Join'}
                </Button>
              </form>
            )}

            {error && (
              <p className="text-sm text-red-200 mt-2">{error}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
