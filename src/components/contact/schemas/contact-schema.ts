import { z } from 'zod';

export const formContactSchema = z.object({
  name: z.string(),
  email: z.string().email('Por favor, insira seu melhor email'),
});

export type ContactSchema = z.infer<typeof formContactSchema>;
