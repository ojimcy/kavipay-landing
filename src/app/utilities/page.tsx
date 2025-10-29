import { Header, Footer } from '@/components/layout';
import {
  UtilitiesHero,
  BillPayments,
  AirtimeData,
  UtilitiesFeatures,
  UtilitiesCTA,
} from '@/components/utilities';

export const metadata = {
  title: 'Kavipay Utilities - Pay Bills, Buy Airtime & More',
  description: 'Pay utility bills, buy airtime and data, send money to friends and family. All from one convenient app.',
};

export default function UtilitiesPage() {
  return (
    <>
      <Header />
      <main>
        <UtilitiesHero />
        <BillPayments />
        <AirtimeData />
        <UtilitiesFeatures />
        <UtilitiesCTA />
      </main>
      <Footer />
    </>
  );
}
