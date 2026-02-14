'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Building2,
  Package,
  CreditCard,
  Wallet,
  Receipt,
  UserCheck,
  ShieldCheck,
  DollarSign,
  Coins,
  Handshake,
  Scale,
  HeadphonesIcon,
  Wrench,
  BookOpen,
  Mail,
  Globe,
  AlertTriangle,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold text-neutral-900 mt-8 mb-3 first:mt-0">
      {children}
    </h3>
  );
}

function SubText({ children }: { children: React.ReactNode }) {
  return <p className="text-neutral-600 leading-relaxed mb-4">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-neutral-600">
          <ChevronRight className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto mb-4 rounded-lg border border-neutral-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-neutral-50">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 font-semibold text-neutral-900 border-b border-neutral-200"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 text-neutral-600 border-b border-neutral-100"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: string[];
}) {
  return (
    <div className="bg-neutral-50 rounded-xl p-5 mb-4">
      <div className="font-semibold text-neutral-900 mb-1">{title}</div>
      {subtitle && (
        <div className="text-xs text-neutral-500 mb-3">{subtitle}</div>
      )}
      <BulletList items={items} />
    </div>
  );
}

const sections: Section[] = [
  {
    id: 'company-overview',
    title: '1. Company Overview',
    icon: <Building2 className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>1.1 About PloutosLabs International Ltd</SectionHeading>
        <SubText>
          PloutosLabs International Ltd is a Nigerian fintech company developing
          a comprehensive Web3 ecosystem that combines traditional financial
          services with cryptocurrency capabilities. The company is registered in
          the Federal Republic of Nigeria and operates the Kavipay payment card
          platform.
        </SubText>

        <SectionHeading>1.2 Mission Statement</SectionHeading>
        <SubText>
          To provide Nigerians with seamless access to both local and
          international payment solutions through innovative card services that
          bridge traditional finance and cryptocurrency, while maintaining the
          highest standards of security and regulatory compliance.
        </SubText>

        <SectionHeading>1.3 Corporate Structure</SectionHeading>
        <BulletList
          items={[
            'Parent Company: PloutosLabs International Ltd',
            'Primary Platform: Kavipay.io (Payment Cards)',
            'Secondary Platform: Skyddawallet.io (Decentralized Wallet)',
            'Token: $PLTL (Ploutos Token on BASE Network)',
          ]}
        />

        <SectionHeading>1.4 Key Partnerships</SectionHeading>
        <BulletList
          items={[
            'Safe Haven Microfinance Bank: CBN-licensed banking partner providing account infrastructure',
            'Sudo.africa: PCI DSS compliant provider for VISA and Mastercard virtual card programs',
            'Payscribe: PCI DSS compliant card services provider',
            'Speedaf Logistics: Licensed courier service for physical card delivery nationwide',
          ]}
        />
      </>
    ),
  },
  {
    id: 'product-portfolio',
    title: '2. Product Portfolio',
    icon: <Package className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>2.1 Virtual Cards</SectionHeading>
        <InfoCard
          title="VISA Virtual Card"
          items={[
            'Instant issuance upon KYC completion',
            'Accepted at millions of merchants worldwide',
            'Compatible with Apple Pay, Google Pay, Samsung Pay',
            'Ideal for online shopping, subscriptions, digital services',
          ]}
        />
        <InfoCard
          title="Mastercard Virtual Card"
          items={[
            'Instant issuance upon KYC completion',
            'Global acceptance online',
            'Supports 3D Secure authentication',
            'Multiple cards can be created for different purposes',
          ]}
        />

        <SectionHeading>2.2 Physical Cards</SectionHeading>
        <InfoCard
          title="Verve Physical Card"
          items={[
            "Nigeria's largest domestic card scheme",
            'Accepted at 23+ million POS terminals and ATMs nationwide',
            'Delivery via Speedaf (3\u20137 business days)',
            'Instant activation through the app after delivery',
          ]}
        />
        <InfoCard
          title="Afrigo Physical Card"
          items={[
            'Pan-African payment card scheme',
            'Designed for cross-border African transactions',
            'Growing acceptance across the continent',
            'Future-ready as scheme expands',
          ]}
        />

        <SectionHeading>2.3 Bill Payment Services</SectionHeading>
        <BulletList
          items={[
            'Electricity: AEDC, EKEDC, IBEDC, PHED, KEDCO, JED, BEDC, EEDC, IKEDC, and all other DISCOs',
            'Mobile Airtime: MTN, Glo, Airtel, 9mobile',
            'Internet/Data: All major ISPs and network data bundles',
            'Cable TV: DStv, GOtv, Startimes',
            'Water & Other Utilities: Select providers',
          ]}
        />
      </>
    ),
  },
  {
    id: 'card-services',
    title: '3. Card Services',
    icon: <CreditCard className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>3.1 Card Features Comparison</SectionHeading>
        <InfoTable
          headers={['Feature', 'Virtual VISA/MC', 'Physical Verve', 'Physical Afrigo']}
          rows={[
            ['Issuance Time', 'Instant', '3\u20137 Days', '3\u20137 Days'],
            ['Online Use', '\u2713 Global', '\u2713 Nigeria', '\u2713 Africa'],
            ['ATM Withdrawal', '\u2717', '\u2713', '\u2713'],
            ['POS Terminals', 'Via Wallet', '\u2713', '\u2713'],
            ['Mobile Wallets', '\u2713', '\u2717', '\u2717'],
          ]}
        />

        <SectionHeading>3.2 Card Controls</SectionHeading>
        <BulletList
          items={[
            'Freeze/Unfreeze: One-tap card freeze for security',
            'Spending Limits: Set daily/monthly transaction limits',
            'Transaction Alerts: Instant push notifications for all transactions',
            'Card Details: View card number, CVV, expiry in-app (with authentication)',
          ]}
        />
      </>
    ),
  },
  {
    id: 'funding-methods',
    title: '4. Funding Methods',
    icon: <Wallet className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>4.1 Cryptocurrency Funding</SectionHeading>
        <SubText>
          <strong>Supported Networks:</strong> BEP20 (Binance Smart Chain) \u2014
          Currently Active. Additional networks coming soon.
        </SubText>
        <InfoCard
          title="Supported Tokens"
          items={[
            'USDT (Tether)',
            'BUSD (Binance USD)',
            'BNB (Binance Coin)',
            'Other BEP20 tokens as supported',
          ]}
        />
        <SubText>
          <strong>Processing Time:</strong> Typically 1\u201315 minutes after
          blockchain confirmation. May vary based on network congestion.
        </SubText>

        <SectionHeading>4.2 Naira Bank Transfer</SectionHeading>
        <BulletList
          items={[
            'Transfer from any Nigerian bank account',
            'Unique virtual account number provided per user',
            'Processing: Typically instant to 30 minutes',
            'All transfers verified through banking partner',
          ]}
        />

        <SectionHeading>4.3 Exchange Rates</SectionHeading>
        <BulletList
          items={[
            'Real-time market rates displayed before confirmation',
            'Transparent fee structure \u2014 no hidden charges',
            'Rate locks for a limited time during transaction',
          ]}
        />
      </>
    ),
  },
  {
    id: 'bill-payments',
    title: '5. Bill Payments',
    icon: <Receipt className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>5.1 Electricity Providers (DISCOs)</SectionHeading>
        <InfoTable
          headers={['Provider', 'Coverage Area', 'Token Delivery']}
          rows={[
            ['AEDC', 'Abuja, Niger, Kogi, Nasarawa', 'Instant'],
            ['EKEDC', 'Lagos (Eko)', 'Instant'],
            ['IKEDC', 'Lagos (Ikeja)', 'Instant'],
            ['IBEDC', 'Oyo, Ogun, Osun, Kwara, Ekiti', 'Instant'],
            ['PHED', 'Rivers, Akwa Ibom, Bayelsa, Cross River', 'Instant'],
          ]}
        />

        <SectionHeading>5.2 Telecom Services</SectionHeading>
        <InfoTable
          headers={['Provider', 'Services']}
          rows={[
            ['MTN', 'Airtime, Data bundles'],
            ['Glo', 'Airtime, Data bundles'],
            ['Airtel', 'Airtime, Data bundles'],
            ['9mobile', 'Airtime, Data bundles'],
          ]}
        />

        <SectionHeading>5.3 Cable TV Subscriptions</SectionHeading>
        <BulletList
          items={[
            'DStv: All packages and bouquets',
            'GOtv: All packages',
            'Startimes: All packages',
          ]}
        />
      </>
    ),
  },
  {
    id: 'kyc-verification',
    title: '6. KYC & Verification',
    icon: <UserCheck className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>6.1 Verification Levels</SectionHeading>
        <InfoTable
          headers={['Level', 'Requirements', 'Features Unlocked']}
          rows={[
            ['Basic', 'Email, Phone, Basic Info', 'Limited transactions'],
            ['Tier 1', 'BVN, Government ID, Selfie', 'Virtual cards, standard limits'],
            ['Tier 2', 'Proof of Address, Additional docs', 'Physical cards, higher limits'],
          ]}
        />

        <SectionHeading>6.2 Accepted Documents</SectionHeading>
        <BulletList
          items={[
            'National ID (NIN): National Identity Number slip or card',
            'International Passport: Valid Nigerian passport',
            "Driver's License: Valid Nigerian driver's license",
            'Voter\'s Card: Permanent Voter\'s Card (PVC)',
            'BVN: Bank Verification Number (required for all tiers)',
            'Proof of Address: Utility bill, bank statement (within 3 months)',
          ]}
        />
      </>
    ),
  },
  {
    id: 'security-framework',
    title: '7. Security Framework',
    icon: <ShieldCheck className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>7.1 Data Protection</SectionHeading>
        <BulletList
          items={[
            'Encryption: 256-bit AES encryption for data at rest, TLS 1.3 for data in transit',
            'Tokenization: Card numbers tokenized for secure storage',
            'HSM: Hardware Security Modules for cryptographic operations',
            'Data Centers: Tier 3+ certified facilities with redundancy',
          ]}
        />

        <SectionHeading>7.2 Authentication Methods</SectionHeading>
        <BulletList
          items={[
            'Biometric: Fingerprint and Face ID support',
            '2FA: Two-factor authentication via SMS or authenticator app',
            'PIN: Transaction PIN for card operations',
            'Session Management: Automatic logout, device management',
          ]}
        />

        <SectionHeading>7.3 Fraud Prevention</SectionHeading>
        <BulletList
          items={[
            'Real-time transaction monitoring',
            'Behavioral analysis and anomaly detection',
            'Instant transaction alerts',
            '24/7 fraud monitoring team',
            '3D Secure for online transactions',
          ]}
        />
      </>
    ),
  },
  {
    id: 'fees-pricing',
    title: '8. Fees & Pricing',
    icon: <DollarSign className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>8.1 Card Fees</SectionHeading>
        <BulletList
          items={[
            'Virtual Card Issuance: Fee disclosed at issuance',
            'Physical Card Issuance: Fee disclosed at issuance (includes delivery)',
            'Card Replacement: Fee applies for lost/damaged cards',
            'Monthly Maintenance: As per card type (check app for current rates)',
          ]}
        />

        <SectionHeading>8.2 Transaction Fees</SectionHeading>
        <BulletList
          items={[
            'Domestic Transactions: Competitive rates',
            'International Transactions: Foreign transaction fee applies',
            'ATM Withdrawals: Fee per withdrawal',
            'Currency Conversion: Transparent spread on exchange rates',
          ]}
        />

        <div className="bg-primary-50 rounded-xl p-5 mt-4">
          <p className="text-sm text-primary-800 font-medium">
            All fees are displayed before transaction confirmation. No hidden
            charges. Check the app or website for current fee schedules.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'pltl-token',
    title: '9. $PLTL Token',
    icon: <Coins className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>9.1 Token Specifications</SectionHeading>
        <InfoTable
          headers={['Property', 'Detail']}
          rows={[
            ['Name', 'Ploutos ($PLTL)'],
            ['Network', 'BASE (Ethereum Layer 2)'],
            ['Standard', 'ERC-20 Compatible'],
            ['Audit', 'Cyberscope.io (Security Audit + KYC)'],
            ['Target Launch', 'After 1,200,000 cards sold'],
          ]}
        />

        <SectionHeading>9.2 Card Purchase Rewards</SectionHeading>
        <SubText>
          PloutosLabs has allocated 40,000,000 $PLTL tokens for card purchasers.
        </SubText>
        <InfoTable
          headers={['Card Purchase Tier', '$PLTL Reward Per Card']}
          rows={[
            ['First 40,000 Cards', '50 $PLTL (Best Offer!)'],
            ['Subsequent Purchases', 'Decreasing rewards per tier'],
          ]}
        />

        <SectionHeading>9.3 Vesting Schedule</SectionHeading>
        <BulletList
          items={[
            'Release Period: 2 years and 10 months (34 months)',
            'Structure: Gradual release starting from token launch',
            'Purpose: Ensures ecosystem stability and long-term commitment',
          ]}
        />

        <SectionHeading>9.4 Token Utility</SectionHeading>
        <BulletList
          items={[
            'Card purchase rewards',
            'E-commerce payments on Ploutos Store',
            'MFB banking incentives (future)',
            'Platform governance participation (future)',
            'Potential fee discounts',
          ]}
        />
      </>
    ),
  },
  {
    id: 'partners',
    title: '10. Partners & Integrations',
    icon: <Handshake className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>10.1 Banking Partner</SectionHeading>
        <InfoCard
          title="Safe Haven Microfinance Bank"
          subtitle="License: Central Bank of Nigeria (CBN)"
          items={[
            'Account infrastructure and banking services integration',
            'Core banking partner for Kavipay operations',
          ]}
        />

        <SectionHeading>10.2 Card Service Providers</SectionHeading>
        <InfoCard
          title="Sudo.africa"
          subtitle="Compliance: PCI DSS Certified"
          items={[
            'VISA and Mastercard virtual card programs',
            'Instant card issuance, 3D Secure',
          ]}
        />
        <InfoCard
          title="Payscribe"
          subtitle="Compliance: PCI DSS Certified"
          items={[
            'Card provisioning and payment processing',
            'Additional card services infrastructure',
          ]}
        />

        <SectionHeading>10.3 Logistics Partner</SectionHeading>
        <InfoCard
          title="Speedaf Logistics"
          items={[
            'Nationwide delivery within Nigeria',
            'Physical card delivery with tracking',
            '3\u20137 business days delivery timeline',
          ]}
        />
      </>
    ),
  },
  {
    id: 'compliance',
    title: '11. Regulatory Compliance',
    icon: <Scale className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>11.1 Nigerian Regulations</SectionHeading>
        <BulletList
          items={[
            'NDPR 2019: Nigeria Data Protection Regulation',
            'CBN Guidelines: Central Bank of Nigeria Payment Guidelines',
            'KYC/AML: Know Your Customer and Anti-Money Laundering requirements',
            'Cybercrimes Act 2015: Data security and cybercrime prevention',
            'MLA 2022: Money Laundering (Prevention and Prohibition) Act',
          ]}
        />

        <SectionHeading>11.2 Industry Standards</SectionHeading>
        <BulletList
          items={[
            'PCI DSS: Payment Card Industry Data Security Standard (through partners)',
            'Cyberscope: Security audit and team KYC verification',
          ]}
        />

        <SectionHeading>11.3 User Rights Under NDPR</SectionHeading>
        <BulletList
          items={[
            'Right to access personal data',
            'Right to rectification of inaccurate data',
            'Right to erasure (deletion)',
            'Right to data portability',
            'Right to object to processing',
            'Right to withdraw consent',
          ]}
        />
      </>
    ),
  },
  {
    id: 'support-procedures',
    title: '12. Support Procedures',
    icon: <HeadphonesIcon className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>12.1 Support Channels</SectionHeading>
        <BulletList
          items={[
            'In-App Chat: 24/7 live chat support (primary channel)',
            'Email: support@kavipay.io',
            'Help Center: Self-service FAQs and guides',
            'Social Media: Twitter, Facebook, Instagram',
          ]}
        />

        <SectionHeading>12.2 Response Times</SectionHeading>
        <InfoTable
          headers={['Channel', 'Response Time']}
          rows={[
            ['Live Chat', 'Immediate to 5 minutes'],
            ['Email', 'Within 24 hours'],
            ['Complaints', 'Acknowledgment within 48 hours, resolution within 21 days'],
          ]}
        />

        <SectionHeading>12.3 Escalation Process</SectionHeading>
        <div className="space-y-3 mb-4">
          {[
            { level: 'Level 1', desc: 'Customer Support Agent' },
            { level: 'Level 2', desc: 'Senior Support / Team Lead' },
            { level: 'Level 3', desc: 'Complaints Department (complaints@kavipay.io)' },
            { level: 'Level 4', desc: 'Nigeria Data Protection Bureau / CBN (external)' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-neutral-50 rounded-lg p-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <span className="font-semibold text-neutral-900">
                  {item.level}:
                </span>{' '}
                <span className="text-neutral-600">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'troubleshooting',
    title: '13. Troubleshooting',
    icon: <Wrench className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>Common Issues &amp; Solutions</SectionHeading>

        {[
          {
            issue: 'Transaction Pending',
            steps: [
              'Wait 30 minutes for processing',
              'Check internet connection',
              'Refresh the app',
              'If >2 hours, contact support with transaction ID',
            ],
          },
          {
            issue: 'Card Declined',
            steps: [
              'Check sufficient balance',
              'Verify card is not frozen',
              'Ensure transaction limits not exceeded',
              'Confirm merchant accepts card type',
              'Try again or contact support',
            ],
          },
          {
            issue: 'Cannot Login',
            steps: [
              'Verify email/phone number correct',
              "Use 'Forgot Password' to reset",
              'Clear app cache and retry',
              'Update app to latest version',
              'Contact support if issue persists',
            ],
          },
          {
            issue: 'Crypto Deposit Not Credited',
            steps: [
              'Verify correct network (BEP20) was used',
              'Confirm correct wallet address',
              'Check blockchain for confirmation',
              'Wait for network confirmations',
              'Contact support with transaction hash',
            ],
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-neutral-50 rounded-xl p-5 mb-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-warning-500" />
              <span className="font-semibold text-neutral-900">
                {item.issue}
              </span>
            </div>
            <BulletList items={item.steps} />
          </div>
        ))}
      </>
    ),
  },
  {
    id: 'glossary',
    title: '14. Glossary',
    icon: <BookOpen className="w-5 h-5" />,
    content: (
      <>
        <SectionHeading>Glossary of Terms</SectionHeading>
        <div className="space-y-3">
          {[
            ['2FA', 'Two-Factor Authentication \u2014 additional security layer'],
            ['AML', 'Anti-Money Laundering \u2014 regulations to prevent illegal financial activities'],
            ['BEP20', 'Binance Smart Chain token standard for cryptocurrency transfers'],
            ['BVN', 'Bank Verification Number \u2014 unique identifier for Nigerian bank customers'],
            ['CBN', 'Central Bank of Nigeria \u2014 primary financial regulator'],
            ['DISCO', 'Distribution Company \u2014 electricity distribution providers'],
            ['KYC', 'Know Your Customer \u2014 identity verification requirements'],
            ['NDPR', 'Nigeria Data Protection Regulation \u2014 data privacy law'],
            ['NIN', 'National Identification Number \u2014 Nigerian national ID'],
            ['PCI DSS', 'Payment Card Industry Data Security Standard'],
            ['$PLTL', 'Ploutos Token \u2014 PloutosLabs ecosystem utility token'],
            ['POS', 'Point of Sale \u2014 payment terminal'],
            ['USDT', 'Tether \u2014 stablecoin pegged to US Dollar'],
            ['VASP', 'Virtual Asset Service Provider \u2014 crypto exchange license'],
            ['Verve', 'Nigerian domestic card scheme'],
            ['Afrigo', 'Pan-African payment card scheme'],
          ].map(([term, def], i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-neutral-100 last:border-0"
            >
              <span className="font-semibold text-neutral-900 sm:w-28 flex-shrink-0">
                {term}
              </span>
              <span className="text-neutral-600">{def}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

export function KnowledgeBaseContent() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Track scroll position to highlight active nav item
  useEffect(() => {
    if (searchQuery.trim()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [searchQuery]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Simple text search: render all sections but highlight matches
  const matchesSearch = (section: Section) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return section.title.toLowerCase().includes(q);
  };

  const visibleSections = searchQuery.trim()
    ? sections.filter(matchesSearch)
    : sections;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          Complete Reference Guide
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
          Knowledge Base
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
          For customer support teams, agents &amp; users. Everything you need to
          know about Kavipay services.
        </p>

        {/* Search */}
        <div className="max-w-lg mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar navigation */}
        {!searchQuery.trim() && (
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-72 flex-shrink-0"
          >
            <div className="lg:sticky lg:top-28">
              <h2 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3 hidden lg:block">
                Table of Contents
              </h2>
              <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      'flex items-center gap-2.5 whitespace-nowrap text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700 shadow-sm'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                    )}
                  >
                    <span
                      className={cn(
                        'flex-shrink-0 transition-colors',
                        activeSection === section.id
                          ? 'text-primary-500'
                          : 'text-neutral-400'
                      )}
                    >
                      {section.icon}
                    </span>
                    <span className="hidden lg:inline">{section.title}</span>
                    <span className="lg:hidden">
                      {section.title.replace(/^\d+\.\s/, '')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 min-w-0"
        >
          {visibleSections.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">
                No topics found for &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-neutral-400 mt-2">
                Try a different search term or browse by section.
              </p>
            </div>
          ) : (
            visibleSections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className="mb-12 last:mb-0 scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-neutral-200">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                    {section.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
                    {section.title}
                  </h2>
                </div>
                <div className="prose-neutral">{section.content}</div>
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
            Reach out to the right team for your specific needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* General Support */}
            <div className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500" />
                General Support
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:support@kavipay.io"
                  className="block text-primary-600 hover:underline"
                >
                  support@kavipay.io
                </a>
                <p className="text-neutral-500">In-App: 24/7 Live Chat</p>
                <a
                  href="https://kavipay.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-600 hover:underline"
                >
                  kavipay.io
                </a>
              </div>
            </div>

            {/* Privacy & Data */}
            <div className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary-500" />
                Privacy &amp; Data Protection
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:dpo@kavipay.io"
                  className="block text-primary-600 hover:underline"
                >
                  dpo@kavipay.io
                </a>
                <a
                  href="mailto:privacy@kavipay.io"
                  className="block text-primary-600 hover:underline"
                >
                  privacy@kavipay.io
                </a>
                <a
                  href="mailto:datarights@kavipay.io"
                  className="block text-primary-600 hover:underline"
                >
                  datarights@kavipay.io
                </a>
              </div>
            </div>

            {/* Complaints */}
            <div className="bg-white rounded-xl p-5">
              <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary-500" />
                Complaints &amp; Escalation
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:complaints@kavipay.io"
                  className="block text-primary-600 hover:underline"
                >
                  complaints@kavipay.io
                </a>
                <a
                  href="mailto:security@kavipay.io"
                  className="block text-primary-600 hover:underline"
                >
                  security@kavipay.io
                </a>
                <p className="text-neutral-500">
                  External: NDPB &mdash; info@ndpb.gov.ng
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
