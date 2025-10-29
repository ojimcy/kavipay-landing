'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I fund my Kavipay card?',
      answer:
        'You can fund your card via bank transfer (free), debit card (small fee), or digital assets transfer. All funding methods process instantly, so you can start spending right away.',
    },
    {
      question: 'What countries are supported?',
      answer:
        'Kavipay cards work in 195+ countries wherever Visa/Mastercard are accepted. You can use your card globally without any geographic restrictions or additional fees.',
    },
    {
      question: 'Are there monthly fees?',
      answer:
        'Zero monthly fees. We only charge a one-time card issuance fee for physical cards. Virtual cards are completely free with no hidden charges.',
    },
    {
      question: 'How long does verification take?',
      answer:
        'Our automated identity verification takes 2-5 minutes on average. You just need a valid government-issued ID and the process is done entirely in-app.',
    },
    {
      question: 'Is my money safe?',
      answer:
        'Absolutely. We use bank-level security with 256-bit encryption, 3D Secure authentication, and are fully licensed and insured. Your funds are protected at all times.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex !== index) {
      analytics.faqExpand(faqs[index].question);
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to know about Kavipay
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => handleToggle(index)}
                className={cn(
                  'w-full bg-white rounded-lg p-6 text-left transition-all',
                  'hover:shadow-md',
                  openIndex === index && 'shadow-md'
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg text-neutral-900">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-primary-500 transition-transform flex-shrink-0',
                      openIndex === index && 'transform rotate-180'
                    )}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-neutral-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
