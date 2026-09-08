export type InvoiceStatus =
  | 'invoiced'
  | 'not_invoiced'

export interface OperationSummary {
  id: string
  customerName: string

  operationAmount: number
  extraServiceAmount: number
  subcontractorAmount: number

  cashAmount: number
  invoiceAmount: number

  currency: 'TRY' | 'USD' | 'EUR'

  invoiceStatus: InvoiceStatus
}



export interface CurrentOperation {
  id: string
  customerName: string
  operationName: string
  operationType: string
  vehicleType: string
  vehiclePlate: string
  driverName: string
  subcontractor: string
}