import {
  
  ArrowRight,
  Box,
  CalendarDays,
  ChevronRight,
  MapPin,
  Weight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import type { TransportRequest } from '../types'

interface TransportRequestListProps {
  requests: TransportRequest[]
}

function TransportRequestList({
  requests,
}: TransportRequestListProps) {
  const getStatusLabel = (
    status: TransportRequest['status'],
  ) => {
    const labels = {
      pending: 'Bekliyor',
      approved: 'Onaylandı',
      assigned: 'Atandı',
      in_transit: 'Taşımada',
      delivered: 'Teslim Edildi',
      cancelled: 'İptal Edildi',
    }

    return labels[status]
  }

  const getStatusClass = (
    status: TransportRequest['status'],
  ) => {
    const classes = {
      pending: 'bg-yellow-50 text-yellow-700 ring-yellow-200',
      approved: 'bg-blue-50 text-blue-700 ring-blue-200',
      assigned: 'bg-purple-50 text-purple-700 ring-purple-200',
      in_transit: 'bg-orange-50 text-orange-700 ring-orange-200',
      delivered: 'bg-green-50 text-green-700 ring-green-200',
      cancelled: 'bg-red-50 text-red-700 ring-red-200',
    }

    return classes[status]
  }

  const getCargoLabel = (
    cargoType: TransportRequest['cargoType'],
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

  return (
    <div className="mt-6 overflow-hidden rounded-xl border bg-white shadow-sm">
      {/* Başlık */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-100 p-2">
            <Box size={20} />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Taşıma Talepleri
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Sistemdeki mevcut taşıma talepleri.
            </p>
          </div>
        </div>
      </div>

      {/* Tablo */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-3 font-medium text-gray-600">
                Talep No
              </th>

              <th className="px-6 py-3 font-medium text-gray-600">
                Müşteri
              </th>

              <th className="px-6 py-3 font-medium text-gray-600">
                Rota
              </th>

              <th className="px-6 py-3 font-medium text-gray-600">
                Yük
              </th>

              <th className="px-6 py-3 font-medium text-gray-600">
                Ağırlık
              </th>

              <th className="px-6 py-3 font-medium text-gray-600">
                Tarih
              </th>

              <th className="px-6 py-3 font-medium text-gray-600">
                Durum
              </th>

              <th className="px-6 py-3 font-medium text-gray-600">
                İşlem
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {requests.map((request) => (
              <tr
                key={request.id}
                className="transition hover:bg-gray-50"
              >
                {/* Talep No */}
                <td className="px-6 py-4">
                  <Link
                    to={`/transport-requests/${request.id}`}
                    className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {request.id}
                  </Link>
                </td>

                {/* Müşteri */}
                <td className="px-6 py-4">
                  <span className="font-medium">
                    {request.customerName}
                  </span>
                </td>

                {/* Rota */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="shrink-0 text-gray-500"
                    />

                    <div className="flex items-center gap-2">
                      <span>{request.pickupLocation}</span>

                      <ArrowRight
                        size={15}
                        className="text-gray-400"
                      />

                      <span>{request.deliveryLocation}</span>
                    </div>
                  </div>
                </td>

                {/* Yük */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Box
                      size={16}
                      className="text-gray-500"
                    />

                    <span>
                      {getCargoLabel(request.cargoType)}
                    </span>
                  </div>
                </td>

                {/* Ağırlık */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Weight
                      size={16}
                      className="text-gray-500"
                    />

                    <span>
                      {request.weight.toLocaleString('tr-TR')} kg
                    </span>
                  </div>
                </td>

                {/* Tarih */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={16}
                      className="text-gray-500"
                    />

                    <span>{request.pickupDate}</span>
                  </div>
                </td>

                {/* Durum */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ${getStatusClass(
                      request.status,
                    )}`}
                  >
                    {getStatusLabel(request.status)}
                  </span>
                </td>

                {/* Detay */}
                <td className="px-6 py-4">
                  <Link
                    to={`/transport-requests/${request.id}`}
                    className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition hover:bg-gray-100"
                  >
                    Detay
                    <ChevronRight size={14} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Boş liste */}
      {requests.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Box
            size={32}
            className="mb-3 text-gray-400"
          />

          <p className="font-medium text-gray-600">
            Henüz taşıma talebi bulunmuyor.
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Yeni bir taşıma talebi oluşturarak başlayabilirsiniz.
          </p>
        </div>
      )}
    </div>
  )
}

export default TransportRequestList