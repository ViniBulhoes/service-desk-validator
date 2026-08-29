import { validateTicketTitle } from './validator';

describe('Validação do Título', () => {
  test('Deve rejeitar título vazio', () => {
    expect(validateTicketTitle('').isValid).toBe(false);
  });

  test('Deve rejeitar título menor que 5 caracteres', () => {
    expect(validateTicketTitle('Erro').isValid).toBe(false);
  });

  test('Deve rejeitar título maior que 100 caracteres', () => {
    expect(validateTicketTitle('A'.repeat(101)).isValid).toBe(false);
  });

  test('Deve aceitar título válido', () => {
    expect(validateTicketTitle('Chamado Válido').isValid).toBe(true);
  });
});
