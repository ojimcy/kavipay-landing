'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  HelpCircle,
  BookOpen,
  CreditCard,
  Wallet,
  Receipt,
  ShieldCheck,
  UserCheck,
  Wrench,
  Mail,
  MessageSquare,
  Headphones,
  Globe,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const quickLinks = [
  {
    title: 'FAQ',
    description: 'Quick answers to common questions about Kavipay.',
    href: '/faq',
    icon: <HelpCircle className="w-6 h-6" />,
    color: 'from-primary-500 to-primary-600',
  },
  {
    title: 'Knowledge Base',
    description: 'In-depth reference guide for all Kavipay services.',
    href: '/knowledge-base',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-secondary-500 to-secondary-600',
  },
];

const topics = [
  {
    title: 'Cards & Payments',
    description: 'Virtual & physical cards, transactions, and card controls.',
    icon: <CreditCard className="w-5 h-5" />,
    faqCategory: 'cards',
    kbSection: 'card-services',
    questions: [
      'What types of cards does Kavipay offer?',
      'How quickly do I get my virtual card?',
      'Can I freeze or block my card?',
    ],
  },
  {
    title: 'Funding Your Card',
    description: 'Crypto deposits, bank transfers, and exchange rates.',
    icon: <Wallet className="w-5 h-5" />,
    faqCategory: 'funding',
    kbSection: 'funding-methods',
    questions: [
      'How can I fund my Kavipay card?',
      'What cryptocurrencies are supported?',
      'How long does crypto funding take?',
    ],
  },
  {
    title: 'Bill Payments',
    description: 'Electricity, airtime, data, cable TV, and utilities.',
    icon: <Receipt className="w-5 h-5" />,
    faqCategory: 'bills',
    kbSection: 'bill-payments',
    questions: [
      'What bills can I pay through Kavipay?',
      'Are bill payments instant?',
      'What if my bill payment fails?',
    ],
  },
  {
    title: 'Account & KYC',
    description: 'Registration, verification levels, and documents.',
    icon: <UserCheck className="w-5 h-5" />,
    faqCategory: 'account',
    kbSection: 'kyc-verification',
    questions: [
      'How do I create a Kavipay account?',
      'What documents do I need for KYC?',
      'How long does verification take?',
    ],
  },
  {
    title: 'Security & Privacy',
    description: 'Data protection, fraud prevention, and safety tips.',
    icon: <ShieldCheck className="w-5 h-5" />,
    faqCategory: 'security',
    kbSection: 'security-framework',
    questions: [
      'Is Kavipay safe to use?',
      'How is my data protected?',
      'What should I do if I notice suspicious activity?',
    ],
  },
  {
    title: 'Troubleshooting',
    description: 'Fix common issues with transactions, login, and more.',
    icon: <Wrench className="w-5 h-5" />,
    faqCategory: 'support',
    kbSection: 'troubleshooting',
    questions: [
      'My transaction is pending. What should I do?',
      "I can't log into my account.",
      'My card was declined.',
    ],
  },
];

const contactChannels = [
  {
    title: 'Live Chat',
    description: 'Get instant help through our in-app chat support.',
    detail: 'Available 24/7',
    icon: <Headphones className="w-5 h-5" />,
  },
  {
    title: 'Email Support',
    description: 'Send us a detailed message and we\'ll get back to you.',
    detail: 'support@kavipay.io',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:support@kavipay.io',
  },
  {
    title: 'Complaints',
    description: 'File a formal complaint for unresolved issues.',
    detail: 'complaints@kavipay.io',
    icon: <MessageSquare className="w-5 h-5" />,
    href: 'mailto:complaints@kavipay.io',
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HelpCenterContent() {
  const [searchQuery, setSearchQuery] = useState('');

  // Gather all searchable questions from topics
  const allQuestions = topics.flatMap((topic) =>
    topic.questions.map((q) => ({ question: q, topic: topic.title, faqCategory: topic.faqCategory }))
  );

  const filteredQuestions = searchQuery.trim()
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.topic.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
          How can we help you?
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
          Search our help resources or browse by topic below.
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search for help (e.g. &quot;fund my card&quot;, &quot;KYC&quot;)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all shadow-sm"
          />
        </div>

        {/* Search results */}
        {searchQuery.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto mt-3 bg-white rounded-xl border border-neutral-200 shadow-lg text-left overflow-hidden"
          >
            {filteredQuestions.length === 0 ? (
              <div className="p-5 text-center text-neutral-500">
                No results found. Try browsing by topic below or{' '}
                <Link href="/faq" className="text-primary-600 hover:underline">
                  view all FAQs
                </Link>
                .
              </div>
            ) : (
              <div className="max-h-80 overflow-y-auto">
                {filteredQuestions.map((q, i) => (
                  <Link
                    key={i}
                    href="/faq"
                    className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-primary-50 transition-colors border-b border-neutral-100 last:border-0"
                  >
                    <div>
                      <div className="text-sm font-medium text-neutral-900">
                        {q.question}
                      </div>
                      <div className="text-xs text-neutral-500">{q.topic}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Quick links — FAQ & Knowledge Base */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16"
      >
        {quickLinks.map((link) => (
          <motion.div key={link.title} variants={fadeUp}>
            <Link
              href={link.href}
              className="group flex items-start gap-4 bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div
                className={cn(
                  'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white flex-shrink-0',
                  link.color
                )}
              >
                {link.icon}
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-neutral-900 group-hover:text-primary-600 transition-colors flex items-center gap-2">
                  {link.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <p className="text-sm text-neutral-600 mt-1">
                  {link.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Browse by topic */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-3">
          Browse by Topic
        </h2>
        <p className="text-neutral-600 text-center mb-10">
          Find answers organized by category.
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {topics.map((topic) => (
            <motion.div key={topic.title} variants={fadeUp}>
              <div className="bg-white rounded-xl border border-neutral-100 p-6 h-full flex flex-col hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                    {topic.icon}
                  </div>
                  <h3 className="font-bold text-neutral-900">{topic.title}</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4">
                  {topic.description}
                </p>

                <ul className="space-y-2 mb-5 flex-1">
                  {topic.questions.map((q, i) => (
                    <li key={i}>
                      <Link
                        href="/faq"
                        className="text-sm text-neutral-700 hover:text-primary-600 transition-colors flex items-start gap-1.5"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-primary-400 mt-0.5 flex-shrink-0" />
                        {q}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 pt-3 border-t border-neutral-100">
                  <Link
                    href="/faq"
                    className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View FAQ
                  </Link>
                  <span className="text-neutral-200">|</span>
                  <Link
                    href={`/knowledge-base#${topic.kbSection}`}
                    className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Full Guide
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Contact channels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 text-center">
            Still need help?
          </h2>
          <p className="text-neutral-600 text-center mb-8">
            Our support team is here for you around the clock.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactChannels.map((channel) => {
              const Wrapper = channel.href ? 'a' : 'div';
              const wrapperProps = channel.href
                ? { href: channel.href }
                : {};
              return (
                <Wrapper
                  key={channel.title}
                  {...wrapperProps}
                  className={cn(
                    'bg-white rounded-xl p-5 text-center transition-all',
                    channel.href && 'hover:shadow-md group cursor-pointer'
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mx-auto mb-3 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {channel.icon}
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-2">
                    {channel.description}
                  </p>
                  <p className="text-sm font-medium text-primary-600">
                    {channel.detail}
                  </p>
                </Wrapper>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-500">
              For privacy concerns:{' '}
              <a
                href="mailto:dpo@kavipay.io"
                className="text-primary-600 hover:underline"
              >
                dpo@kavipay.io
              </a>{' '}
              &middot; Security issues:{' '}
              <a
                href="mailto:security@kavipay.io"
                className="text-primary-600 hover:underline"
              >
                security@kavipay.io
              </a>{' '}
              &middot;{' '}
              <a
                href="https://kavipay.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                kavipay.io
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
