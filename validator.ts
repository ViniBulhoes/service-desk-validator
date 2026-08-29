export function validateTicketTitle(title: string) {
  const trimmed = (title || '').trim();

  if (trimmed.length === 0) {
    return { isValid: false, error: 'Título vazio' };
  }
  if (trimmed.length < 5) {
    return { isValid: false, error: 'Mínimo de 5 caracteres' };
  }
  if (trimmed.length > 100) {
    return { isValid: false, error: 'Máximo de 100 caracteres' };
  }

  return { isValid: true };
}
