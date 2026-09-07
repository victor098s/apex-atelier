import { X } from 'lucide-react';
import { openDirectSupport } from '../utils/whatsapp';

export default function GalleryModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0d0e12]/90 backdrop-blur-xl z-[110] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#1f1f24] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-[400px] md:h-[520px] bg-[#343439]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0d0e12]/80 text-[#e3e2e8] hover:text-[#ffc665] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Footer */}
        <div className="p-6 flex items-center justify-between bg-[#1f1f24]">
          <div>
            <span className="font-['JetBrains_Mono'] text-[0.65rem] text-[#ffc665] uppercase tracking-wider">
              Inspeção Macro Apex
            </span>
            <h3 className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.1rem] mt-0.5">
              {item.title}
            </h3>
          </div>
          <button
            onClick={() => { onClose(); openDirectSupport(); }}
            className="px-4 py-2 bg-[#ffc665] hover:bg-[#fabc4d] text-[#432c00] font-['JetBrains_Mono'] text-[0.72rem] font-bold uppercase rounded transition-all cursor-pointer"
          >
            Solicitar Diagnóstico
          </button>
        </div>
      </div>
    </div>
  );
}
