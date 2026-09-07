// =============================================
// SERVIÇOS — Apex Atelier
// =============================================

import lavagemImg from '../assets/pexels-karola-g-4870702.jpg';

export const services = [
  {
    id: 'lavagem-premium',
    name: 'Lavagem Detalhada Premium',
    category: 'pintura',
    tag: 'Detailing Essencial',
    duration: '~2h30',
    description:
      'Espuma snow foam de pH neutro biodegradável, desparafinação suave, descontaminação ferrosa de caixas de roda e selagem de compostos de pneu com acabamento acetinado.',
    features: [
      'Dois baldes com filtro grit-guard',
      'Secagem por ar aquecido filtrado',
      'Condicionamento de borrachas',
    ],
    price: 180,
    image: lavagemImg,
    imageAlt: 'Lavagem técnica detalhada com snow foam de pH neutro',
    featured: false,
  },
  {
    id: 'polimento-tecnico',
    name: 'Polimento Técnico Multi-Etapas',
    category: 'pintura',
    tag: 'Correção Óptica',
    duration: '~8h00',
    description:
      'Nivelamento milimétrico do verniz, remoção de 95%+ de micro-riscos, teias de aranha (swirls) e oxidação, restaurando o efeito espelhado puro com brilho incomparável.',
    features: [
      'Mapeamento ultrassônico do verniz',
      'Máquinas roto-orbitais Rupes BigFoot',
      'Refino com pasta diamantada',
    ],
    price: 680,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAVdGb_aFHfMA6_1sVHytYw8aPHLXIV98jKrEzX-cktZR0b86vYxkAvEt_1G5UW12S1FxKDQWARkY95Lewwjpu9rMKFx4YhP123dISyP_GHZhx_X3NJoor1G3TRdtBRJTExxOX_hnqK625zNDUIHBdO4jF8dAG07IDGXGlTzwqtUiaUfPp2SEtTMmIla2gb1ML5AKlwUOiJTXJYbrn-oRdLtL6mj6btFKn4vZs1QPmdAxML32mnfSfR',
    imageAlt: 'Polimento técnico com politriz em verniz escuro espelhado',
    featured: false,
  },
  {
    id: 'vitrificacao-ceramica',
    name: 'Vitrificação Cerâmica 10H',
    category: 'exclusivo',
    tag: 'Proteção Cerâmica',
    duration: '~24h00',
    description:
      'Blindagem química de dureza 10H Mohs com tecnologia de nanodiamantes. Hidrorrepelência extrema, toque aveludado e proteção UV contra dejetos e chuva ácida por até 3 anos.',
    features: [
      'Ângulo de contato de água > 115°',
      'Cura via infravermelho de 3.2kW',
      'Certificado e garantia auditada',
    ],
    price: 1250,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvET0EfEqodA4rZPng3rutDl-AQahp99dPYRQEU5wn8BAskIYuosWr2UTa7l9KZ2-DKbb9MV1d93mNHA0atnMPdB67FaxERBXNkTIUP5kWmmZhcuC7aUWN1SXDOfAcy8Ch5SOukZzmHnSVyQ8aMTie4kFPtR6G7KQUJ1jnHKR04c0P7IyOhpY0_c_O9IyjXM-L9iVmKymYHknkfMrRoGNRAO20-7rSxITLx9xi83PkBvxFgu6bfkdU',
    imageAlt: 'Gotas de água esferificadas perfeitas sob vitrificação cerâmica 10H',
    featured: true,
    featuredLabel: 'Destaque Atelier',
  },
  {
    id: 'detailing-interno',
    name: 'Detailing Interno & Couro',
    category: 'interior',
    tag: 'Habitáculo Couture',
    duration: '~4h00',
    description:
      'Higienização térmica com vapor superaquecido 160°C a seco, hidratação profunda de couro nobre com bálsamos orgânicos alemães e ozonização antiviral certificada.',
    features: [
      'Limpeza de alcântara sem felpas',
      'Proteção anti-ressecamento UV',
      'Neutralização biológica de odores',
    ],
    price: 380,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2OJ_ibNXttv3gv4r9NgbVuna8luLSqoHRJ7LAJwBmfELOCU2Dvgd2b8ZX61KfIZzFLl4uuyWKkQR6Gd0OKmWQAV5FJUjeysOzcs6KaZOULTqdq5dvNz6WiPOoITlCgBTXfQh9VZX4vuLn3jokLysCt2Yo4A2octBDTKsJ1axza-IxCl9ToRbZNgws5LOoe_01WxNofU3Ff463QoGYT7UBZQicwTEcAjBCU296BV5RzE_IzXoSBnd',
    imageAlt: 'Interior de luxo com couro nobre restaurado e hidratado',
    featured: false,
  },
  {
    id: 'ppf-frontal',
    name: 'PPF Frontal (Self-Healing)',
    category: 'exclusivo',
    tag: 'Blindagem de Verniz',
    duration: '~48h00',
    description:
      'Película de poliuretano termoplástico de padrão aeroespacial que absorve impactos de pedras na estrada e arranhões com autorregeneração instantânea sob calor.',
    features: [
      'Corte digital plotter sob medida DAP',
      'Cobertura de capô, para-choque e faróis',
      'Garantia anti-amarelamento 10 anos',
    ],
    price: 3800,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxANN7SuAxlGb29kgTso_bl1B85x5i03yAE-M1vdajWjXGBegQGDoOIGF1wImoLPjReVAVQU5hbkruIoUhr6bMPmMeh6pXL6rXmaSefrGx6qKN1toYHAGvq5_r17-aRNX5WkCmA6wXKRpO5AnmPsRfQe_MCuYew_vkgPoRheW6B4GPc3I9Izy54D1PhJRM2WQJigTrRKX5T4j7g-3ly7hZjB89PSTOyl7BVE-muI_mlVaNrtPn4Il2',
    imageAlt: 'Aplicação técnica de película de proteção de pintura PPF frontal',
    featured: false,
  },
  {
    id: 'cristalizacao-vidros',
    name: 'Cristalização de Vidros',
    category: 'pintura',
    tag: 'Visibilidade Máxima',
    duration: '~2h00',
    description:
      'Tratamento nanotecnológico com óxido de cério para remoção de chuva ácida seguido de selante que repele água em chuva pesada acima de 60 km/h sem palhetas.',
    features: [
      'Visibilidade noturna aprimorada',
      'Reduz fadiga visual do motorista',
      'Durabilidade de até 12 meses',
    ],
    price: 420,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACWZFOwYRdfSU-8SgN3j7fVJjAmPfMlrLwoWzII8Bz1T-37L5p3ySP6o3XybviULcs51fuMOc5AVEUs7a-dVGSy6QMGd3ix8MsDGIB6x1mVzSBy4-rbMkd7hoL-WDMAr8GLZsyKJwsiYHujJtjpRtk_6f1B2JWwCzbK2-MGTOzoROtwXjSFzv_nLKizULnbqEavc_4OB643qTu9vy7vR_pvoLtwZPmEFtKCmGJuF2Fsy-NqdC0pcGD',
    imageAlt: 'Cristalização hidrofóbica e repelência de água em para-brisa',
    featured: false,
  },
];

export const serviceCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'pintura', label: 'Proteção & Pintura' },
  { id: 'interior', label: 'Higienização & Interior' },
  { id: 'exclusivo', label: 'Tratamento Exclusivo' },
];
