import type { TransportRequest } from './types'

export const mockTransportRequests: TransportRequest[] = [
  {
    id: 'TR-1001',
    customerName: 'ABC Lojistik',
    pickupLocation: 'İzmir',
    deliveryLocation: 'İstanbul',
    cargoType: 'general',
    weight: 1500,
    pickupDate: '2026-09-10',
    notes: 'Standart taşıma',
    status: 'pending',
    createdAt: '2026-09-06',
  },
  {
    id: 'TR-1002',
    customerName: 'XYZ Gıda',
    pickupLocation: 'Manisa',
    deliveryLocation: 'Ankara',
    cargoType: 'food',
    weight: 2500,
    pickupDate: '2026-09-11',
    notes: 'Soğuk zincir taşıması',
    status: 'approved',
    createdAt: '2026-09-05',
  },
  {
    id: 'TR-1003',
    customerName: 'Tekno A.Ş.',
    pickupLocation: 'İstanbul',
    deliveryLocation: 'Bursa',
    cargoType: 'electronics',
    weight: 800,
    pickupDate: '2026-09-12',
    status: 'assigned',
    createdAt: '2026-09-05',
  },
]