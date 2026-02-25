'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote:
      'Finally, a card that just works. No surprises, no hidden fees. As a freelancer working with international clients, Kavipay has made receiving and spending money so much easier.',
    name: 'Sarah M.',
    title: 'Freelance Designer',
    location: 'Nigeria',
    avatar: '\u{1F469}\u{1F3FE}\u200D\u{1F4BC}',
    verified: true,
    highlight: 'Zero fees',
  },
  {
    rating: 5,
    quote:
      'I travel globally for work and Kavipay works everywhere. From hotels in Tokyo to restaurants in Paris \u2014 it never fails. Best financial decision I made this year.',
    name: 'Priya K.',
    title: 'Travel Blogger',
    location: 'Canada',
    avatar: '\u{1F469}\u{1F3FD}\u200D\u{1F9B1}',
    verified: true,
    highlight: 'Global coverage',
  },
  {
    rating: 5,
    quote:
      'As a digital nomad, managing money across countries was a nightmare until I found Kavipay. Now I can focus on my work instead of worrying about payment issues.',
    name: 'Chen W.',
    title: 'Digital Nomad',
    location: 'Singapore',
    avatar: '\u{1F468}\u{1F3FB}\u200D\u{1F4BB}',
    verified: true,
    highlight: 'Multi-currency',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={headingVariants}>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-primary-500 mb-3">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={headingVariants}
            className="text-h2-mobile md:text-h2 text-neutral-900 mb-5"
          >
            Loved by Users Worldwide
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-body-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Join thousands of people who trust Kavipay to manage their money
            smarter, faster, and without borders.
          </motion.p>
        </motion.div>

        {/* Testimonial cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-card overflow-hidden transition-shadow duration-300 group-hover:shadow-card-hover">
                {/* Gradient top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background:
                      'linear-gradient(90deg, #6366F1 0%, #818CF8 40%, #10B981 100%)',
                  }}
                />

                <div className="p-7 pt-8 flex flex-col h-full">
                  {/* Highlight badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-sm">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary-200 fill-primary-100" />
                  </div>

                  {/* Quote text */}
                  <p className="text-neutral-600 text-[15px] leading-relaxed flex-1 mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Author section */}
                  <div className="flex items-center gap-3.5 pt-5 border-t border-neutral-100">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-50 to-secondary-50 border border-neutral-100 flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      {testimonial.verified && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center ring-2 ring-white">
                          <CheckCircle className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Author info */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="font-bold text-sm text-neutral-900 truncate">
                          {testimonial.name}
                        </p>
                        {testimonial.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-secondary-500 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-neutral-500 truncate">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
