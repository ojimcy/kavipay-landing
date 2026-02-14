import { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { FAQContent } from '@/components/faq/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ - Kavipay',
  description:
    'Find answers to frequently asked questions about Kavipay — cards, funding, bill payments, security, fees, and more.',
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50 pt-20">
        <FAQContent />
      </main>
      <Footer />
    </>
  );
}
