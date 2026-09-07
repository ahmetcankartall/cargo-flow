import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  transportRequestSchema,
  type TransportRequestFormData,
} from '../schemas/transportRequestSchema'

import type { TransportRequest } from '../types'

interface TransportRequestFormProps {
  onCreateRequest: (request: TransportRequest) => void
}

function TransportRequestForm({
  onCreateRequest,
}: TransportRequestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransportRequestFormData>({
    resolver: zodResolver(transportRequestSchema),
  })

  const onSubmit = (data: TransportRequestFormData) => {
  const now = new Date()

  const newRequest: TransportRequest = {
    id: `TR-${now.getTime()}`,
    ...data,
    status: 'pending',
    createdAt: now.toISOString().split('T')[0],
  }

  onCreateRequest(newRequest)
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-xl font-semibold">Yeni Taşıma Talebi</h2>

        <p className="mt-1 text-sm text-gray-500">
          Yeni bir taşıma talebi oluşturun.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Müşteri
          </label>

          <input
            {...register('customerName')}
            placeholder="Örn. ABC Lojistik"
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
          />

          {errors.customerName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.customerName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Alış Noktası
          </label>

          <input
            {...register('pickupLocation')}
            placeholder="Örn. İzmir"
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
          />

          {errors.pickupLocation && (
            <p className="mt-1 text-sm text-red-500">
              {errors.pickupLocation.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Teslimat Noktası
          </label>

          <input
            {...register('deliveryLocation')}
            placeholder="Örn. İstanbul"
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
          />

          {errors.deliveryLocation && (
            <p className="mt-1 text-sm text-red-500">
              {errors.deliveryLocation.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Yük Türü
          </label>

          <select
            {...register('cargoType')}
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
            defaultValue=""
          >
            <option value="" disabled>
              Yük türü seçin
            </option>

            <option value="general">Genel Kargo</option>
            <option value="food">Gıda</option>
            <option value="chemical">Kimyasal</option>
            <option value="electronics">Elektronik</option>
            <option value="other">Diğer</option>
          </select>

          {errors.cargoType && (
            <p className="mt-1 text-sm text-red-500">
              Yük türü seçilmelidir.
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Ağırlık (kg)
          </label>

          <input
            type="number"
            {...register('weight', { valueAsNumber: true })}
            placeholder="Örn. 1500"
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
          />

          {errors.weight && (
            <p className="mt-1 text-sm text-red-500">
              {errors.weight.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Alış Tarihi
          </label>

          <input
            type="date"
            {...register('pickupDate')}
            className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
          />

          {errors.pickupDate && (
            <p className="mt-1 text-sm text-red-500">
              {errors.pickupDate.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Notlar
        </label>

        <textarea
          {...register('notes')}
          rows={4}
          placeholder="Yük veya taşıma ile ilgili ek bilgiler..."
          className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
      >
        Talep Oluştur
      </button>
    </form>
  )
}

export default TransportRequestForm