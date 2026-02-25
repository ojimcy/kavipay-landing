'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    quote: 'Finally, a card that just works. No surprises, no hidden fees. As a freelancer working with international clients, Kavipay has made receiving and spending money so much easier.',
    name: 'Sarah M.',
    title: 'Freelance Designer',
    location: 'Lagos, Nigeria',
    initials: 'SM',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    rating: 5,
    quote: 'I travel globally for work and Kavipay works everywhere. From hotels in Dubai to restaurants in London — it never fails. Best financial tool I have.',
    name: 'Priya K.',
    title: 'Travel Blogger',
    location: 'Abuja, Nigeria',
    initials: 'PK',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    rating: 5,
    quote: 'The utilities feature is a game changer. I buy airtime, pay my DSTV, and manage my virtual cards all in one app. The convenience is unmatched.',
    name: 'Chidi O.',
    title: 'Software Engineer',
    location: 'Port Harcourt, Nigeria',
    initials: 'CO',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Loved by users <span className="text-indigo-600">worldwide</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto">
            Join thousands of people who trust Kavipay for their daily financial needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 text-indigo-200 mb-3" />
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-neutral-900">{testimonial.name}</div>
                  <div className="text-xs text-neutral-500">{testimonial.title} &middot; {testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
