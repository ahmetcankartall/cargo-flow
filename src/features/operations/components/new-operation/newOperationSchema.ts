import { z } from 'zod'

const passengerSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  gender: z.string(),
  nationality: z.string(),
  identityNumber: z.string(),
  voucherType: z.string(),
  passengerType: z.string(),
  description: z.string(),
  stationNo: z.string(),
})
const extraServiceSchema = z.object({
  serviceName: z.string(),
  price: z.string(),
  currency: z.string(),
  supplier: z.string(),
  costPrice: z.string(),
  costCurrency: z.string(),
})

export const newOperationSchema = z.object({
  customer: z.string().min(1, 'Müşteri seçilmelidir'),
  operationType: z.string().min(1, 'OP türü seçilmelidir'),
  operationName: z.string().min(1, 'Operasyon adı girilmelidir'),
  reference: z.string(),
  operationCode: z.string(),
  operationGroup: z.string(),

  startDate: z.string().min(1, 'Başlangıç tarihi seçilmelidir'),
  startTime: z.string().min(1, 'Başlangıç saati seçilmelidir'),
  startLocation: z.string().min(1, 'Başlangıç yeri seçilmelidir'),
  stop: z.string(),
  endLocation: z.string().min(1, 'Bitiş yeri seçilmelidir'),
  endDate: z.string().min(1, 'Bitiş tarihi seçilmelidir'),
  endTime: z.string().min(1, 'Bitiş saati seçilmelidir'),

  passengers: z.array(passengerSchema),

  mode: z.enum(['vehicle', 'subcontractor']),
  vehicleType: z.string(),
  vehicleId: z.string(),
  vehiclePlate: z.string(),
  driverName: z.string(),
  driverPayment: z.string(),
  driverPhone: z.string(),
  subcontractorId: z.string(),
  subcontractorPrice: z.string(),
  currency: z.string(),

  price: z.string(),
  priceCurrency: z.string(),
  paymentType: z.string(),

  description: z.string(),
  driverNote: z.string(),
  meetingPoint: z.string(),

  flightTime: z.string(),
  flightCode: z.string(),
  flightDirection: z.string(),
  flightTerminal: z.string(),

  greetingStaff: z.string(),
  guideName: z.string(),
  guidePhone: z.string(),

  commissionAccount: z.string(),
  commissionPrice: z.string(),
  commissionCurrency: z.string(),
  extraServices: z.array(extraServiceSchema),
})

export type NewOperationFormData = z.infer<typeof newOperationSchema>