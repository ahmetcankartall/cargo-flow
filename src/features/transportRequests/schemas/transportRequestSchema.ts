import { z } from 'zod'

export const transportRequestSchema = z.object({
  customerName: z
    .string()
    .min(2, 'Müşteri adı en az 2 karakter olmalıdır.'),

  pickupLocation: z
    .string()
    .min(2, 'Alış noktası zorunludur.'),

  deliveryLocation: z
    .string()
    .min(2, 'Teslimat noktası zorunludur.'),

  cargoType: z.enum([
    'general',
    'food',
    'chemical',
    'electronics',
    'other',
  ]),

  weight: z
    .number()
    .positive('Ağırlık 0’dan büyük olmalıdır.'),

  pickupDate: z
    .string()
    .min(1, 'Alış tarihi zorunludur.'),

  notes: z
    .string()
    .optional(),
})

export type TransportRequestFormData = z.infer<
  typeof transportRequestSchema
>