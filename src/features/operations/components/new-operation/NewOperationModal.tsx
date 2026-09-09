import {
  FormProvider,
  useForm,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import TransferInformation from './TransferInformation'
import OperationRoute from './OperationRoute'
import OperationVehicle from './OperationVehicle'
import OperationPricing from './OperationPricing'
import OperationPassengers from './OperationPassengers'
import OperationExtraServices from './OperationExtraServices'
import OperationNotes from './OperationNotes'
import OperationFlight from './OperationFlight'
import OperationGuide from './OperationGuide'
import OperationCommission from './OperationCommission'

import {
  newOperationSchema,
  type NewOperationFormData,
} from './newOperationSchema'

interface Props {
  onClose: () => void
  onSave: (data: NewOperationFormData) => void
}

export default function NewOperationModal({
  onClose,
  onSave,
}: Props) {
  const methods = useForm<NewOperationFormData>({
    resolver: zodResolver(newOperationSchema),

    defaultValues: {
      customer: '',
      operationType: '',
      operationName: '',
      reference: '',
      operationCode: '',
      operationGroup: '',

      startDate: '',
      startTime: '',
      startLocation: '',
      stop: '',
      endLocation: '',
      endDate: '',
      endTime: '',

      passengers: [],

      mode: 'vehicle',
      vehicleType: '',
      vehicleId: '',
      vehiclePlate: '',
      driverName: '',
      driverPayment: '',
      driverPhone: '',
      subcontractorId: '',
      subcontractorPrice: '',
      currency: 'TRY',

      price: '',
      priceCurrency: 'TRY',
      paymentType: 'Cari',

      extraServices: [],

      description: '',
      driverNote: '',
      meetingPoint: '',

      flightTime: '',
      flightCode: '',
      flightDirection: '',
      flightTerminal: '',

      greetingStaff: '',
      guideName: '',
      guidePhone: '',

      commissionAccount: '',
      commissionPrice: '',
      commissionCurrency: 'TRY',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = (data: NewOperationFormData) => {
    onSave(data)
    onClose()
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      >
        <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-xl">
          {/* Başlık */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Yeni Operasyon
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Yeni operasyon oluştur
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Kapat
            </button>
          </div>

          {/* Form içerikleri */}
          <div className="space-y-6 p-6">
            <TransferInformation />

            <OperationRoute />

            <OperationPassengers />

            <OperationVehicle />

            <OperationPricing />

            <OperationExtraServices />

            <OperationNotes />

            <OperationFlight />

            <OperationGuide />

            <OperationCommission />

            {/* Validation */}
            {Object.keys(errors).length > 0 && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-medium text-red-700">
                  Lütfen zorunlu alanları kontrol edin.
                </p>
              </div>
            )}

            {/* Alt butonlar */}
            <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Vazgeç
              </button>

              <button
                type="submit"
                className="h-11 rounded-xl bg-slate-900 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Operasyonu Kaydet
              </button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}