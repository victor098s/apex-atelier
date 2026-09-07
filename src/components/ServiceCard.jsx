import { Check, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { toast } from 'sonner';

export default function ServiceCard({ service }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: service.id,
      name: service.name,
      price: service.price,
      type: 'Serviço',
      image: service.image,
    });
    toast.success(`"${service.name}" adicionado ao carrinho!`, {
      icon: '✅',
    });
  };

  return (
    <div className="group flex flex-col justify-between rounded-xl bg-[#1a1b20] hover:bg-[#1f1f24] transition-all shadow-xl border border-[#343439]/30 overflow-hidden relative">
      {/* Featured Badge */}
      {service.featured && (
        <div className="absolute top-0 right-0 bg-[#ffc665] text-[#432c00] font-['JetBrains_Mono'] text-[0.65rem] uppercase font-bold px-3 py-1 rounded-bl z-10">
          {service.featuredLabel}
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#1f1f24] shrink-0">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b20] via-transparent to-transparent" />
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#0d0e12]/80 backdrop-blur-md font-['JetBrains_Mono'] text-[0.72rem] text-[#e3e2e8] border border-[#343439]/40">
          {service.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="px-2 py-0.5 rounded bg-[#1f1f24] font-['JetBrains_Mono'] text-[0.65rem] uppercase text-[#ffc665] self-start">
          {service.tag}
        </span>
        <h3 className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.4rem] leading-tight">
          {service.name}
        </h3>
        <p className="font-['Outfit'] text-[0.88rem] text-[#d4c4b0] leading-relaxed">
          {service.description}
        </p>
        <ul className="flex flex-col gap-1.5 mt-1">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 font-['Outfit'] text-[0.88rem] text-[#e3e2e8]">
              <Check size={16} className="text-[#ffc665] shrink-0" />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 pt-3 border-t border-[#343439]/60 flex items-center justify-between">
        <div>
          <span className="font-['JetBrains_Mono'] text-[0.65rem] text-[#d4c4b0] uppercase">
            Investimento
          </span>
          <div className="font-['Syne'] font-bold text-[#ffc665] text-[1.2rem]">
            {formatCurrency(service.price)}
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#ffc665] hover:bg-[#fabc4d] text-[#432c00] font-['JetBrains_Mono'] text-[0.72rem] font-bold uppercase tracking-[0.05em] rounded transition-all cursor-pointer active:scale-95"
        >
          <ShoppingCart size={14} />
          Adicionar
        </button>
      </div>
    </div>
  );
}
