import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import DropsGrid from '@/components/DropsGrid';
import ProductDNA from '@/components/ProductDNA';
import NFCSection from '@/components/NFCSection';
import Creed from '@/components/Creed';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <main className="relative bg-ink text-bone min-h-screen">
      <Header />
      <Hero />
      <ValueProps />
      <DropsGrid />
      <ProductDNA />
      <NFCSection />
      <Creed />
      <Footer />
      <CartDrawer />
    </main>
  );
}
