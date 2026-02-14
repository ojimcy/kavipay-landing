'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Search,
  Mail,
  Shield,
  UserCheck,
  MessageSquare,
  Globe,
  Headphones,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { analytics } from '@/lib/analytics';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'about',
    title: 'About Kavipay',
    items: [
      {
        question: 'What is Kavipay?',
        answer:
          'Kavipay is Nigeria\u2019s trusted payment card app that makes managing your money simple and secure. We offer instant virtual VISA and Mastercard cards for global online spending, as well as physical Verve and Afrigo cards for local Nigerian transactions. You can fund your cards with cryptocurrency or Naira and use them for shopping, subscriptions, bill payments, and more.',
      },
      {
        question: 'Who operates Kavipay?',
        answer:
          'Kavipay is operated by PloutosLabs International Ltd, a Nigerian fintech company. We work in partnership with licensed financial institutions including Safe Haven Microfinance Bank (CBN Licensed), Sudo.africa (PCI DSS Compliant), and Payscribe (PCI DSS Compliant) to provide our services.',
      },
      {
        question: 'What services does Kavipay offer?',
        answer:
          'Kavipay offers: Virtual VISA and Mastercard cards for global online purchases, Physical Verve and Afrigo cards for Nigerian merchants and ATMs, Cryptocurrency funding via BEP20 network, Naira bank transfer funding, Bill payments for electricity, airtime, data, cable TV, and utilities, Real-time transaction tracking and spending insights, and 24/7 customer support.',
      },
      {
        question: 'Is Kavipay available only in Nigeria?',
        answer:
          'Currently, Kavipay primarily serves Nigerian users. However, our virtual VISA and Mastercard cards can be used for international online purchases anywhere these cards are accepted. Physical card delivery is currently available within Nigeria only.',
      },
      {
        question: 'How is Kavipay different from other payment apps?',
        answer:
          'Kavipay uniquely combines both virtual and physical card options, cryptocurrency and Naira funding flexibility, multiple card networks (VISA, Mastercard, Verve, Afrigo), comprehensive bill payment services, $PLTL token rewards for card purchases, and partnerships with CBN-licensed institutions ensuring regulatory compliance.',
      },
    ],
  },
  {
    id: 'account',
    title: 'Account & Registration',
    items: [
      {
        question: 'How do I create a Kavipay account?',
        answer:
          'Getting started is easy: Download the Kavipay app from Google Play Store or Apple App Store, complete quick registration with your basic details, verify your identity through our KYC process, choose your preferred card type (virtual or physical), fund your card and start spending!',
      },
      {
        question: 'What documents do I need for KYC verification?',
        answer:
          'For KYC verification, you need a valid government-issued ID (National ID/NIN, International Passport, Driver\u2019s License, or Voter\u2019s Card), your Bank Verification Number (BVN), a clear selfie for facial verification, and proof of address (utility bill or bank statement) may be required for higher transaction limits.',
      },
      {
        question: 'What is the minimum age requirement?',
        answer:
          'You must be 18 years or older to create a Kavipay account. This is verified through your government-issued ID and BVN during the KYC process.',
      },
      {
        question: 'How long does KYC verification take?',
        answer:
          'Most KYC verifications are completed within minutes using our automated verification system. In some cases, manual review may take up to 24\u201348 hours. You\u2019ll receive a notification once your account is verified.',
      },
      {
        question: 'Can I have multiple Kavipay accounts?',
        answer:
          'No, each user is allowed only one Kavipay account. This is required for regulatory compliance and to prevent fraud. However, you can create multiple virtual cards within your single account for different spending purposes.',
      },
      {
        question: 'Can I delete my account?',
        answer:
          'Yes, you can request account deletion through the app settings or by contacting support@kavipay.io. Please note that you must withdraw any remaining balance before deletion, and some data may be retained as required by regulatory obligations.',
      },
    ],
  },
  {
    id: 'cards',
    title: 'Card Types & Features',
    items: [
      {
        question: 'What types of cards does Kavipay offer?',
        answer:
          'Kavipay offers four card types: Virtual VISA Card for global online purchases (instant issuance), Virtual Mastercard for global online purchases (instant issuance), Physical Verve Card for Nigerian merchants, ATMs, and POS terminals, and Physical Afrigo Card for cross-border African transactions.',
      },
      {
        question: "What's the difference between virtual and physical cards?",
        answer:
          'Virtual cards are issued instantly and exist only digitally \u2014 perfect for online shopping, subscriptions, and digital payments. They can be added to Apple Pay, Google Pay, and Samsung Pay. Physical cards are plastic cards delivered to your address \u2014 they work at ATMs, POS terminals, and anywhere cards are accepted in person.',
      },
      {
        question: 'How quickly do I get my virtual card?',
        answer:
          'Virtual cards are issued instantly after your KYC verification is complete. You can start using them for online purchases immediately.',
      },
      {
        question: 'How long does physical card delivery take?',
        answer:
          'Physical cards are delivered through our logistics partner, Speedaf, typically within 3\u20137 business days depending on your location within Nigeria. You\u2019ll receive tracking information once your card is shipped.',
      },
      {
        question: 'Can I have multiple cards?',
        answer:
          'Yes! You can create multiple virtual cards for different purposes (shopping, subscriptions, travel, etc.). This helps you organize spending and adds an extra layer of security by using different cards for different merchants.',
      },
      {
        question: 'Can I freeze or block my card?',
        answer:
          'Yes, you can instantly freeze or unfreeze your card with one tap in the app. This is useful if you lose your card or suspect unauthorized activity. You can also set spending limits and controls for added security.',
      },
      {
        question: 'What if my physical card is lost or stolen?',
        answer:
          'Immediately freeze your card in the app and contact support@kavipay.io. You can request a replacement card (a fee applies). We recommend setting up biometric authentication and transaction alerts for added security.',
      },
    ],
  },
  {
    id: 'funding',
    title: 'Funding Your Card',
    items: [
      {
        question: 'How can I fund my Kavipay card?',
        answer:
          'You can fund your card through Cryptocurrency via BEP20 network using USDT, BUSD, BNB, and other supported tokens, or through Bank Transfer with direct Naira transfers from your Nigerian bank account. More funding options and blockchain networks are coming soon.',
      },
      {
        question: 'What cryptocurrencies are supported?',
        answer:
          'Currently supported cryptocurrencies via BEP20 network include USDT (Tether), BUSD (Binance USD), BNB (Binance Coin), and additional tokens available on the BEP20 network. More blockchain networks and tokens are being added.',
      },
      {
        question: 'How long does crypto funding take?',
        answer:
          'Cryptocurrency deposits are typically credited within minutes once confirmed on the blockchain. The exact time depends on network congestion. You\u2019ll receive a notification when your funds are available.',
      },
      {
        question: 'What exchange rate do you use for crypto?',
        answer:
          'We use competitive real-time market rates with transparent pricing. The exact exchange rate is displayed before you confirm any transaction, so there are no hidden fees or surprises.',
      },
      {
        question: 'Is there a minimum or maximum funding amount?',
        answer:
          'Yes, there are minimum and maximum limits for funding, which vary based on your verification level. These limits are displayed in the app. Higher verification levels unlock higher transaction limits.',
      },
      {
        question: 'Can I withdraw funds back to my bank or crypto wallet?',
        answer:
          'Yes, you can withdraw your card balance back to your linked bank account or cryptocurrency wallet. Withdrawal fees and processing times are displayed before you confirm the transaction.',
      },
    ],
  },
  {
    id: 'bills',
    title: 'Bill Payments & Utilities',
    items: [
      {
        question: 'What bills can I pay through Kavipay?',
        answer:
          'You can pay electricity bills (all major DISCOs including AEDC, EKEDC, IBEDC, PHED, and others), mobile airtime (MTN, Glo, Airtel, 9mobile), internet/data bundles (all major providers), cable TV (DStv, GOtv, Startimes), and water bills and other utilities.',
      },
      {
        question: 'Are bill payments instant?',
        answer:
          'Yes, most bill payments are processed instantly. You\u2019ll receive confirmation and a receipt immediately after successful payment. Electricity tokens are delivered within seconds.',
      },
      {
        question: 'Can I save my bill payment details?',
        answer:
          'Yes! You can save your meter numbers, account numbers, and other payment details for quick repeat transactions. This makes paying regular bills faster and more convenient.',
      },
      {
        question: 'What if my bill payment fails?',
        answer:
          'If a payment fails, your funds are automatically reversed to your Kavipay balance. If you don\u2019t see the reversal within 24 hours, please contact support@kavipay.io with your transaction details.',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security & Safety',
    items: [
      {
        question: 'Is Kavipay safe to use?',
        answer:
          'Yes, Kavipay employs bank-level security measures including 256-bit encryption for all data, biometric authentication (fingerprint and Face ID), two-factor authentication (2FA), PCI DSS compliance through our partners, real-time fraud monitoring, and instant transaction alerts.',
      },
      {
        question: 'How is my data protected?',
        answer:
          'Your data is protected through end-to-end encryption, secure data centers, compliance with Nigeria Data Protection Regulation (NDPR), regular security audits, and strict access controls. We never share your personal information without your consent except as required by law.',
      },
      {
        question: 'What should I do if I notice suspicious activity?',
        answer:
          'Immediately freeze your card in the app, change your password, contact support@kavipay.io or use in-app chat, and review your recent transactions. We have 24/7 fraud monitoring and will work with you to resolve any issues.',
      },
      {
        question: 'Will Kavipay ever ask for my password or PIN?',
        answer:
          'NO. Kavipay will NEVER ask for your password, PIN, or OTP via email, phone, or social media. Any such request is a scam. Always access your account only through the official Kavipay app.',
      },
    ],
  },
  {
    id: 'fees',
    title: 'Fees & Pricing',
    items: [
      {
        question: 'What fees does Kavipay charge?',
        answer:
          'Kavipay charges transparent fees including card issuance fees (virtual and physical), transaction fees (domestic and international), ATM withdrawal fees, currency conversion fees, and card replacement fees. All fees are clearly displayed before you confirm any transaction \u2014 no hidden charges.',
      },
      {
        question: 'Are there monthly maintenance fees?',
        answer:
          'Fee structures vary by card type. Please check the current fee schedule in the app or on our website for the most up-to-date information. We\u2019re committed to transparent, competitive pricing.',
      },
      {
        question: 'How do your fees compare to traditional banks?',
        answer:
          'Kavipay offers competitive rates, especially for cryptocurrency conversions and international transactions. Our transparent pricing means you always know what you\u2019re paying before confirming any transaction.',
      },
      {
        question: 'Do I get charged for failed transactions?',
        answer:
          'No, you are not charged for failed transactions. Any funds are automatically reversed to your balance.',
      },
    ],
  },
  {
    id: 'support',
    title: 'Troubleshooting & Support',
    items: [
      {
        question: 'How do I contact customer support?',
        answer:
          'You can reach our 24/7 support team through in-app live chat (fastest), email at support@kavipay.io, or our help center with FAQs and guides at kavipay.io/help. We aim to respond to all inquiries within 24 hours.',
      },
      {
        question: 'My transaction is pending. What should I do?',
        answer:
          'Most transactions complete within minutes. If your transaction is still pending after 30 minutes, check your internet connection, refresh the app, and check your transaction history for updates. If still pending after 2 hours, contact support with your transaction ID.',
      },
      {
        question: "I can't log into my account. What should I do?",
        answer:
          'Try these steps: Check your internet connection, ensure you\u2019re using the correct email/phone number, use the \u201cForgot Password\u201d option to reset your credentials. If still unable to access, contact support@kavipay.io with your registered email.',
      },
      {
        question: 'How do I raise a dispute or complaint?',
        answer:
          'Use in-app chat or email complaints@kavipay.io. Provide transaction details, date, and amount. We acknowledge all complaints within 48 hours, and resolution is typically provided within 21 days. You can escalate unresolved issues to the Nigeria Data Protection Bureau or CBN.',
      },
    ],
  },
  {
    id: 'token',
    title: '$PLTL Token & Rewards',
    items: [
      {
        question: 'What is the $PLTL token?',
        answer:
          '$PLTL is the utility token of the PloutosLabs ecosystem, built on the BASE Network (Ethereum Layer 2). It\u2019s designed for practical use across the ecosystem including card purchase rewards, e-commerce payments, and platform benefits. The token has been audited by Cyberscope.io.',
      },
      {
        question: 'How do I earn $PLTL tokens?',
        answer:
          'You can earn $PLTL tokens by purchasing Kavipay cards. PloutosLabs has allocated 40,000,000 $PLTL tokens to reward card purchasers. Early adopters receive the best rewards \u2014 the first 40,000 card purchasers receive 50 $PLTL per card!',
      },
      {
        question: 'When will I receive my $PLTL rewards?',
        answer:
          '$PLTL tokens will be distributed after the token launch, which is planned to occur after 1,200,000 cards have been sold. Rewards follow a vesting schedule released gradually over 2 years and 10 months to ensure ecosystem stability.',
      },
      {
        question: 'What can I do with $PLTL tokens?',
        answer:
          '$PLTL tokens have multiple utilities: card purchase rewards, e-commerce payments on Ploutos Store, potential fee discounts, participation in platform governance (future), and trading on supported exchanges after launch.',
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Regulations',
    items: [
      {
        question: 'Is Kavipay regulated?',
        answer:
          'Yes, Kavipay operates in partnership with licensed financial institutions. Our banking partner, Safe Haven Microfinance Bank, is licensed by the Central Bank of Nigeria (CBN). Our card service partners, Sudo.africa and Payscribe, are PCI DSS compliant.',
      },
      {
        question: 'What regulations does Kavipay comply with?',
        answer:
          'Kavipay complies with Nigeria Data Protection Regulation (NDPR) 2019, Central Bank of Nigeria (CBN) Payment Guidelines, Know Your Customer (KYC) Requirements, Anti-Money Laundering (AML) Standards, Payment Card Industry Data Security Standards (PCI DSS) through our partners, and the Cybercrimes Act 2015.',
      },
      {
        question: 'How is my data used and protected?',
        answer:
          'Your data is used to provide our services, comply with regulations, and improve user experience. We never sell your data. Full details are in our Privacy Policy at kavipay.io/privacy. You have rights to access, correct, and delete your data under NDPR.',
      },
      {
        question: 'Who can I contact for privacy concerns?',
        answer:
          'For privacy concerns, contact our Data Protection Officer at dpo@kavipay.io or privacy@kavipay.io. For unresolved issues, you may escalate to the Nigeria Data Protection Bureau (NDPB) at info@ndpb.gov.ng.',
      },
    ],
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'w-full bg-white rounded-lg p-5 md:p-6 text-left transition-all',
        'hover:shadow-md border border-neutral-100',
        isOpen && 'shadow-md border-primary-100'
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-semibold text-base md:text-lg text-neutral-900">
          {item.question}
        </h3>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-primary-500 transition-transform flex-shrink-0',
            isOpen && 'rotate-180'
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-neutral-600 mt-4 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export function FAQContent() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = searchQuery.trim()
    ? faqCategories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.answer.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : faqCategories.filter((cat) => cat.id === activeCategory);

  const handleToggle = (key: string, question: string) => {
    setOpenIndex(openIndex === key ? null : key);
    if (openIndex !== key) {
      analytics.faqExpand(question);
    }
  };

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
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
          Your complete guide to Kavipay services. Find answers to common
          questions below.
        </p>

        {/* Search */}
        <div className="max-w-lg mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Category sidebar */}
        {!searchQuery.trim() && (
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="lg:sticky lg:top-28">
              <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 hidden lg:block">
                Categories
              </h2>
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(null);
                    }}
                    className={cn(
                      'whitespace-nowrap text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all',
                      activeCategory === cat.id
                        ? 'bg-primary-50 text-primary-700 shadow-sm'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    )}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 min-w-0"
        >
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">
                No results found for &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-neutral-400 mt-2">
                Try a different search term or browse by category.
              </p>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="mb-10 last:mb-0">
                {searchQuery.trim() && (
                  <h2 className="text-xl font-bold text-neutral-900 mb-4">
                    {cat.title}
                  </h2>
                )}
                <div className="space-y-3">
                  {cat.items.map((item, idx) => {
                    const key = `${cat.id}-${idx}`;
                    return (
                      <FAQAccordionItem
                        key={key}
                        item={item}
                        isOpen={openIndex === key}
                        onToggle={() => handleToggle(key, item.question)}
                      />
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </motion.div>
      </div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 md:mt-24 max-w-3xl mx-auto"
      >
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 text-center">
            Contact Information
          </h2>
          <p className="text-neutral-600 text-center mb-8">
            Our support team is available 24/7 to help you with anything you
            need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:support@kavipay.io"
              className="flex items-center gap-3 bg-white rounded-xl p-4 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                <Mail className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-neutral-500">
                  Customer Support
                </div>
                <div className="text-sm font-semibold text-neutral-900">
                  support@kavipay.io
                </div>
              </div>
            </a>

            <a
              href="mailto:privacy@kavipay.io"
              className="flex items-center gap-3 bg-white rounded-xl p-4 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                <Shield className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-neutral-500">
                  Privacy Inquiries
                </div>
                <div className="text-sm font-semibold text-neutral-900">
                  privacy@kavipay.io
                </div>
              </div>
            </a>

            <a
              href="mailto:dpo@kavipay.io"
              className="flex items-center gap-3 bg-white rounded-xl p-4 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                <UserCheck className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-neutral-500">
                  Data Protection Officer
                </div>
                <div className="text-sm font-semibold text-neutral-900">
                  dpo@kavipay.io
                </div>
              </div>
            </a>

            <a
              href="mailto:complaints@kavipay.io"
              className="flex items-center gap-3 bg-white rounded-xl p-4 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                <MessageSquare className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-neutral-500">Complaints</div>
                <div className="text-sm font-semibold text-neutral-900">
                  complaints@kavipay.io
                </div>
              </div>
            </a>

            <a
              href="https://kavipay.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-xl p-4 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                <Globe className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-neutral-500">Website</div>
                <div className="text-sm font-semibold text-neutral-900">
                  kavipay.io
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-white rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-xs text-neutral-500">
                  In-App Support
                </div>
                <div className="text-sm font-semibold text-neutral-900">
                  24/7 Live Chat
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
