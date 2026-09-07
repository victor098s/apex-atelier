/**
 * Formata um valor numérico como moeda brasileira (R$)
 * @param {number} value
 * @returns {string} ex: "R$ 1.250,00"
 */
export function formatCurrency(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
