import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DropsGrid from '@/components/DropsGrid';
import Creed from '@/components/Creed';
import ProductDNA from '@/components/ProductDNA';
import NFCSection from '@/components/NFCSection';
import ValueProps from '@/components/ValueProps';
import NewsletterForm from '@/components/NewsletterForm';
import Emblem from '@/components/Emblem';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function HomePage() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <DropsGrid />
        <Creed />
        <ProductDNA />
        <NFCSection />
        <ValueProps />
        <NewsletterForm />
        <Emblem />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
