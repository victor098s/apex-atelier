import { useState } from 'react';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import WhatsAppCTA from './components/WhatsAppCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WhatsAppButton from './components/WhatsAppButton';

function ApexApp() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121317] text-[#e3e2e8] flex flex-col relative selection:bg-[#ffc665] selection:text-[#432c00]">
      {/* Toast Notifications Provider */}
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#1f1f24',
            color: '#e3e2e8',
            border: '1px solid rgba(229, 169, 60, 0.3)',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '0.88rem',
          },
        }}
      />

      {/* Header */}
      <Header onCartOpen={() => setIsCartOpen(true)} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-[#121317] flex-1">
        <Hero />
        <About />
        <Services />
        <Products />
        <Gallery />
        <WhatsAppCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ApexApp />
    </CartProvider>
  );
}
