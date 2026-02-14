import { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { HelpCenterContent } from '@/components/help-center/HelpCenterContent';

export const metadata: Metadata = {
  title: 'Help Center - Kavipay',
  description:
    'Get help with Kavipay — browse FAQs, read our knowledge base, troubleshoot issues, or contact our 24/7 support team.',
};

export default function HelpCenterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50 pt-20">
        <HelpCenterContent />
      </main>
      <Footer />
    </>
  );
}
