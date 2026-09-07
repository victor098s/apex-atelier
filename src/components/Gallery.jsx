import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import GalleryModal from './GalleryModal';

const galleryItems = [
  {
    id: 1,
    title: 'Macro Reflexão de Verniz Negro — Ferrari 488',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVdGb_aFHfMA6_1sVHytYw8aPHLXIV98jKrEzX-cktZR0b86vYxkAvEt_1G5UW12S1FxKDQWARkY95Lewwjpu9rMKFx4YhP123dISyP_GHZhx_X3NJoor1G3TRdtBRJTExxOX_hnqK625zNDUIHBdO4jF8dAG07IDGXGlTzwqtUiaUfPp2SEtTMmIla2gb1ML5AKlwUOiJTXJYbrn-oRdLtL6mj6btFKn4vZs1QPmdAxML32mnfSfR',
    tag: 'Polimento Técnico',
    label: 'Profundidade Óptica 99.8%',
    tall: true,
  },
  {
    id: 2,
    title: 'Hidrofobia Cerâmica — Gotículas Perfeitas',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvET0EfEqodA4rZPng3rutDl-AQahp99dPYRQEU5wn8BAskIYuosWr2UTa7l9KZ2-DKbb9MV1d93mNHA0atnMPdB67FaxERBXNkTIUP5kWmmZhcuC7aUWN1SXDOfAcy8Ch5SOukZzmHnSVyQ8aMTie4kFPtR6G7KQUJ1jnHKR04c0P7IyOhpY0_c_O9IyjXM-L9iVmKymYHknkfMrRoGNRAO20-7rSxITLx9xi83PkBvxFgu6bfkdU',
    tag: 'Vitrificação 10H',
    label: 'Ângulo de Contato 118°',
    tall: false,
  },
  {
    id: 3,
    title: 'Restauração de Couro Connolly Italiano',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2OJ_ibNXttv3gv4r9NgbVuna8luLSqoHRJ7LAJwBmfELOCU2Dvgd2b8ZX61KfIZzFLl4uuyWKkQR6Gd0OKmWQAV5FJUjeysOzcs6KaZOULTqdq5dvNz6WiPOoITlCgBTXfQh9VZX4vuLn3jokLysCt2Yo4A2octBDTKsJ1axza-IxCl9ToRbZNgws5LOoe_01WxNofU3Ff463QoGYT7UBZQicwTEcAjBCU296BV5RzE_IzXoSBnd',
    tag: 'Detailing Interno',
    label: 'Higienização Orgânica',
    tall: false,
  },
  {
    id: 4,
    title: 'Aplicação de PPF Invisível — Lamborghini Aventador SVJ',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxANN7SuAxlGb29kgTso_bl1B85x5i03yAE-M1vdajWjXGBegQGDoOIGF1wImoLPjReVAVQU5hbkruIoUhr6bMPmMeh6pXL6rXmaSefrGx6qKN1toYHAGvq5_r17-aRNX5WkCmA6wXKRpO5AnmPsRfQe_MCuYew_vkgPoRheW6B4GPc3I9Izy54D1PhJRM2WQJigTrRKX5T4j7g-3ly7hZjB89PSTOyl7BVE-muI_mlVaNrtPn4Il2',
    tag: 'Proteção de Monocoque',
    label: 'Instalação Invisível XPEL',
    tall: true,
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <section id="galeria" className="py-32 bg-[#0d0e12] relative">
        <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
                Evidências Macroscópicas
              </span>
              <h2 className="font-['Syne'] font-bold text-[#e3e2e8] uppercase mt-1 text-[2rem] md:text-[2.8rem]">
                Galeria de Transformações
              </h2>
              <p className="font-['Outfit'] text-[1rem] text-[#d4c4b0] mt-1">
                Clique nas imagens para inspecionar os detalhes de reflexão, nivelamento e hidrofobia.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Lupa 50X', 'Espectro CRI 98', 'Inspeção 360°'].map((tag, i) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded font-['JetBrains_Mono'] text-[0.65rem] ${
                    i === 2
                      ? 'bg-[#1f1f24] text-[#ffc665]'
                      : 'bg-[#1f1f24] text-[#d4c4b0]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Item 1 — Tall */}
            <GalleryItem item={galleryItems[0]} onClick={() => setSelectedItem(galleryItems[0])} className="h-[480px]" />

            {/* Middle column — 2 standard */}
            <div className="flex flex-col gap-4">
              <GalleryItem item={galleryItems[1]} onClick={() => setSelectedItem(galleryItems[1])} className="h-[228px]" />
              <GalleryItem item={galleryItems[2]} onClick={() => setSelectedItem(galleryItems[2])} className="h-[228px]" />
            </div>

            {/* Item 4 — Tall */}
            <GalleryItem item={galleryItems[3]} onClick={() => setSelectedItem(galleryItems[3])} className="h-[480px]" />
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}

function GalleryItem({ item, onClick, className }) {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-lg ${className}`}
      onClick={onClick}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div>
          <span className="font-['JetBrains_Mono'] text-[0.65rem] text-[#ffc665] uppercase tracking-wider">
            {item.tag}
          </span>
          <div className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.1rem]">{item.label}</div>
        </div>
        <ZoomIn size={20} className="text-[#ffc665] shrink-0" />
      </div>
    </div>
  );
}
