import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DropsGrid from '@/components/DropsGrid';
import ProductDNA from '@/components/ProductDNA';
import NFCSection from '@/components/NFCSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <main className="relative bg-ink text-bone min-h-screen">
      <Header />
      <Hero />
      <DropsGrid />
      <ProductDNA />
      <NFCSection />
      <Footer />
      <CartDrawer />
    </main>
  );
}
