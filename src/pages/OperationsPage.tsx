import { useEffect, useState } from 'react'

import type { CurrentOperation } from '../features/operations/types'
import type { NewOperationFormData } from '../features/operations/components/new-operation/newOperationSchema'

import OperationDetailModal from '../features/operations/components/OperationDetailModal'
import NewOperationModal from '../features/operations/components/new-operation/NewOperationModal'
import OperationsTable from '../features/operations/components/OperationsTable'

import api from '../lib/api'

import {
  CalendarDays,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Truck,
  UserPlus,
} from 'lucide-react'

export default function OperationsPage() {
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const [selectedOperation, setSelectedOperation] =
    useState<CurrentOperation | null>(null)

  const [isNewOperationOpen, setIsNewOperationOpen] =
    useState(false)

  const [operations, setOperations] =
    useState<CurrentOperation[]>([])

  const handleSaveOperation = async (
    data: NewOperationFormData,
  ) => {
    try {
      const response = await api.post('/operations', {
        customerId: data.customer,

        operationType: data.operationType,
        operationName: data.operationName,
        reference: data.reference,
        operationCode: data.operationCode,
        operationGroup: data.operationGroup,

        startDate: data.startDate,
        startTime: data.startTime,
        startLocationId: null,

        stop: data.stop,

        endLocationId: null,
        endDate: data.endDate,
        endTime: data.endTime,

        mode: data.mode,

        vehicleId:
          data.mode === 'vehicle'
            ? data.vehicleId || null
            : null,

        driverId: null,

        subcontractorId:
          data.mode === 'subcontractor'
            ? data.subcontractorId || null
            : null,

        subcontractorPrice:
          data.mode === 'subcontractor'
            ? Number(data.subcontractorPrice) || null
            : null,

        subcontractorCurrency:
          data.mode === 'subcontractor'
            ? data.currency
            : null,

        price: Number(data.price) || null,
        priceCurrency: data.priceCurrency,
        paymentType: data.paymentType,

        description: data.description,
        driverNote: data.driverNote,
        meetingPoint: data.meetingPoint,

        flightTime: data.flightTime || null,
        flightCode: data.flightCode,
        flightDirection: data.flightDirection || null,
        flightTerminal: data.flightTerminal,

        greetingStaff: data.greetingStaff,
        guideName: data.guideName,
        guidePhone: data.guidePhone,

        commissionAccountName: data.commissionAccount,
        commissionPrice:
          Number(data.commissionPrice) || null,
        commissionCurrency:
          data.commissionCurrency || null,

        status: 'Planlandı',

        passengers: data.passengers,

        extraServices: data.extraServices.map(
          (service) => ({
            serviceName: service.serviceName,
            price: Number(service.price) || null,
            currency: service.currency,
            supplier: service.supplier,
            costPrice:
              Number(service.costPrice) || null,
            costCurrency: service.costCurrency,
          }),
        ),
      })

      if (response.data.success) {
        await fetchOperations()

        setIsNewOperationOpen(false)
      }
    } catch (error) {
      console.error(
        'Operasyon oluşturulamadı:',
        error,
      )
    }
  }

  const fetchOperations = async () => {
    try {
      const response = await api.get<{
        success: boolean
        data: CurrentOperation[]
      }>('/operations')

      setOperations(response.data.data)
    } catch (error) {
      console.error(
        'Operasyonlar alınamadı:',
        error,
      )
    }
  }

  useEffect(() => {
    fetchOperations()
  }, [])

  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">

        {/* Sayfa başlığı */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Operasyonlar
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Transfer operasyonlarının günlük yönetimi
          </p>
        </div>

        {/* Ana içerik */}
        <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">

          {/* Sol işlem paneli */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="space-y-1">

              {/* Tarih */}
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <CalendarDays size={17} />
                <span>Tarih</span>
              </button>

              {/* Toplam İş */}
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Truck size={17} />
                <span>Toplam İş</span>
              </button>

              {/* Yenileme */}
              <button
                type="button"
                onClick={fetchOperations}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <RefreshCw size={17} />
                <span>Yenileme</span>
              </button>

              {/* Filtreleme */}
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Filter size={17} />
                <span>Filtreleme</span>
              </button>

              {/* Yeni Operasyon */}
              <button
                type="button"
                onClick={() => setIsNewOperationOpen(true)}
                className="flex w-full items-center gap-3 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                <Plus size={17} />
                <span>Yeni Operasyon</span>
              </button>

              {/* Araç Atama */}
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <UserPlus size={17} />
                <span>Araç Atama</span>
              </button>

              {/* Dışa Aktarma */}
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Download size={17} />
                <span>Dışa Aktarma</span>
              </button>

              {/* Daha Fazla */}
              <button
                type="button"
                onClick={() => setIsMoreOpen((current) => !current)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <MoreHorizontal size={17} />
                <span>Daha Fazla</span>
              </button>

              {/* Daha Fazla alt menüsü */}
              {isMoreOpen && (
                <div className="ml-4 space-y-1 border-l border-slate-200 pl-3">

                  <button
                    type="button"
                    className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    Yolcu Ara
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    Çoklu UETDS
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    E-Posta Gönder
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    İçe Aktar
                  </button>

                </div>
              )}
            </div>
          </aside>

          {/* Sağ operasyon tablosu */}
          <section className="min-w-0">
            <OperationsTable
              data={operations}
              onView={setSelectedOperation}
            />
          </section>
        </div>

        {/* Operasyon Detay */}
        {selectedOperation && (
          <OperationDetailModal
            operation={selectedOperation}
            onClose={() => setSelectedOperation(null)}
          />
        )}

        {/* Yeni Operasyon */}
        {isNewOperationOpen && (
          <NewOperationModal
            onClose={() => setIsNewOperationOpen(false)}
            onSave={handleSaveOperation}
          />
        )}

      </div>
    </div>
  )
}