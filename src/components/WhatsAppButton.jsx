import { MessageCircle } from 'lucide-react';
import { openDirectSupport } from '../utils/whatsapp';

export default function WhatsAppButton() {
  return (
    <button
      onClick={openDirectSupport}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#ffc665] text-[#432c00] font-['JetBrains_Mono'] text-[0.72rem] uppercase font-bold tracking-[0.1em] rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_24px_rgba(229,169,60,0.4)] hover:bg-[#fabc4d] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label="Atendimento via WhatsApp"
    >
      <MessageCircle size={20} className="fill-current" />
      <span className="hidden sm:inline">WhatsApp Direto</span>
    </button>
  );
}
