import { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { KnowledgeBaseContent } from '@/components/knowledge-base/KnowledgeBaseContent';

export const metadata: Metadata = {
  title: 'Knowledge Base - Kavipay',
  description:
    'Kavipay complete reference guide — card services, funding methods, bill payments, security, compliance, and more.',
};

export default function KnowledgeBasePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50 pt-20">
        <KnowledgeBaseContent />
      </main>
      <Footer />
    </>
  );
}
