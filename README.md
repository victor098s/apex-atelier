# Apex Atelier — Estética Automotiva Premium

Site institucional e catálogo e-commerce para a **Apex Atelier**, atelier de estética automotiva de alto padrão voltado a veículos esportivos, clássicos e de luxo.

O projeto foi construído em **React** com foco em alta fidelidade ao protótipo visual, identidade visual escura (*dark luxury*) e integração direta com WhatsApp para orçamentos e agendamentos personalizados.

---

## ✨ Funcionalidades Principais

- **Carrossel Hero Interativo**: Apresentação de modelos esportivos e clássicos (Nissan Skyline GT-R, Mercedes AMG, Toyota GT86, Opala SS, Karmann Ghia, Impala 1964) com troca automática e por seleção manual.
- **Catálogo de Serviços Detalhados**: Apresentação dos serviços exclusivos com fotos em alta resolução, tempo de execução, garantias e diferenciais de processo.
- **Loja Exclusiva de Produtos**: Vitrine de produtos de detalhamento automotivo premium com opção de adicionar diretamente ao carrinho.
- **Carrinho Lateral Completo (Cart Drawer)**:
  - Adição/remoção e controle de quantidade de itens.
  - Campo para informar o modelo do veículo do cliente.
  - Cálculo de subtotal e total estimado.
  - Integração via WhatsApp gerando mensagem formatada e detalhada de orçamento com 1 clique.
- **Modal de Agendamento Rápido**: Agendamento com seleção de serviço, data e veículo com envio formatado para o WhatsApp de atendimento.
- **Seções Institucionais**:
  - Diferenciais e Filosofia de Trabalho da oficina.
  - Perguntas Frequentes (FAQ) interativo em estilo accordion.
  - Avaliações e depoimentos de clientes.
  - Rodapé com dados de contato, horário e links diretos.
- **Notificações Toast**: Feedback ao usuário em todas as ações através do `sonner`.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca JavaScript para interfaces reativas.
- **[Vite 8](https://vite.dev/)**: Ferramenta de build e desenvolvimento ultrarrápido com Hot Module Replacement (HMR).
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de estilização utilitária de última geração.
- **[Lucide React](https://lucide.dev/)**: Conjunto moderno de ícones vetoriais.
- **[Sonner](https://sonner.emilkowal.ski/)**: Sistema elegante de notificações toast.
- **Fontes do Design System**:
  - `Syne`: Tipografia para títulos de impacto e requinte.
  - `Outfit`: Tipografia para textos corridos, cartões e leitura fluida.
  - `JetBrains Mono`: Tipografia técnica para preços, metadados e tags.

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos
- Ter o **[Node.js](https://nodejs.org/)** instalado (versão 18 ou superior recomendada).
- Gerenciador de pacotes `npm`, `yarn` ou `pnpm`.

### 1. Clonar ou Acessar a Pasta do Projeto
Abra o terminal no diretório onde o projeto está localizado:
```bash
cd apex-atelier
```

### 2. Instalar as Dependências
Instale todos os pacotes necessários executando:
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
Inicie o ambiente de desenvolvimento local:
```bash
npm run dev
```
O terminal exibirá a URL local (geralmente `http://localhost:5173`). Abra essa URL no seu navegador.

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor Vite em modo de desenvolvimento com hot-reload |
| `npm run build` | Compila os arquivos para produção na pasta `dist/` |
| `npm run preview` | Roda uma prévia local da versão de produção gerada em `dist/` |
| `npm run lint` | Executa análise estática de código com Oxlint |

---

## 📁 Estrutura de Pastas

```text
apex-atelier/
├── public/                 # Favicon e assets públicos
├── src/
│   ├── assets/             # Imagens originais dos veículos e serviços
│   ├── components/         # Componentes modulares da interface
│   │   ├── CartDrawer.jsx      # Drawer lateral do carrinho de compras
│   │   ├── FAQ.jsx             # Accordion de perguntas frequentes
│   │   ├── Footer.jsx          # Rodapé com contato e links
│   │   ├── Header.jsx          # Barra de navegação com contador do carrinho
│   │   ├── Hero.jsx            # Carrossel principal de apresentação
│   │   ├── Philosophy.jsx      # Seção sobre a oficina e diferenciais
│   │   ├── Products.jsx        # Catálogo da loja de produtos
│   │   ├── ScheduleModal.jsx   # Modal de agendamento de serviços
│   │   ├── Services.jsx        # Seção dos serviços de detalhamento
│   │   └── Testimonials.jsx    # Depoimentos de clientes
│   ├── context/
│   │   └── CartContext.jsx     # Gerenciamento de estado global do carrinho
│   ├── data/
│   │   ├── faq.js              # Perguntas e respostas do FAQ
│   │   ├── products.js         # Dados dos produtos à venda
│   │   ├── reviews.js          # Depoimentos cadastrados
│   │   └── services.js         # Dados e imagens dos serviços
│   ├── utils/
│   │   ├── formatCurrency.js   # Formatador para moeda brasileira (BRL)
│   │   └── whatsapp.js         # Gerador de links e mensagens do WhatsApp
│   ├── App.jsx             # Componente raiz da aplicação
│   ├── index.css           # Configurações globais de CSS e tipografia
│   └── main.jsx            # Ponto de entrada do React
├── index.html              # HTML base com importação das fontes Google
├── package.json            # Dependências e scripts do projeto
├── vite.config.js          # Configuração do Vite e plugins
└── README.md               # Documentação do projeto
```
