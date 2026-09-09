import { Eye } from 'lucide-react'
import type { CurrentOperation } from '../types'

interface Props {
  data: CurrentOperation[]
  onView: (operation: CurrentOperation) => void
}

export default function OperationsTable({ data, onView }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                DURUM
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                TARİH
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                SAAT
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                MÜŞTERİ
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                OPERASYON
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                TÜR
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                YOLCU
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                ARAÇ
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                SÜRÜCÜ
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                FİYAT
              </th>
              <th className="w-12 px-2 py-3 text-center text-xs font-semibold text-slate-500">
                #
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={11}
                  className="px-4 py-10 text-center text-sm text-slate-400"
                >
                  Gösterilecek operasyon bulunamadı.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
                >
                  <td className="px-4 py-4">
                    <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      {item.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {item.date}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {item.time}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium text-slate-900">
                    {item.customerName}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {item.operationName}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {item.operationType}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium text-slate-700">
                    {item.passengerCount}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {item.vehiclePlate}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {item.driverName}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium text-slate-900">
                    {item.price.toLocaleString('tr-TR')} ₺
                  </td>

                  <td className="px-2 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => onView(item)}
                      title="Operasyon detayını görüntüle"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Eye size={17} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}