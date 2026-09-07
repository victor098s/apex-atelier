import { Truck } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Products() {
  return (
    <section id="produtos" className="py-32 bg-[#121317] relative">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Linha de Cuidados Pessoais
            </span>
            <h2 className="font-['Syne'] font-bold text-[#e3e2e8] uppercase mt-1 text-[2rem] md:text-[2.8rem]">
              Boutique de Insumos Premium
            </h2>
            <p className="font-['Outfit'] text-[1rem] text-[#d4c4b0] mt-1 max-w-xl">
              As mesmas formulações químicas exclusivas utilizadas diariamente no nosso ateliê
              para a manutenção da sua garagem.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1f1f24] rounded border border-[#343439]/40 shrink-0">
            <Truck size={18} className="text-[#ffc665]" />
            <span className="font-['JetBrains_Mono'] text-[0.72rem] text-[#e3e2e8] uppercase tracking-wider">
              Pronta entrega para todo o Brasil
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
