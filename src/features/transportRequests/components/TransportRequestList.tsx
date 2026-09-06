import type { TransportRequest } from '../types'

interface TransportRequestListProps {
  requests: TransportRequest[]
}

function TransportRequestList({
  requests,
}: TransportRequestListProps) {
  const getStatusLabel = (status: TransportRequest['status']) => {
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

  return (
    <div className="mt-6 overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">Taşıma Talepleri</h2>
        <p className="mt-1 text-sm text-gray-500">
          Sistemdeki mevcut taşıma talepleri.
        </p>
      </div>

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
            </tr>
          </thead>

          <tbody className="divide-y">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">
                  {request.id}
                </td>

                <td className="px-6 py-4">
                  {request.customerName}
                </td>

                <td className="px-6 py-4">
                  <div>
                    <p>{request.pickupLocation}</p>
                    <p className="text-gray-400">↓</p>
                    <p>{request.deliveryLocation}</p>
                  </div>
                </td>

                <td className="px-6 py-4">
                  {request.cargoType}
                </td>

                <td className="px-6 py-4">
                  {request.weight.toLocaleString('tr-TR')} kg
                </td>

                <td className="px-6 py-4">
                  {request.pickupDate}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                    {getStatusLabel(request.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransportRequestList