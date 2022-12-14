import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should NOT be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('1234')).toThrow();
  });

  it('should NOT be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('x'.repeat(241))).toThrow();
  });
});
