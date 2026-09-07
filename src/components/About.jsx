export default function About() {
  return (
    <section id="sobre-nos" className="py-32 bg-[#121317] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Storytelling Column */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
              Manifesto Técnico
            </span>
            <h2 className="font-['Syne'] font-bold text-[#e3e2e8] uppercase leading-tight text-[2rem] md:text-[2.8rem]">
              A física da perfeição visual combinada à arte do detalhe.
            </h2>
            <p className="font-['Outfit'] text-[1.1rem] text-[#d4c4b0] leading-relaxed">
              A <strong className="text-[#e3e2e8] font-semibold">Apex Atelier</strong> foi fundada
              sob a premissa de que carros excepcionais exigem protocolos aeroespaciais. Rejeitamos
              o conceito tradicional de lavagem rápida: nosso espaço opera nos moldes de um
              laboratório de restauração óptica com temperatura, umidade e partículas de ar
              rigorosamente controladas.
            </p>
            <p className="font-['Outfit'] text-[1rem] text-[#d4c4b0] leading-relaxed">
              Utilizamos luzes de inspeção com índice de reprodução de cor CRI 98+ simulando a luz
              do meio-dia no deserto, permitindo visualizar imperfeições microscópicas de até 0,5
              micrômetro no verniz antes de qualquer procedimento de corte térmico.
            </p>

            {/* Technical Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                {
                  icon: '🌡️',
                  title: 'Cura Térmica IR',
                  desc: 'Cabine de ondas curtas para fixação molecular perfeita.',
                },
                {
                  icon: '⚗️',
                  title: 'Química SiN+',
                  desc: 'Formulação com matriz de nanodiamantes sintéticos.',
                },
                {
                  icon: '🪑',
                  title: 'Couro Connolly',
                  desc: 'Condicionamento bio-nutritivo com toque de seda.',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 bg-[#1a1b20] rounded border border-[#343439]/40"
                >
                  <span className="text-[1.4rem]">{feature.icon}</span>
                  <div className="font-['JetBrains_Mono'] text-[0.72rem] text-[#e3e2e8] font-bold uppercase mt-1 tracking-wider">
                    {feature.title}
                  </div>
                  <p className="font-['Outfit'] text-[0.82rem] text-[#d4c4b0] mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Grid Metrics */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {[
              {
                label: 'Tradição & Pesquisa',
                value: '12+ Anos',
                desc: 'Pioneirismo em superfícies cerâmicas no Brasil',
                tag: 'ISO 9001 / CERAMIC PRO MASTER',
              },
              {
                label: 'Projetos de Prestígio',
                value: '+1.500',
                desc: 'Veículos protegidos para clientes e coleções privadas',
                tag: 'PORSCHE • FERRARI • LAMBORGHINI',
              },
              {
                label: 'Satisfação Auditada',
                value: '100%',
                desc: 'Garantia vitalícia de selagem cerâmica mediante revisão',
                tag: 'ZERO INCIDÊNCIA DE SWIRLS',
              },
              {
                label: 'Controle Ambiental',
                value: 'CRI 98+',
                desc: 'Iluminação de espectro solar e cabine de fluxo laminar',
                tag: '0% POEIRA EM SUSPENSÃO',
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="p-6 bg-[#1a1b20] rounded-xl flex flex-col justify-between shadow-lg border border-[#343439]/40 gap-4"
              >
                <div className="font-['JetBrains_Mono'] text-[0.72rem] uppercase tracking-[0.15em] text-[#ffc665]">
                  {metric.label}
                </div>
                <div>
                  <div className="font-['JetBrains_Mono'] font-bold text-[#e3e2e8] text-[2rem] leading-none tracking-tight">
                    {metric.value}
                  </div>
                  <div className="font-['Outfit'] text-[0.82rem] text-[#d4c4b0] mt-1">{metric.desc}</div>
                </div>
                <span className="font-['JetBrains_Mono'] text-[0.65rem] text-[#ffc665] tracking-wider">
                  {metric.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
