import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { openDirectSupport } from '../utils/whatsapp';

import skylineImg from '../assets/pexels-jair-hernandez-2142547366-38754887.jpg';
import mercedesImg from '../assets/pexels-gaby-lopez-301814849-38758424.jpg';
import gt86Img from '../assets/pexels-introspectivedsgn-39356299.jpg';
import opalaImg from '../assets/pexels-breno-cardoso-149064345-30016060.jpg';
import karmannImg from '../assets/pexels-itslauravillela-39087402.jpg';
import impalaImg from '../assets/pexels-emanuel-pedro-1266938328-29366933.jpg';

const heroSlides = [
  {
    id: 0,
    label: 'Nissan Skyline GT-R',
    image: skylineImg,
  },
  {
    id: 1,
    label: 'Mercedes-Benz AMG',
    image: mercedesImg,
  },
  {
    id: 2,
    label: 'Toyota GT86 GReddy',
    image: gt86Img,
  },
  {
    id: 3,
    label: 'Chevrolet Opala SS',
    image: opalaImg,
  },
  {
    id: 4,
    label: 'Karmann Ghia Clássico',
    image: karmannImg,
  },
  {
    id: 5,
    label: 'Chevrolet Impala 1964',
    image: impalaImg,
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[960px] flex flex-col justify-center overflow-hidden -mt-20 pt-28 pb-16"
    >
      {/* Background Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 z-0 bg-cover bg-center scale-105 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: i === activeSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12]/95 via-[#121317]/85 to-[#121317]/70 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e12]/90 via-transparent to-[#121317] z-[1] pointer-events-none" />
      {/* Amber Glow */}
      <div className="absolute -top-40 left-1/4 w-[750px] h-[520px] bg-[#ffc665]/15 rounded-full blur-[170px] z-[2] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e5a93c]/15 rounded-full blur-[140px] z-[2] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-5 md:px-8 lg:px-16 flex flex-col justify-between h-full gap-10">
        {/* Top Telemetry Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292a2e]/75 backdrop-blur-md border border-[#504535]/30">
            <span className="w-2 h-2 rounded-full bg-[#ffc665] animate-pulse" />
            <span className="font-['JetBrains_Mono'] text-[0.72rem] text-[#ffc665] uppercase tracking-[0.15em]">
              Atelier de Alta Precisão • São Paulo
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          {/* Headline Column */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Automotive Couture &amp; Estética Científica
            </span>

            <h1 className="font-['Syne'] font-bold text-[#e3e2e8] uppercase leading-none tracking-tight text-[2.8rem] sm:text-[4rem] lg:text-[5rem]">
              Seu carro merece <br className="hidden sm:inline" />
              mais do que cuidado. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc665] via-[#ffdead] to-[#fabc4d]">
                Merece excelência.
              </span>
            </h1>

            <p className="font-['Outfit'] text-[1.15rem] text-[#d4c4b0] max-w-2xl pt-1 leading-relaxed">
              Especialistas em detalhamento estético minucioso, vitrificação cerâmica alemã 10H,
              proteção PPF autocurativa e restauração sob medida para superesportivos e veículos
              de colecionador.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={openDirectSupport}
                className="relative group inline-flex items-center gap-2 px-8 py-3.5 bg-[#ffc665] hover:bg-[#fabc4d] text-[#432c00] font-['JetBrains_Mono'] text-[0.72rem] font-bold uppercase tracking-[0.1em] rounded shadow-[0_10px_35px_rgba(229,169,60,0.35)] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.124 1.524 5.862L0 24l6.332-1.499A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.144-1.462l-.369-.219-3.763.893.925-3.653-.244-.386A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
                <span>Agendar pelo WhatsApp</span>
                {/* Ping dot */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffdead] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e5a93c]" />
                </span>
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#292a2e]/80 hover:bg-[#343439] text-[#e3e2e8] font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.1em] transition-all backdrop-blur-md rounded border border-[#504535]/30 cursor-pointer"
              >
                Conhecer Serviços
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Slide Selector Pills */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="font-['JetBrains_Mono'] text-[0.6rem] text-[#d4c4b0] uppercase tracking-wider mr-1">
                Galeria:
              </span>
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(i)}
                  className={`px-2.5 py-1 rounded font-['JetBrains_Mono'] text-[0.65rem] uppercase transition-all cursor-pointer ${
                    activeSlide === i
                      ? 'bg-[#ffc665] text-[#432c00] font-bold'
                      : 'bg-[#292a2e]/80 text-[#d4c4b0] hover:text-[#e3e2e8]'
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>

          {/* Telemetry Panel */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-6 rounded bg-[#1a1b20]/80 backdrop-blur-xl border border-[#343439]/60 shadow-2xl flex flex-col gap-4">
              <div className="flex items-center justify-between pb-1">
                <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase text-[#d4c4b0] tracking-[0.15em]">
                  Live Telemetry
                </span>
                <span className="flex items-center gap-1 font-['JetBrains_Mono'] text-[0.8rem] font-semibold text-[#ffc665]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc665]" /> 24°C • 48% UR
                </span>
              </div>

              {/* Telemetry Row 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[#e3e2e8]">
                  <span className="font-['Outfit'] text-[0.82rem]">Índice de Correção de Verniz</span>
                  <span className="font-['JetBrains_Mono'] text-[0.8rem] font-bold text-[#ffc665]">98.4%</span>
                </div>
                <div className="w-full bg-[#1f1f24] h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#e5a93c] to-[#ffc665]" style={{ width: '98.4%' }} />
                </div>
              </div>

              {/* Telemetry Row 2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[#e3e2e8]">
                  <span className="font-['Outfit'] text-[0.82rem]">Dureza do Revestimento (Mohs)</span>
                  <span className="font-['JetBrains_Mono'] text-[0.8rem] font-bold text-[#ffc665]">10H SiN+</span>
                </div>
                <div className="w-full bg-[#1f1f24] h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#e5a93c] to-[#ffc665]" style={{ width: '95%' }} />
                </div>
              </div>

              <div className="pt-2 border-t border-[#343439]/40 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[#d4c4b0] font-['JetBrains_Mono'] text-[0.72rem]">
                  <span className="uppercase tracking-widest">Custódia Monitorada</span>
                  <span className="text-[#ffc665] font-bold">24H Blindada</span>
                </div>
                <button
                  onClick={openDirectSupport}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#e5a93c] to-[#ffc665] hover:from-[#ffc665] hover:to-[#ffdead] text-[#432c00] font-['JetBrains_Mono'] text-[0.72rem] font-bold uppercase tracking-[0.1em] rounded shadow-[0_4px_25px_rgba(229,169,60,0.45)] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.124 1.524 5.862L0 24l6.332-1.499A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.144-1.462l-.369-.219-3.763.893.925-3.653-.244-.386A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                  </svg>
                  WhatsApp Direto • Atendimento Imediato
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {[
            { icon: '★', value: '★ 4.9 / 5.0', label: 'Avaliação Média VIP' },
            { icon: '⚡', value: '+1.200', label: 'Supercarros Entregues' },
            { icon: '✓', value: 'IDA & Gyeon', label: 'Certificação Master' },
            { icon: '🛡', value: 'Vitalícia', label: 'Garantia em PPF & 10H' },
          ].map((badge, i) => (
            <div
              key={i}
              className="p-4 bg-[#0d0e12]/85 backdrop-blur-md rounded border border-[#343439]/40 flex items-center gap-3 shadow-lg"
            >
              <span className="text-[#ffc665] text-2xl">{badge.icon}</span>
              <div>
                <div className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.1rem]">{badge.value}</div>
                <div className="font-['JetBrains_Mono'] text-[0.65rem] text-[#d4c4b0] uppercase tracking-wider">{badge.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-4 pb-1">
          <button
            onClick={scrollToServices}
            className="flex flex-col items-center gap-1 text-[#d4c4b0] hover:text-[#ffc665] transition-colors cursor-pointer"
          >
            <span className="font-['JetBrains_Mono'] text-[0.6rem] uppercase tracking-[0.2em]">Explorar Atelier</span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
