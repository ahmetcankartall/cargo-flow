import { CalendarDays, MapPin } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import type { NewOperationFormData } from './newOperationSchema'

export default function OperationRoute() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOperationFormData>()

  return (
    <section>
      <h3 className="mb-3 text-sm font-semibold text-slate-900">
        Rota
      </h3>

      <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
        {/* Başlangıç */}
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Başlangıç
          </h4>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Tarih */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Tarih
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="date"
                  {...register('startDate')}
                  className={`h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none transition ${
                    errors.startDate
                      ? 'border-red-300 focus:border-red-400'
                      : 'border-slate-200 focus:border-slate-400'
                  }`}
                />
              </div>

              {errors.startDate && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            {/* Saat */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Saat
              </label>

              <input
                type="time"
                {...register('startTime')}
                className={`h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none transition ${
                  errors.startTime
                    ? 'border-red-300 focus:border-red-400'
                    : 'border-slate-200 focus:border-slate-400'
                }`}
              />

              {errors.startTime && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.startTime.message}
                </p>
              )}
            </div>

            {/* Başlangıç Yeri */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Başlangıç Yeri
              </label>

              <button
                type="button"
                className={`flex h-11 w-full items-center gap-2 rounded-xl border bg-white px-3 text-left text-sm transition ${
                  errors.startLocation
                    ? 'border-red-300'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <MapPin
                  size={18}
                  className="shrink-0 text-slate-400"
                />

                <span className="truncate text-slate-400">
                  Yer seç
                </span>
              </button>

              {errors.startLocation && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.startLocation.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Durak */}
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Durak
          </h4>

          <input
            type="text"
            {...register('stop')}
            placeholder="Durak"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
          />
        </div>

        {/* Bitiş */}
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Bitiş
          </h4>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Bitiş Yeri */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bitiş Yeri
              </label>

              <button
                type="button"
                className={`flex h-11 w-full items-center gap-2 rounded-xl border bg-white px-3 text-left text-sm transition ${
                  errors.endLocation
                    ? 'border-red-300'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <MapPin
                  size={18}
                  className="shrink-0 text-slate-400"
                />

                <span className="truncate text-slate-400">
                  Yer seç
                </span>
              </button>

              {errors.endLocation && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.endLocation.message}
                </p>
              )}
            </div>

            {/* Bitiş Tarihi */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bitiş Tarihi
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="date"
                  {...register('endDate')}
                  className={`h-11 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none transition ${
                    errors.endDate
                      ? 'border-red-300 focus:border-red-400'
                      : 'border-slate-200 focus:border-slate-400'
                  }`}
                />
              </div>

              {errors.endDate && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.endDate.message}
                </p>
              )}
            </div>

            {/* Bitiş Saati */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Bitiş Saati
              </label>

              <input
                type="time"
                {...register('endTime')}
                className={`h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none transition ${
                  errors.endTime
                    ? 'border-red-300 focus:border-red-400'
                    : 'border-slate-200 focus:border-slate-400'
                }`}
              />

              {errors.endTime && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.endTime.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}