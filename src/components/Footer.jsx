import { MapPin, Clock, Mail, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { openDirectSupport } from '../utils/whatsapp';

export default function Footer() {
  const scrollTo = (id) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0d0e12] border-t border-[#343439]/40 pt-16 pb-24 relative">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#343439]/30 items-start">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#e5a93c] flex items-center justify-center">
                <span className="text-[#432c00] font-bold text-sm font-['JetBrains_Mono']">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Syne'] font-bold text-[#e3e2e8] uppercase tracking-tight text-[1.1rem]">
                  Apex Atelier
                </span>
                <span className="font-['JetBrains_Mono'] text-[0.65rem] text-[#ffc665] uppercase tracking-[0.15em]">
                  Automotive Couture
                </span>
              </div>
            </div>

            <p className="font-['Outfit'] text-[0.88rem] text-[#d4c4b0] max-w-sm pt-2 leading-relaxed">
              Estúdio de alta precisão especializado em restauração estética automotiva, PPF autocurativo
              aeroespacial e proteção cerâmica 10H para superesportivos e coleções nobres.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[#ffc665]">
              <ShieldCheck size={18} />
              <span className="font-['JetBrains_Mono'] text-[0.65rem] text-[#d4c4b0] uppercase tracking-wider">
                Qualidade Certificada ISO 9001
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Navegação
            </span>
            <ul className="flex flex-col gap-2 font-['Outfit'] text-[0.88rem]">
              <li>
                <button
                  onClick={() => scrollTo('inicio')}
                  className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sobre-nos')}
                  className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('servicos')}
                  className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer text-left"
                >
                  Serviços Especializados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('produtos')}
                  className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer text-left"
                >
                  Boutique de Insumos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('galeria')}
                  className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer text-left"
                >
                  Galeria de Resultados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contato')}
                  className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer text-left"
                >
                  Solicitar Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Ateliê &amp; Contato
            </span>
            <div className="flex flex-col gap-3 font-['Outfit'] text-[0.88rem] text-[#d4c4b0]">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#ffc665] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#e3e2e8] font-medium block">Showroom Jardins</span>
                  <span>Av. Europa, 1280 • Jardins, São Paulo - SP</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={18} className="text-[#ffc665] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#e3e2e8] font-medium block">Horário de Atendimento</span>
                  <span>Seg - Sex: 08h às 19h | Sáb: 09h às 15h</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={18} className="text-[#ffc665] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#e3e2e8] font-medium block">Concierge Exclusivo</span>
                  <span className="font-['JetBrains_Mono'] text-[0.8rem] text-[#d4c4b0]">
                    concierge@apexatelier.com.br
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Support Box */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Atendimento Imediato
            </span>
            <div className="flex flex-col gap-3 font-['Outfit'] text-[0.88rem] text-[#d4c4b0]">
              <p className="leading-snug">
                Canal direto com o Master Concierge para agendamentos prioritários e transporte fechado blindado.
              </p>
              <button
                onClick={openDirectSupport}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#e5a93c] to-[#ffc665] hover:from-[#ffc665] hover:to-[#ffdead] text-[#432c00] font-['JetBrains_Mono'] text-[0.72rem] uppercase font-bold tracking-[0.1em] rounded shadow-[0_4px_25px_rgba(229,169,60,0.45)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer w-full"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.124 1.524 5.862L0 24l6.332-1.499A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.144-1.462l-.369-.219-3.763.893.925-3.653-.244-.386A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
                <span>WhatsApp VIP Direto</span>
              </button>
              <div className="flex items-center justify-between text-[0.68rem] text-[#d4c4b0] uppercase font-['JetBrains_Mono'] pt-1">
                <span className="flex items-center gap-1">
                  <Lock size={13} className="text-[#ffc665]" /> Custódia 24h
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-[#ffc665]" /> Sigilo Total
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-[#d4c4b0] font-['JetBrains_Mono'] text-[0.7rem]">
          <div>
            © {new Date().getFullYear()} Apex Atelier • Automotive Couture. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-[#ffc665] transition-colors cursor-pointer">
              Normas Técnicas ISO 9001
            </span>
            <span className="text-[#343439]">•</span>
            <span className="hover:text-[#ffc665] transition-colors cursor-pointer">
              Termos de Custódia
            </span>
            <span className="text-[#343439]">•</span>
            <span className="hover:text-[#ffc665] transition-colors cursor-pointer">
              Política de Sigilo &amp; Privacidade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
