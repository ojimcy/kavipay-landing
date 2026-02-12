import { Header, Footer } from '@/components/layout';
import { PDFViewer } from '@/components/legal';

export const metadata = {
  title: 'End User License Agreement - Kavipay',
  description: 'Read the Kavipay End User License Agreement (EULA) outlining the terms for using our application.',
};

export default function EULAPage() {
  return (
    <>
      <Header />
      <PDFViewer
        pdfUrl="/docs/Kavipay_EULA.pdf"
        title="End User License Agreement"
      />
      <Footer />
    </>
  );
}
