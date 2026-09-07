import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { openDirectSupport } from '../utils/whatsapp';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre Nós', href: '#sobre-nos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Header({ onCartOpen }) {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // detect active section
      const sections = ['sobre-nos', 'servicos', 'produtos', 'galeria', 'contato'];
      let current = 'inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d0e12]/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.5)]'
            : 'bg-[#0d0e12]/85 backdrop-blur-xl'
        }`}
      >
        <div className="h-20 max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-8 h-8 rounded bg-[#e5a93c] flex items-center justify-center">
              <span className="text-[#432c00] font-bold text-sm font-['JetBrains_Mono']">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Syne'] font-bold text-[#e3e2e8] tracking-tight uppercase text-[1.1rem] leading-tight">
                Apex Atelier
              </span>
              <span className="font-['JetBrains_Mono'] text-[0.65rem] text-[#ffc665] tracking-[0.15em] uppercase">
                Automotive Couture
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-1.5 font-['JetBrains_Mono'] text-[0.72rem] tracking-[0.15em] uppercase transition-all duration-200 rounded ${
                    isActive
                      ? 'text-[#ffc665] bg-[#ffc665]/10'
                      : 'text-[#d4c4b0] hover:text-[#e3e2e8]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={onCartOpen}
              className="relative p-2 rounded bg-[#1f1f24] hover:bg-[#292a2e] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Abrir carrinho"
            >
              <ShoppingBag size={20} className="text-[#e3e2e8]" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-[#ffc665] text-[#432c00] font-['JetBrains_Mono'] text-[0.65rem] font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* WhatsApp CTA - Desktop */}
            <button
              onClick={openDirectSupport}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#e5a93c] hover:bg-[#fabc4d] text-[#432c00] font-['JetBrains_Mono'] text-[0.7rem] font-bold uppercase tracking-[0.1em] rounded transition-all shadow-[0_0_16px_rgba(229,169,60,0.3)] hover:shadow-[0_0_24px_rgba(229,169,60,0.5)] cursor-pointer"
            >
              Agendar
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 rounded bg-[#1f1f24] hover:bg-[#292a2e] transition-colors text-[#e3e2e8]"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20">
          <div
            className="absolute inset-0 bg-[#0d0e12]/95 backdrop-blur-xl"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative z-10 flex flex-col gap-1 p-6 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-3 font-['JetBrains_Mono'] text-[0.8rem] tracking-[0.15em] uppercase text-[#d4c4b0] hover:text-[#ffc665] hover:bg-[#ffc665]/5 rounded transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-[#343439]/50">
              <button
                onClick={() => { openDirectSupport(); setMenuOpen(false); }}
                className="w-full py-3 bg-[#e5a93c] text-[#432c00] font-['JetBrains_Mono'] text-[0.75rem] font-bold uppercase tracking-[0.1em] rounded"
              >
                WhatsApp Direto
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
