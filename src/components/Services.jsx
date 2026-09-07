import { useState } from 'react';
import { services, serviceCategories } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-32 bg-[#0d0e12] relative">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Menu de Intervenções
            </span>
            <h2 className="font-['Syne'] font-bold text-[#e3e2e8] uppercase mt-1 text-[2rem] md:text-[2.8rem]">
              Nossos Serviços Especializados
            </h2>
            <p className="font-['Outfit'] text-[1rem] text-[#d4c4b0] mt-1 max-w-xl">
              Selecione tratamentos individuais ou monte seu plano personalizado de preservação
              para agendamento direto via Concierge.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.1em] transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#ffc665] text-[#432c00] font-bold'
                    : 'bg-[#1f1f24] hover:bg-[#292a2e] text-[#e3e2e8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
