'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { CheckCircle } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      quote: 'Finally, a card that just works. No surprises, no hidden fees. As a freelancer working with international clients, Kavipay has made receiving and spending money so much easier.',
      name: 'Sarah M.',
      title: 'Freelance Designer',
      location: 'Nigeria',
      avatar: '👩🏾‍💼',
      verified: true,
      highlight: 'Zero fees',
    },
    {
      rating: 5,
      quote: 'I travel globally for work and Kavipay works everywhere. From hotels in Tokyo to restaurants in Paris - it never fails. Best financial decision I made this year.',
      name: 'Priya K.',
      title: 'Travel Blogger',
      location: 'Canada',
      avatar: '👩🏽‍🦱',
      verified: true,
      highlight: 'Global coverage',
    },
    {
      rating: 5,
      quote: 'As a digital nomad, managing money across countries was a nightmare until I found Kavipay. Now I can focus on my work instead of worrying about payment issues.',
      name: 'Chen W.',
      title: 'Digital Nomad',
      location: 'Singapore',
      avatar: '👨🏻‍💻',
      verified: true,
      highlight: 'Multi-currency',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Loved by Users Worldwide
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join thousands who are already managing their money smarter with Kavipay
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.02,
                borderLeftWidth: 6,
                transition: { duration: 0.2 }
              }}
            >
              <Card variant="testimonial" hover={false} className="transition-all duration-200 relative">
                {/* Highlight badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.highlight}
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-2xl relative">
                    {testimonial.avatar}
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center border-2 border-white">
                        <CheckCircle className="w-3 h-3 text-white fill-success" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-sm text-neutral-900">
                        {testimonial.name}
                      </p>
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-success fill-success" />
                      )}
                    </div>
                    <p className="text-xs text-neutral-600">
                      {testimonial.title}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
