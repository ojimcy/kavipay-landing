import { Header, Footer } from '@/components/layout';
import { PDFViewer } from '@/components/legal';

export const metadata = {
  title: 'Terms and Conditions - Kavipay',
  description: 'Review Kavipay\'s terms and conditions governing the use of our services and platform.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <PDFViewer
        pdfUrl="/docs/Kavipay_Terms_Conditions.pdf"
        title="Terms and Conditions"
      />
      <Footer />
    </>
  );
}
