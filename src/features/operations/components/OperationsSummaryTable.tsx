import { Search } from 'lucide-react'
import type { OperationSummary } from '../types'

interface Props {
  data: OperationSummary[]
  search: string
  onSearchChange: (value: string) => void
}

const money = (value: number) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  }).format(value)

export default function OperationsSummaryTable({
  data,
  search,
  onSearchChange,
}: Props) {
  const totals = data.reduce(
    (acc, item) => {
      acc.operation += item.operationAmount
      acc.extra += item.extraServiceAmount
      acc.subcontractor += item.subcontractorAmount
      acc.cash += item.cashAmount
      acc.invoice += item.invoiceAmount

      return acc
    },
    {
      operation: 0,
      extra: 0,
      subcontractor: 0,
      cash: 0,
      invoice: 0,
    }
  )

  const grandTotal = totals.operation + totals.extra

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Başlık */}
      <div className="flex flex-col gap-4 border-b border-slate-200 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Müşteri Operasyonları
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Müşteri bazında operasyon ve finansal dağılım
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Müşteri ara..."
            aria-label="Müşteri ara"
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
          />
        </div>
      </div>

      {/* Tablo */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-262.5 border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Müşteri
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Operasyon / Yolcu
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Ek Hizmet
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Taşeron
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Cari / Peşin
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Fatura / Proforma
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Toplam
              </th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-12 text-center text-sm text-slate-500"
                >
                  Gösterilecek kayıt bulunamadı.
                </td>
              </tr>
            ) : (
              data.map((item) => {
                const total =
                  item.operationAmount +
                  item.extraServiceAmount

                return (
                  <tr
                    key={item.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {item.customerName}
                      </div>

                      <div className="mt-1 text-xs text-slate-400">
                        {item.id}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-right text-sm font-medium text-slate-700">
                      {money(item.operationAmount)}
                    </td>

                    <td className="px-6 py-4 text-right text-sm text-slate-600">
                      {money(item.extraServiceAmount)}
                    </td>

                    <td className="px-6 py-4 text-right text-sm text-slate-600">
                      {money(item.subcontractorAmount)}
                    </td>

                    <td className="px-6 py-4 text-right text-sm text-slate-600">
                      {money(item.cashAmount)}
                    </td>

                    <td className="px-6 py-4 text-right text-sm text-slate-600">
                      {money(item.invoiceAmount)}
                    </td>

                    <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
                      {money(total)}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>

          {/* Footer */}
          <tfoot>
            <tr className="bg-slate-50">
              <td className="px-6 py-5 text-sm font-bold text-slate-900">
                TOPLAM
              </td>

              <td className="px-6 py-5 text-right text-sm font-bold text-slate-900">
                {money(totals.operation)}
              </td>

              <td className="px-6 py-5 text-right text-sm font-bold text-slate-900">
                {money(totals.extra)}
              </td>

              <td className="px-6 py-5 text-right text-sm font-bold text-slate-900">
                {money(totals.subcontractor)}
              </td>

              <td className="px-6 py-5 text-right text-sm font-bold text-slate-900">
                {money(totals.cash)}
              </td>

              <td className="px-6 py-5 text-right text-sm font-bold text-slate-900">
                {money(totals.invoice)}
              </td>

              <td className="px-6 py-5 text-right text-base font-bold text-slate-900">
                {money(grandTotal)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}