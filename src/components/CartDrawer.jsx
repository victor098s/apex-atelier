import { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ShieldCheck, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { openCartQuote } from '../utils/whatsapp';
import { toast } from 'sonner';

export default function CartDrawer({ isOpen, onClose }) {
  const {
    items,
    itemCount,
    subtotal,
    discountValue,
    total,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    discountRate,
  } = useCart();

  const [vehicleInput, setVehicleInput] = useState('');

  const handleRemove = (item) => {
    removeFromCart(item.id);
    toast('Item removido do carrinho.', {
      icon: '🗑️',
    });
  };

  const handleClear = () => {
    if (items.length === 0) return;
    clearCart();
    toast('Carrinho limpo.', {
      icon: '🧹',
    });
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.warning('Seu carrinho está vazio. Adicione itens antes de finalizar.', {
        icon: '⚠️',
      });
      return;
    }
    openCartQuote(items, total, subtotal, discountValue, vehicleInput);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#0d0e12]/80 backdrop-blur-md z-[99] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#1a1b20] shadow-[0_0_50px_rgba(0,0,0,0.9)] z-[100] transition-transform duration-300 flex flex-col justify-between border-l border-[#343439]/60 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Carrinho de Compras"
      >
        {/* Drawer Header */}
        <div className="p-6 bg-[#1f1f24] flex items-center justify-between border-b border-[#343439]/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="text-[#ffc665]" size={22} />
            <span className="font-['Syne'] text-[1.15rem] uppercase font-bold text-[#e3e2e8]">
              Seu Carrinho VIP
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#ffc665] text-[#432c00] font-['JetBrains_Mono'] text-[0.65rem] font-bold">
              {itemCount}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={handleClear}
                title="Limpar carrinho"
                className="text-[#d4c4b0] hover:text-[#ffb4ab] text-[0.72rem] font-['JetBrains_Mono'] uppercase tracking-wider transition-colors px-2 py-1"
              >
                Limpar
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded bg-[#292a2e] hover:bg-[#343439] text-[#e3e2e8] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar carrinho"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3.5 divide-y divide-[#343439]/30">
          {items.length === 0 ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center text-[#d4c4b0] p-6">
              <div className="w-16 h-16 rounded-full bg-[#1f1f24] border border-[#343439]/60 flex items-center justify-center mb-4 text-[#ffc665]">
                <ShoppingBag size={30} />
              </div>
              <p className="font-['Syne'] text-[1.2rem] font-bold text-[#e3e2e8]">
                Seu carrinho está vazio
              </p>
              <p className="font-['Outfit'] text-[0.85rem] text-[#d4c4b0] mt-1.5 max-w-xs leading-relaxed">
                Explore os serviços e insumos da boutique Apex Atelier para montar sua solicitação exclusiva.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="pt-3.5 first:pt-0 p-3 rounded-lg bg-[#1f1f24]/70 border border-[#343439]/40 flex items-center justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <span className="font-['JetBrains_Mono'] text-[0.6rem] text-[#ffc665] uppercase tracking-wider block">
                    {item.type}
                  </span>
                  <div className="font-['Syne'] text-[0.95rem] font-bold text-[#e3e2e8] truncate mt-0.5">
                    {item.name}
                  </div>
                  <div className="font-['JetBrains_Mono'] text-[0.82rem] text-[#ffc665] font-bold mt-1">
                    {formatCurrency(item.price)}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-7 h-7 rounded bg-[#292a2e] hover:bg-[#343439] text-[#e3e2e8] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="font-['JetBrains_Mono'] text-[0.82rem] font-semibold text-[#e3e2e8] w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-7 h-7 rounded bg-[#292a2e] hover:bg-[#343439] text-[#e3e2e8] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus size={13} />
                  </button>
                  <button
                    onClick={() => handleRemove(item)}
                    className="text-[#d4c4b0] hover:text-[#ffb4ab] p-1.5 transition-colors ml-1 cursor-pointer"
                    aria-label="Remover item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Summary */}
        <div className="p-6 bg-[#1f1f24] border-t border-[#343439]/60 flex flex-col gap-3 shrink-0">

          {/* Vehicle Model for Context */}
          <div>
            <input
              type="text"
              value={vehicleInput}
              onChange={(e) => setVehicleInput(e.target.value)}
              placeholder="Qual seu veículo? (ex: Porsche 911 GT3)"
              className="h-10 px-3.5 bg-[#292a2e] text-[#e3e2e8] rounded font-['Outfit'] text-[0.85rem] w-full outline-none focus:bg-[#343439] focus:ring-1 focus:ring-[#e5a93c] transition-all placeholder:text-[#9d8f7c]"
            />
          </div>

          {/* Totals calculation */}
          <div className="space-y-1.5 py-1 text-[0.88rem] font-['Outfit']">
            <div className="flex justify-between text-[#d4c4b0]">
              <span>Subtotal:</span>
              <span className="text-[#e3e2e8] font-medium font-['JetBrains_Mono']">
                {formatCurrency(subtotal)}
              </span>
            </div>
            {discountRate > 0 && (
              <div className="flex justify-between text-[#ffc665]">
                <span>Desconto VIP ({(discountRate * 100).toFixed(0)}%):</span>
                <span className="font-['JetBrains_Mono'] font-bold">
                  -{formatCurrency(discountValue)}
                </span>
              </div>
            )}
            <div className="flex justify-between font-['Syne'] font-bold text-[#e3e2e8] text-[1.15rem] pt-2 border-t border-[#343439]/40">
              <span>Total Estimado:</span>
              <span className="text-[#ffc665] font-['JetBrains_Mono']">
                {formatCurrency(total)}
              </span>
            </div>
          </div>

          {/* Finalize CTA */}
          <button
            onClick={handleCheckout}
            className="w-full py-3.5 bg-[#ffc665] hover:bg-[#fabc4d] text-[#432c00] font-['JetBrains_Mono'] text-[0.75rem] font-bold uppercase tracking-[0.1em] rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.124 1.524 5.862L0 24l6.332-1.499A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.806 9.806 0 01-5.144-1.462l-.369-.219-3.763.893.925-3.653-.244-.386A9.818 9.818 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
            </svg>
            <span>Finalizar pelo WhatsApp</span>
          </button>

          <div className="flex items-center justify-center gap-4 font-['JetBrains_Mono'] text-[0.62rem] text-[#d4c4b0] uppercase pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-[#ffc665]" /> Confirmação Imediata
            </span>
            <span className="flex items-center gap-1">
              <Lock size={14} className="text-[#ffc665]" /> Atendimento Exclusivo
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
