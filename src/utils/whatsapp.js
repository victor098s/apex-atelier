// =============================================
// UTILITÁRIOS WHATSAPP — Apex Atelier
// Número: 5519982436103
// =============================================

const WHATSAPP_NUMBER = '5519982436103';

/**
 * Abre WhatsApp com mensagem de atendimento direto.
 * Usar em: Fale Conosco, Atendimento, botão flutuante, etc.
 */
export function openDirectSupport() {
  const message = encodeURIComponent('Olá preciso de um atendimento, por gentileza.');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}

/**
 * Gera e abre WhatsApp com mensagem completa do carrinho.
 * Usar em: Finalizar pelo WhatsApp, Solicitar Orçamento do carrinho.
 * @param {Array} items - Lista de itens do carrinho
 * @param {number} total - Valor total já calculado (com desconto)
 * @param {number} subtotal - Subtotal antes do desconto
 * @param {number} discountValue - Valor do desconto
 * @param {string} vehicle - Modelo do veículo informado
 */
export function openCartQuote(items, total, subtotal, discountValue, vehicle) {
  if (!items || items.length === 0) return;

  const services = items.filter((i) => i.type === 'Serviço');
  const products = items.filter((i) => i.type === 'Produto');

  let message = 'Olá! Gostaria de solicitar um orçamento.\n\n';

  if (services.length > 0) {
    message += '🚗 SERVIÇOS:\n';
    services.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      message += `• ${item.name}\n  Quantidade: ${item.quantity} | Valor: ${itemTotal}\n`;
    });
    message += '\n';
  }

  if (products.length > 0) {
    message += '🧴 PRODUTOS:\n';
    products.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      message += `• ${item.name}\n  Quantidade: ${item.quantity} | Valor: ${itemTotal}\n`;
    });
    message += '\n';
  }

  if (discountValue > 0) {
    const subtotalFormatted = subtotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    const discountFormatted = discountValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    message += `Subtotal: ${subtotalFormatted}\nDesconto VIP: -${discountFormatted}\n`;
  }

  const totalFormatted = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  message += `💰 TOTAL DO PEDIDO: ${totalFormatted}\n`;

  if (vehicle && vehicle.trim()) {
    message += `🚙 Veículo: ${vehicle.trim()}\n`;
  }

  message += '\nGostaria de receber mais informações e verificar a disponibilidade para atendimento.';

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

/**
 * Gera mensagem de orçamento via formulário de contato.
 * @param {Object} formData - Dados do formulário
 */
export function openFormQuote(formData) {
  const { name, phone, car, date, services, notes } = formData;

  const servicesString =
    services && services.length > 0 ? services.join(', ') : 'Avaliação Geral';

  let message = `*Solicitação de Orçamento VIP — Apex Atelier*\n\n`;
  message += `*Nome:* ${name}\n`;
  message += `*WhatsApp:* ${phone}\n`;
  message += `*Veículo:* ${car}\n`;
  message += `*Data Preferencial:* ${date || 'A combinar'}\n`;
  message += `*Serviços de Interesse:* ${servicesString}\n`;
  if (notes) {
    message += `*Observações:* ${notes}`;
  }

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}
