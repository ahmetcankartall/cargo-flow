export type TransportRequestStatus =
  | 'pending'
  | 'approved'
  | 'assigned'
  | 'in_transit'
  | 'delivered'
  | 'cancelled'

export type CargoType =
  | 'general'
  | 'food'
  | 'chemical'
  | 'electronics'
  | 'other'

export interface TransportRequest {
  id: string
  customerName: string
  pickupLocation: string
  deliveryLocation: string
  cargoType: CargoType
  weight: number
  pickupDate: string
  notes?: string
  status: TransportRequestStatus
  createdAt: string
}