import type { CurrentOperation } from '../types'

interface Props {
  data: CurrentOperation[]
}

export default function OperationsCurrentTable({ data }: Props) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-250 border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                MÜŞTERİLER
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                OPERASYON ADI
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                OPERASYON TÜRÜ
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                ARAÇ TÜRÜ
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                ARAÇ PLAKASI
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                SÜRÜCÜ
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500">
                TAŞERON
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
              >
                <td className="px-4 py-4 text-sm font-medium text-slate-900">
                  {item.customerName}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {item.operationName}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {item.operationType}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {item.vehicleType}
                </td>

                <td className="px-4 py-4 text-sm font-medium text-slate-700">
                  {item.vehiclePlate}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {item.driverName}
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {item.subcontractor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}