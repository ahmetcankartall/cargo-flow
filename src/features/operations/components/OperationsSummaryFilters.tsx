import { CalendarDays } from 'lucide-react'

interface OperationsSummaryFiltersProps {
  status: 'all' | 'invoiced' | 'not_invoiced'
  onStatusChange: (
    value: 'all' | 'invoiced' | 'not_invoiced'
  ) => void
}

export default function OperationsSummaryFilters({
  status,
  onStatusChange,
}: OperationsSummaryFiltersProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        {/* Tarih */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Tarih Aralığı
          </label>

          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <CalendarDays
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="date"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            <span className="text-sm text-slate-400">-</span>

            <div className="relative flex-1">
              <CalendarDays
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="date"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Fatura durumu */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Fatura Durumu
          </label>

          <select
            value={status}
            onChange={(e) =>
              onStatusChange(
                e.target.value as
                  | 'all'
                  | 'invoiced'
                  | 'not_invoiced'
              )
            }
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
          >
            <option value="all">Tümü</option>
            <option value="invoiced">Faturalanmış</option>
            <option value="not_invoiced">Faturalanmamış</option>
          </select>
        </div>

      </div>
    </div>
  )
}