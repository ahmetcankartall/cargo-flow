import type { CurrentOperation, OperationSummary } from './types'

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
    status: 'Planlandı',
    date: '08.09.2026',
    time: '09:30',

    customerName: 'TAV Havalimanları',
    operationType: 'Transfer',
    operationName: 'Adnan Menderes - Çeşme',
    passengerCount: 4,
    mainPassenger: 'Mehmet Kaya',

    operationSerialNo: 'OP-2026-0001',
    operationCode: 'TRF-001',
    operationGroup: 'Havalimanı Transfer',

    startLocation: 'İzmir Adnan Menderes Havalimanı',
    stop: 'Urla',
    endLocation: 'Çeşme Marina',
    endCity: 'İzmir',

    endDate: '08.09.2026',
    endTime: '11:30',

    vehicleType: 'Minibüs',
    vehiclePlate: '35 ABC 123',
    driverName: 'Mehmet Yılmaz',
    driverNote: 'VIP karşılama yapılacak.',

    flightCode: 'TK2321',
    flightLocation: 'İstanbul - İzmir',
    flightTime: '08:45',
    flightTerminal: 'İç Hatlar',

    guide: 'Ayşe Demir',
    greetingStaff: 'Can Erdem',
    meetingPoint: 'Geliş terminali çıkış kapısı',

    description: 'Misafirler Çeşme Marina oteline bırakılacaktır.',
    notifications: 'SMS bildirimi gönderildi.',
    extraServices: 'Karşılama hizmeti',

    price: 4500,
    subcontractor: 'İzmir VIP Turizm',
  },

  {
    id: 'OP-002',
    status: 'Tamamlandı',
    date: '08.09.2026',
    time: '14:00',

    customerName: 'XYZ Gıda',
    operationType: 'Transfer',
    operationName: 'İzmir - İstanbul',
    passengerCount: 8,
    mainPassenger: 'Ahmet Demir',

    operationSerialNo: 'OP-2026-0002',
    operationCode: 'TRF-002',
    operationGroup: 'Şehirler Arası Transfer',

    startLocation: 'İzmir Alsancak',
    stop: 'Manisa',
    endLocation: 'İstanbul Havalimanı',
    endCity: 'İstanbul',

    endDate: '08.09.2026',
    endTime: '20:30',

    vehicleType: 'VIP Minibüs',
    vehiclePlate: '35 XYZ 456',
    driverName: 'Ahmet Demir',
    driverNote: 'Bagaj kapasitesi kontrol edildi.',

    flightCode: 'TK2409',
    flightLocation: 'İzmir - İstanbul',
    flightTime: '21:15',
    flightTerminal: 'Dış Hatlar',

    guide: 'Burak Şahin',
    greetingStaff: 'Yok',
    meetingPoint: 'Ana giriş kapısı',

    description: 'Kurumsal misafir transferi.',
    notifications: 'Operasyon tamamlandı bildirimi gönderildi.',
    extraServices: 'Bagaj yardımı',

    price: 7800,
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