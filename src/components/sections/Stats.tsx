'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Users, CreditCard, Globe, DollarSign } from 'lucide-react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: 1000,
      suffix: '+',
      label: 'Waitlist Users',
      description: 'Growing daily',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      icon: DollarSign,
      value: 0,
      suffix: '',
      label: 'Zero Fees',
      description: 'No hidden charges',
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      icon: Globe,
      value: 1,
      suffix: '',
      label: 'Country',
      description: 'Nigeria (Expanding soon)',
      gradient: 'from-primary-600 to-accent-500',
    },
    {
      icon: CreditCard,
      value: 99,
      suffix: '.9%',
      label: 'Target Uptime',
      description: 'Bank-grade reliability',
      gradient: 'from-success to-primary-500',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Building the Future
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              of Payments in Nigeria
            </span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Be among the first to experience borderless payments. Join our waitlist today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-neutral-200 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-neutral-400">
                    {stat.description}
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional trust indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
            </div>
            <span className="text-white font-semibold">Coming Soon</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-300">Join our early access program</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
