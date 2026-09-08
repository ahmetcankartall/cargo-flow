import { WalletCards, ReceiptText, PlusCircle } from 'lucide-react'
import type { OperationSummary } from '../types'

interface Props {
  data: OperationSummary[]
}

const money = (value: number) =>
  new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 2,
  }).format(value)

export default function OperationsSummaryOverview({ data }: Props) {
  const operationTotal = data.reduce(
    (sum, item) => sum + item.operationAmount,
    0
  )

  const extraServiceTotal = data.reduce(
    (sum, item) => sum + item.extraServiceAmount,
    0
  )

  const cashTotal = data.reduce(
    (sum, item) => sum + item.cashAmount,
    0
  )

  const invoiceTotal = data.reduce(
    (sum, item) => sum + item.invoiceAmount,
    0
  )

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Dövize Göre
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Seçilen tarih aralığındaki finansal özet
          </p>
        </div>

        <div className="rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
          TRY
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Operasyon */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <WalletCards size={18} className="text-slate-600" />
            </div>

            <span className="text-sm text-slate-500">
              Operasyon
            </span>
          </div>

          <p className="text-xl font-bold text-slate-900">
            {money(operationTotal)}
          </p>
        </div>

        {/* Ek Hizmet */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <PlusCircle size={18} className="text-slate-600" />
            </div>

            <span className="text-sm text-slate-500">
              Ek Hizmet
            </span>
          </div>

          <p className="text-xl font-bold text-slate-900">
            {money(extraServiceTotal)}
          </p>
        </div>

        {/* Cari / Peşin */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <WalletCards size={18} className="text-slate-600" />
            </div>

            <span className="text-sm text-slate-500">
              Cari / Peşin
            </span>
          </div>

          <p className="text-xl font-bold text-slate-900">
            {money(cashTotal)}
          </p>
        </div>

        {/* Fatura / Proforma */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              <ReceiptText size={18} className="text-slate-600" />
            </div>

            <span className="text-sm text-slate-500">
              Fatura / Proforma
            </span>
          </div>

          <p className="text-xl font-bold text-slate-900">
            {money(invoiceTotal)}
          </p>
        </div>
      </div>
    </div>
  )
}