import type { OperationSummary } from './types'
import type { CurrentOperation } from './types'

export const mockOperationSummaries: OperationSummary[] = [
  {
    id: 'OP-1001',
    customerName: 'ABC Lojistik',
    operationAmount: 32000,
    extraServiceAmount: 0,
    subcontractorAmount: 8500,
    cashAmount: 30000,
    invoiceAmount: 2000,
    currency: 'TRY',
    invoiceStatus: 'invoiced',
  },

  {
    id: 'OP-1002',
    customerName: 'XYZ Gıda',
    operationAmount: 24500,
    extraServiceAmount: 1500,
    subcontractorAmount: 6000,
    cashAmount: 20000,
    invoiceAmount: 6000,
    currency: 'TRY',
    invoiceStatus: 'invoiced',
  },

  {
    id: 'OP-1003',
    customerName: 'Tekno A.Ş.',
    operationAmount: 18950,
    extraServiceAmount: 0,
    subcontractorAmount: 4500,
    cashAmount: 17950,
    invoiceAmount: 1000,
    currency: 'TRY',
    invoiceStatus: 'not_invoiced',
  },

  {
    id: 'OP-1004',
    customerName: 'Delta Otomotiv',
    operationAmount: 6000,
    extraServiceAmount: 0,
    subcontractorAmount: 1800,
    cashAmount: 6000,
    invoiceAmount: 0,
    currency: 'TRY',
    invoiceStatus: 'not_invoiced',
  },
]


export const currentOperations: CurrentOperation[] = [
  {
    id: 'OP-001',
    customerName: 'TAV Havalimanları',
    operationName: 'Adnan Menderes - Çeşme',
    operationType: 'Transfer',
    vehicleType: 'Minibüs',
    vehiclePlate: '35 ABC 123',
    driverName: 'Mehmet Yılmaz',
    subcontractor: 'İzmir VIP Turizm',
  },


  {
  id: 'OP-002',
  customerName: 'XYZ Gıda',
  operationName: 'İzmir - İstanbul',
  operationType: 'Transfer',
  vehicleType: 'Kamyon',
  vehiclePlate: '35 XYZ 456',
  driverName: 'Ahmet Demir',
  subcontractor: 'İzmir VIP Turizm',
},
]

export const currentOperationSummary = {
  passengers: 124,
  cancelled: 5,
  requests: 89,
  reservations: 45,
  operations: 67,
  completed: 112,
  types: 30,
  noShow: 3,
}