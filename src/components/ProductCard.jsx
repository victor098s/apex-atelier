import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { toast } from 'sonner';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      type: 'Produto',
      image: product.image,
    });
    toast.success(`"${product.name}" adicionado ao carrinho!`, {
      icon: '✅',
    });
  };

  return (
    <div className="bg-[#1a1b20] rounded-xl p-4 flex flex-col justify-between shadow-lg group border border-[#343439]/40 hover:border-[#343439]/70 transition-all">
      {/* Image */}
      <div className="relative h-64 bg-[#1f1f24] rounded overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-[#0d0e12]/80 text-[#ffc665] font-['JetBrains_Mono'] text-[0.6rem] uppercase rounded">
          {product.badge}
        </span>
      </div>

      {/* Content */}
      <div>
        <div className="font-['JetBrains_Mono'] text-[0.65rem] text-[#ffc665] uppercase tracking-wider">
          {product.category}
        </div>
        <h3 className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.1rem] mt-1 leading-tight">
          {product.name}
        </h3>
        <p className="font-['Outfit'] text-[0.82rem] text-[#d4c4b0] mt-1 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-[#343439]/60 flex items-center justify-between">
        <span className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.1rem]">
          {formatCurrency(product.price)}
        </span>
        <button
          onClick={handleAdd}
          className="p-2.5 bg-[#ffc665] hover:bg-[#fabc4d] text-[#432c00] rounded transition-colors flex items-center justify-center cursor-pointer active:scale-95"
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
