import { useState } from 'react';
import { MapPin, Clock, Truck, Send } from 'lucide-react';
import { openFormQuote } from '../utils/whatsapp';

const serviceOptions = [
  { value: 'Vitrificação Cerâmica 10H', label: 'Vitrificação Cerâmica 10H' },
  { value: 'PPF Self-Healing', label: 'PPF (Frontal ou Full)' },
  { value: 'Polimento Multi-Etapas', label: 'Polimento Técnico Multi-Etapas' },
  { value: 'Detailing Interno', label: 'Detailing Interno & Couro' },
  { value: 'Lavagem Premium', label: 'Lavagem Detalhada Premium' },
  { value: 'Cristalização de Vidros', label: 'Cristalização de Vidros' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    car: '',
    date: '',
    notes: '',
    services: [],
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (value) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openFormQuote(form);
  };

  const inputClass =
    "h-12 px-4 bg-[#1f1f24] text-[#e3e2e8] rounded font-['Outfit'] text-[1rem] outline-none focus:bg-[#292a2e] focus:ring-1 focus:ring-[#e5a93c] transition-all w-full placeholder:text-[#9d8f7c]";

  return (
    <section id="contato" className="py-32 bg-[#0d0e12] relative">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#1a1b20] p-8 md:p-12 rounded-2xl shadow-2xl border border-[#343439]/30">
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Protocolo de Agendamento
            </span>
            <h2 className="font-['Syne'] font-bold text-[#e3e2e8] uppercase mt-1 mb-1 text-[2rem] md:text-[2.5rem]">
              Solicitar Orçamento VIP
            </h2>
            <p className="font-['Outfit'] text-[1rem] text-[#d4c4b0] mb-8">
              Preencha os dados do seu veículo para receber uma proposta técnica sob medida e
              horários prioritários com nosso Master Concierge.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['JetBrains_Mono'] text-[0.65rem] uppercase text-[#e3e2e8] tracking-wider">
                    Nome Completo
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ex: Roberto Silveira"
                    required
                    type="text"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['JetBrains_Mono'] text-[0.65rem] uppercase text-[#e3e2e8] tracking-wider">
                    WhatsApp / Telefone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(19) 99999-9999"
                    required
                    type="tel"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['JetBrains_Mono'] text-[0.65rem] uppercase text-[#e3e2e8] tracking-wider">
                    Veículo &amp; Ano
                  </label>
                  <input
                    name="car"
                    value={form.car}
                    onChange={handleChange}
                    placeholder="Ex: Porsche 911 Turbo S 2023"
                    required
                    type="text"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['JetBrains_Mono'] text-[0.65rem] uppercase text-[#e3e2e8] tracking-wider">
                    Data Preferencial
                  </label>
                  <input
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    type="date"
                    className={`${inputClass} [color-scheme:dark]`}
                  />
                </div>
              </div>

              {/* Service Checkboxes */}
              <div className="flex flex-col gap-2">
                <label className="font-['JetBrains_Mono'] text-[0.65rem] uppercase text-[#e3e2e8] tracking-wider">
                  Serviços Desejados
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-3 p-3 bg-[#1f1f24] rounded cursor-pointer hover:bg-[#292a2e] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={form.services.includes(opt.value)}
                        onChange={() => handleCheckbox(opt.value)}
                        className="w-4 h-4 accent-[#e5a93c]"
                      />
                      <span className="font-['Outfit'] text-[0.88rem] text-[#e3e2e8]">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['JetBrains_Mono'] text-[0.65rem] uppercase text-[#e3e2e8] tracking-wider">
                  Observações ou Estado da Pintura
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Conte-nos se o carro possui repintura, marcas de estrada ou se necessita do serviço de leva & traz em prancha fechada..."
                  rows={3}
                  className="p-3 bg-[#1f1f24] text-[#e3e2e8] rounded font-['Outfit'] text-[1rem] outline-none focus:bg-[#292a2e] focus:ring-1 focus:ring-[#e5a93c] transition-all resize-none w-full placeholder:text-[#9d8f7c]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#ffc665] hover:bg-[#fabc4d] text-[#432c00] font-['JetBrains_Mono'] text-[0.75rem] font-bold uppercase tracking-[0.1em] rounded shadow-[0_8px_30px_rgba(229,169,60,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                Solicitar Orçamento VIP via WhatsApp
              </button>

              <p className="font-['JetBrains_Mono'] text-center text-[#d4c4b0] uppercase text-[0.62rem] tracking-wider">
                Retorno médio de 15 minutos em horário comercial • Sigilo absoluto assegurado
              </p>
            </form>
          </div>

          {/* Location & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#1a1b20] p-8 rounded-2xl shadow-xl flex flex-col gap-5 border border-[#343439]/30">
              <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
                Showroom &amp; Instalações
              </span>
              <h3 className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.5rem]">
                Av. Europa, Jardins
              </h3>
              <p className="font-['Outfit'] text-[1rem] text-[#d4c4b0]">
                Situado no coração do polo de hipercarros da América Latina. Equipado com sala VIP
                para espera com cafés especiais, bar exclusivo e monitores ao vivo da cabine de cura.
              </p>

              <div className="flex flex-col gap-4 font-['Outfit'] text-[0.9rem]">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#ffc665] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#e3e2e8] block">Endereço Principal:</strong>
                    <span className="text-[#d4c4b0]">Av. Europa, 1280 — Jardins, São Paulo - SP</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[#ffc665] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#e3e2e8] block">Horário de Operação:</strong>
                    <span className="text-[#d4c4b0]">
                      Segunda a Sexta: 08h às 19h | Sábados: 09h às 15h
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck size={20} className="text-[#ffc665] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#e3e2e8] block">Apex Concierge Transport:</strong>
                    <span className="text-[#d4c4b0]">
                      Serviço de busca e entrega com caminhão plataforma 100% fechado e seguro total.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Map */}
            <div
              className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl bg-[#292a2e] border border-[#343439]/40"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsuno4l9aiLKseoD7fLZ0BpQfV3xxT3A3Kr3-i0fWpSr_cZJYEuO3CcCf4l9jsFZE_eK6vgjbfJL8-xElgSow0tZNyiU10SvREuiyB_9OgbLTQvJ-PMSlKjsgKw9r1B7oI5deeczJCCrIvkcE02XeSzhgtNnlR8oEGChLYs0PdEW6i6qZDwcZAjj_23okdsIJaFuZ9-TOjAFqt6URkk6rhYz8ZhWtc_Kwu3h2DAwgsppDKzXo-WiHf')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#121317]/60 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#ffc665] text-[#432c00] flex items-center justify-center shadow-2xl mb-2 animate-bounce">
                  <MapPin size={22} />
                </div>
                <span className="font-['Syne'] font-bold text-[#e3e2e8] text-[1.1rem]">
                  Apex Atelier Showroom
                </span>
                <span className="font-['JetBrains_Mono'] text-[0.72rem] text-[#ffc665] mt-1">
                  Av. Europa, 1280 • Jardins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
