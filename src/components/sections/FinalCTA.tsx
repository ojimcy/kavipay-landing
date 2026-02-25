'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <section className="py-20 md:py-28 bg-indigo-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-400/20 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to take control of your money?
          </h2>

          <p className="text-lg text-indigo-100 mb-10 max-w-lg mx-auto">
            Join thousands spending smarter with Kavipay. No fees, no borders, no limits.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <button
              onClick={() => {
                analytics.downloadClick('ios');
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 min-w-[200px] flex items-center justify-center gap-2"
            >
              Download for iOS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => {
                analytics.downloadClick('android');
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-white/15 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/25 transition-all duration-200 border border-white/20 min-w-[200px] flex items-center justify-center gap-2"
            >
              Download for Android
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Email signup */}
          <div className="max-w-md mx-auto">
            <p className="text-sm mb-4 text-indigo-200">
              Or get early access to new features via email
            </p>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/15 rounded-xl p-5 border border-white/20"
              >
                <Sparkles className="w-6 h-6 text-white mx-auto mb-2" />
                <p className="font-semibold text-white">You&apos;re on the list!</p>
                <p className="text-sm text-indigo-200 mt-1">Check your email for updates</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Joining...' : 'Join'}
                </button>
              </form>
            )}

            {error && <p className="text-sm text-red-200 mt-3">{error}</p>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
