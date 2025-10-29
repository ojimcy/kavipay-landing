import { Header, Footer } from '@/components/layout';
import {
  Hero,
  TrustBar,
  Features,
  Security,
  HowItWorks,
  Testimonials,
  AppDownload,
  FinalCTA,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Security />
        <HowItWorks />
        <Testimonials />
        <AppDownload />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
