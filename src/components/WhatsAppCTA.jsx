import { openDirectSupport } from '../utils/whatsapp';

export default function WhatsAppCTA() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0d0e12] via-[#1a1b20] to-[#0d0e12] border-y border-[#343439]/40">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
            Atendimento Imediato &amp; Concierge
          </span>
          <h3 className="font-['Syne'] font-bold text-[#e3e2e8] uppercase text-[1.6rem] md:text-[2rem]">
            Prefere atendimento direto pelo WhatsApp?
          </h3>
          <p className="font-['Outfit'] text-[1rem] text-[#d4c4b0] max-w-xl">
            Converse em tempo real com nossa equipe de especialistas para esclarecer dúvidas,
            enviar fotos do seu veículo e receber uma prévia de orçamento imediata.
          </p>
        </div>

        <button
          onClick={openDirectSupport}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e5a93c] via-[#ffc665] to-[#ffdead] text-[#432c00] font-['JetBrains_Mono'] text-[0.75rem] font-bold uppercase tracking-[0.1em] rounded-full shadow-[0_0_30px_rgba(229,169,60,0.5)] hover:shadow-[0_0_40px_rgba(229,169,60,0.8)] hover:scale-105 transform transition-all duration-300 border border-[#ffdead]/50 whitespace-nowrap cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.124 1.524 5.862L0 24l6.332-1.499A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.144-1.462l-.369-.219-3.763.893.925-3.653-.244-.386A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
          </svg>
          <span>Iniciar Conversa VIP via WhatsApp</span>
        </button>
      </div>
    </section>
  );
}
