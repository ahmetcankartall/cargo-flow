import { CalendarDays } from 'lucide-react'

export default function OperationsCurrentFilters() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm my-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Tarih */}
        <div className="xl:col-span-2">
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

       

       

      

        {/* Durum */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Durum
          </label>

          <select className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white">
            <option>Tümü</option>
            <option>Bekliyor</option>
            <option>Devam Ediyor</option>
            <option>Tamamlandı</option>
            <option>İptal</option>
          </select>
        </div>
      </div>
    </div>
  )
}