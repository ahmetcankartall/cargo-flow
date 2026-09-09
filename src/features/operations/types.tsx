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
  status: string
  date: string
  time: string

  customerName: string
  operationType: string
  operationName: string
  passengerCount: number
  mainPassenger: string

  operationSerialNo: string
  operationCode: string
  operationGroup: string

  startLocation: string
  stop: string
  endLocation: string
  endCity: string

  endDate: string
  endTime: string

  vehicleType: string
  vehiclePlate: string
  driverName: string
  driverNote: string
  subcontractor: string

  flightCode: string
  flightLocation: string
  flightTime: string
  flightTerminal: string

  guide: string
  greetingStaff: string
  meetingPoint: string

  description: string
  notifications: string
  extraServices: string

  price: number
}