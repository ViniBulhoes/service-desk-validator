export function validateTicketTitle(title: string) {
  // Apenas validação antiga (sem regra de 5 a 100 caracteres)
  if (!title || title.trim().length === 0) {
    return { isValid: false };
  }
  return { isValid: true };
}
