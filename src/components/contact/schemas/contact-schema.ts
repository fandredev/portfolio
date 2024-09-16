import { z } from 'zod';

export const formContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email('Por favor, insira um email válido'),
  message: z.string().min(1),
});

export type ContactSchema = z.infer<typeof formContactSchema>;
