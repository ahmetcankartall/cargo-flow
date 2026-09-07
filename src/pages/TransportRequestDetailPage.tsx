import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Box,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Package,
  Scale,
  User,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { useTransportRequestStore } from '../features/transportRequests/store/useTransportRequestStore'
import type { TransportRequestStatus } from '../features/transportRequests/types'

function TransportRequestDetailPage() {
  const { id } = useParams()

  const request = useTransportRequestStore((state) =>
    state.requests.find((item) => item.id === id),
  )

  const updateRequestStatus = useTransportRequestStore(
    (state) => state.updateRequestStatus,
  )

  const [isStatusOpen, setIsStatusOpen] = useState(false)

  if (!request) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <div className="rounded-full bg-red-50 p-4">
          <Package
            size={32}
            className="text-red-500"
          />
        </div>

        <h1 className="mt-4 text-xl font-semibold">
          Talep bulunamadı
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Aradığınız taşıma talebi mevcut değil.
        </p>

        <Link
          to="/transport-requests"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          <ArrowLeft size={16} />
          Taleplere Dön
        </Link>
      </div>
    )
  }

  const getStatusLabel = (
    currentStatus: TransportRequestStatus,
  ) => {
    const labels = {
      pending: 'Bekliyor',
      approved: 'Onaylandı',
      assigned: 'Atandı',
      in_transit: 'Taşımada',
      delivered: 'Teslim Edildi',
      cancelled: 'İptal Edildi',
    }

    return labels[currentStatus]
  }

  const getStatusClass = (
    currentStatus: TransportRequestStatus,
  ) => {
    const classes = {
      pending:
        'bg-yellow-50 text-yellow-700 ring-yellow-200',
      approved:
        'bg-blue-50 text-blue-700 ring-blue-200',
      assigned:
        'bg-purple-50 text-purple-700 ring-purple-200',
      in_transit:
        'bg-orange-50 text-orange-700 ring-orange-200',
      delivered:
        'bg-green-50 text-green-700 ring-green-200',
      cancelled:
        'bg-red-50 text-red-700 ring-red-200',
    }

    return classes[currentStatus]
  }

  const getCargoLabel = (
    cargoType: typeof request.cargoType,
  ) => {
    const labels = {
      general: 'Genel Kargo',
      food: 'Gıda',
      chemical: 'Kimyasal',
      electronics: 'Elektronik',
      other: 'Diğer',
    }

    return labels[cargoType]
  }

  const statusOptions: TransportRequestStatus[] = [
    'pending',
    'approved',
    'assigned',
    'in_transit',
    'delivered',
    'cancelled',
  ]

  const handleStatusChange = (
    newStatus: TransportRequestStatus,
  ) => {
    updateRequestStatus(request.id, newStatus)
    setIsStatusOpen(false)
  }

  return (
    <div>
      {/* Üst Kısım */}
      <div className="mb-6">
        <Link
          to="/transport-requests"
          className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900"
        >
          <ArrowLeft size={16} />
          Taleplere Dön
        </Link>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 p-2.5">
              <Package size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                {request.id}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Taşıma Talebi Detayı
              </p>
            </div>
          </div>

          <span
            className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ring-1 ${getStatusClass(
              request.status,
            )}`}
          >
            <CheckCircle2 size={16} />
            {getStatusLabel(request.status)}
          </span>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sol Taraf */}
        <div className="space-y-6 lg:col-span-2">
          {/* Rota */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-gray-100 p-2">
                <MapPin size={20} />
              </div>

              <div>
                <h2 className="font-semibold">
                  Taşıma Rotası
                </h2>

                <p className="text-sm text-gray-500">
                  Alış ve teslimat noktaları
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-4 rounded-lg border bg-gray-50 p-4">
                <div className="rounded-full bg-white p-2 shadow-sm">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Alış Noktası
                  </p>

                  <p className="mt-1 font-semibold">
                    {request.pickupLocation}
                  </p>
                </div>
              </div>

              <ArrowRight
                size={24}
                className="mx-auto hidden text-gray-400 md:block"
              />

              <ArrowRight
                size={24}
                className="mx-auto text-gray-400 md:hidden"
                style={{
                  transform: 'rotate(90deg)',
                }}
              />

              <div className="flex flex-1 items-center gap-4 rounded-lg border bg-gray-50 p-4">
                <div className="rounded-full bg-white p-2 shadow-sm">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Teslimat Noktası
                  </p>

                  <p className="mt-1 font-semibold">
                    {request.deliveryLocation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Yük Bilgileri */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-gray-100 p-2">
                <Box size={20} />
              </div>

              <div>
                <h2 className="font-semibold">
                  Yük Bilgileri
                </h2>

                <p className="text-sm text-gray-500">
                  Taşınacak yükün detayları
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Box size={16} />

                  <span className="text-sm">
                    Yük Türü
                  </span>
                </div>

                <p className="mt-2 font-semibold">
                  {getCargoLabel(request.cargoType)}
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <Scale size={16} />

                  <span className="text-sm">
                    Ağırlık
                  </span>
                </div>

                <p className="mt-2 font-semibold">
                  {request.weight.toLocaleString('tr-TR')} kg
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <CalendarDays size={16} />

                  <span className="text-sm">
                    Alış Tarihi
                  </span>
                </div>

                <p className="mt-2 font-semibold">
                  {request.pickupDate}
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <User size={16} />

                  <span className="text-sm">
                    Müşteri
                  </span>
                </div>

                <p className="mt-2 font-semibold">
                  {request.customerName}
                </p>
              </div>
            </div>
          </div>

          {/* Notlar */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold">
              Notlar
            </h2>

            <div className="mt-4 rounded-lg bg-gray-50 p-4">
              <p className="text-sm leading-6 text-gray-600">
                {request.notes ||
                  'Bu talep için not bulunmuyor.'}
              </p>
            </div>
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="space-y-6">
          {/* Durum */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold">
              Talep Durumu
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Mevcut taşıma talebi durumunu yönetin.
            </p>

            <div className="relative mt-5">
              <button
                type="button"
                onClick={() =>
                  setIsStatusOpen((current) => !current)
                }
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium ring-1 ${getStatusClass(
                  request.status,
                )}`}
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} />
                  {getStatusLabel(request.status)}
                </span>

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    isStatusOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isStatusOpen && (
                <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-lg border bg-white shadow-lg">
                  {statusOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        handleStatusChange(option)
                      }
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-gray-50 ${
                        option === request.status
                          ? 'bg-gray-50 font-medium'
                          : ''
                      }`}
                    >
                      <span>
                        {getStatusLabel(option)}
                      </span>

                      {option === request.status && (
                        <CheckCircle2 size={16} />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Özet */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold">
              Talep Özeti
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Talep No
                </span>

                <span className="text-sm font-medium">
                  {request.id}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Müşteri
                </span>

                <span className="text-sm font-medium">
                  {request.customerName}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Ağırlık
                </span>

                <span className="text-sm font-medium">
                  {request.weight.toLocaleString('tr-TR')} kg
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Oluşturulma
                </span>

                <span className="text-sm font-medium">
                  {request.createdAt}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportRequestDetailPage