import { Header, Footer } from '@/components/layout';
import { PDFViewer } from '@/components/legal';

export const metadata = {
  title: 'Cookies Policy - Kavipay',
  description: 'Learn about how Kavipay uses cookies and similar technologies to enhance your browsing experience.',
};

export default function CookiesPolicyPage() {
  return (
    <>
      <Header />
      <PDFViewer
        pdfUrl="/docs/Kavipay_Cookies_Policy.pdf"
        title="Cookies Policy"
      />
      <Footer />
    </>
  );
}
