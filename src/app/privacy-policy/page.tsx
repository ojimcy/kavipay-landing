import { Header, Footer } from '@/components/layout';
import { PDFViewer } from '@/components/legal';

export const metadata = {
  title: 'Privacy Policy - Kavipay',
  description: 'Read Kavipay\'s comprehensive privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PDFViewer
        pdfUrl="/docs/Kavipay_Comprehensive_Privacy_Policy.pdf"
        title="Privacy Policy"
      />
      <Footer />
    </>
  );
}
