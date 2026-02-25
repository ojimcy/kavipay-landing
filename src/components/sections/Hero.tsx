'use client';

import { Button } from '@/components/ui';
import { analytics } from '@/lib/analytics';
import { motion } from 'framer-motion';
import { ApplePayLogo, GooglePayLogo } from '@/components/icons/PaymentLogos';

export function Hero() {
  const handleDownload = () => {
    analytics.ctaClick('hero_download');
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    analytics.ctaClick('hero_learn_more');
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#fafbff] pt-20"
    >
      {/* ── Dot grid background ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Animated mesh gradient orbs ── */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-400/30 via-indigo-500/20 to-transparent blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute top-1/3 right-0 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-emerald-400/25 via-emerald-500/15 to-transparent blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 50, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        className="pointer-events-none absolute -bottom-24 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-indigo-300/20 via-violet-400/15 to-transparent blur-[100px]"
      />

      {/* ── Content ── */}
      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ════════ Left column: Copy ════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-indigo-200/60 bg-white/80 px-5 py-2.5 shadow-[0_1px_3px_rgba(99,102,241,0.08)] backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold tracking-tight text-primary-700">
                Global Virtual Cards &nbsp;|&nbsp; Powered by Visa &amp; Mastercard
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
            >
              Your Money,{' '}
              <span className="gradient-text-hero">Without Borders</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl"
            >
              Virtual cards that work seamlessly with{' '}
              <span className="font-semibold text-neutral-900">Apple Pay &amp; Google Pay</span>.
              Shop globally, subscribe effortlessly, pay instantly&mdash;zero hidden fees.
            </motion.p>

            {/* Nigeria note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2 text-sm text-neutral-500"
            >
              <span className="inline-block h-1 w-1 rounded-full bg-emerald-500" />
              Physical cards &amp; utilities available in Nigeria
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button variant="primary" size="lg" onClick={handleDownload}>
                Get Started
              </Button>
              <Button variant="secondary" size="lg" onClick={handleLearnMore}>
                <span className="flex items-center gap-2">
                  See How It Works
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </span>
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
            >
              {/* Waitlist count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    'from-indigo-500 to-violet-500',
                    'from-emerald-400 to-teal-500',
                    'from-amber-400 to-orange-500',
                    'from-rose-400 to-pink-500',
                  ].map((gradient, i) => (
                    <div
                      key={i}
                      className={`h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br ${gradient} shadow-sm`}
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-neutral-900">2,400+ on waitlist</div>
                  <div className="text-neutral-500">Join early access</div>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-neutral-200 sm:block" />

              {/* Apple Pay / Google Pay */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white px-4 py-2.5 shadow-sm">
                  <ApplePayLogo className="h-5" />
                  <div className="h-5 w-px bg-neutral-200" />
                  <GooglePayLogo className="h-5" />
                </div>
                <span className="text-sm font-medium text-neutral-500">Ready to use</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ════════ Right column: Phone mockup ════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px]">
              {/* ── Glow effect behind phone ── */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-gradient-to-br from-indigo-500/50 via-violet-500/30 to-emerald-500/40 blur-[60px]"
              />

              {/* ── Phone body ── */}
              <div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-b from-neutral-800 to-neutral-900 p-2 shadow-[0_25px_60px_-12px_rgba(99,102,241,0.35)]">
                {/* Bezel ring */}
                <div className="rounded-[34px] border border-neutral-700/50 bg-neutral-950 p-1">
                  {/* Screen container */}
                  <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-b from-[#0f0f23] to-[#0a0a1a]">
                    {/* Notch */}
                    <div className="relative z-20 flex justify-center pt-3">
                      <div className="h-[26px] w-[100px] rounded-full bg-neutral-950" />
                    </div>

                    {/* Screen content */}
                    <div className="flex flex-col px-5 pb-6 pt-4" style={{ minHeight: '480px' }}>
                      {/* Status bar */}
                      <div className="mb-6 flex items-center justify-between text-[11px] font-medium text-white/50">
                        <span>9:41</span>
                        <div className="flex items-center gap-1.5">
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                          </svg>
                          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                          </svg>
                        </div>
                      </div>

                      {/* App header */}
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-medium text-white/40">Welcome back</p>
                          <p className="text-base font-bold text-white">My Cards</p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600">
                          <span className="text-xs font-bold text-white">K</span>
                        </div>
                      </div>

                      {/* Card preview */}
                      <div className="relative mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-emerald-500 p-5 shadow-lg">
                        {/* Card pattern */}
                        <div className="pointer-events-none absolute inset-0 opacity-10">
                          <div
                            className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[20px] border-white/30"
                          />
                          <div
                            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-[16px] border-white/20"
                          />
                        </div>

                        <div className="relative flex h-full flex-col justify-between" style={{ minHeight: '140px' }}>
                          <div className="flex items-start justify-between">
                            <span className="text-[11px] font-bold tracking-widest text-white/90">
                              KAVIPAY
                            </span>
                            {/* Chip */}
                            <div className="flex h-7 w-9 items-center justify-center rounded-[5px] bg-gradient-to-br from-amber-300 to-amber-400 shadow-inner">
                              <div className="h-3 w-5 rounded-sm border border-amber-500/30 bg-gradient-to-b from-amber-200 to-amber-300" />
                            </div>
                          </div>
                          <div className="mt-5">
                            <p className="mb-2 font-mono text-sm tracking-[0.18em] text-white/90">
                              •••• •••• •••• 8642
                            </p>
                            <div className="flex items-end justify-between">
                              <div>
                                <p className="text-[8px] uppercase tracking-wider text-white/50">
                                  Cardholder
                                </p>
                                <p className="text-xs font-semibold text-white">John Doe</p>
                              </div>
                              <div>
                                <p className="text-[8px] uppercase tracking-wider text-white/50">
                                  Expires
                                </p>
                                <p className="text-xs font-semibold text-white">12/28</p>
                              </div>
                              <span className="text-sm font-extrabold italic tracking-tight text-white">
                                VISA
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Balance section */}
                      <div className="mb-4 rounded-xl bg-white/[0.05] px-4 py-3">
                        <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                          Available Balance
                        </p>
                        <p className="mt-0.5 text-2xl font-extrabold text-white">
                          $4,820<span className="text-base font-semibold text-white/50">.50</span>
                        </p>
                      </div>

                      {/* Quick actions */}
                      <div className="flex gap-2">
                        {[
                          { label: 'Add Funds', color: 'from-indigo-500 to-indigo-600' },
                          { label: 'Send', color: 'from-emerald-500 to-emerald-600' },
                          { label: 'History', color: 'from-violet-500 to-violet-600' },
                        ].map((action) => (
                          <div
                            key={action.label}
                            className={`flex flex-1 items-center justify-center rounded-xl bg-gradient-to-b ${action.color} py-2.5 shadow-sm`}
                          >
                            <span className="text-[11px] font-semibold text-white">
                              {action.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Home indicator */}
                    <div className="flex justify-center pb-2">
                      <div className="h-1 w-28 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Floating stat cards ── */}
              {/* Success rate */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-8 -top-4 z-20 hidden rounded-2xl border border-neutral-100/80 bg-white/95 p-4 shadow-xl backdrop-blur-md md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100">
                    <svg
                      className="h-5 w-5 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500">Success Rate</p>
                    <p className="text-lg font-extrabold text-neutral-900">99.9%</p>
                  </div>
                </div>
              </motion.div>

              {/* Instant speed */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                className="absolute -bottom-4 -left-8 z-20 hidden rounded-2xl border border-neutral-100/80 bg-white/95 p-4 shadow-xl backdrop-blur-md md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
                    <svg
                      className="h-5 w-5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500">Speed</p>
                    <p className="text-lg font-extrabold text-neutral-900">Instant</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
