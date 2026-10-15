import { describe, expect, it } from 'vitest';
import { portfolioContact } from '@/lib/portfolio-contact';

describe('Portfolio contact destinations', () => {
  it('opens WhatsApp for 08560556628 using the Indonesian country code', () => {
    expect(portfolioContact.whatsapp).toBe('https://wa.me/628560556628');
  });
  it('addresses email to Putri', () => {
    expect(portfolioContact.mailto).toBe('mailto:putrisintaanggraeni253@gmail.com');
  });
});