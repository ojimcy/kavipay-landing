import { Header, Footer } from '@/components/layout';
import {
  CardHero,
  VirtualCard,
  PhysicalCard,
  CardFeatures,
  CardComparison,
  CardCTA,
} from '@/components/card';

export const metadata = {
  title: 'Kavipay Cards - Virtual & Physical Cards for Global Spending',
  description: 'Get instant virtual cards or premium physical cards. Spend globally at 45M+ merchants with zero fees and instant funding.',
};

export default function CardPage() {
  return (
    <>
      <Header />
      <main>
        <CardHero />
        <VirtualCard />
        <PhysicalCard />
        <CardFeatures />
        <CardComparison />
        <CardCTA />
      </main>
      <Footer />
    </>
  );
}
