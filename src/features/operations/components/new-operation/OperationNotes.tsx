import { useFormContext } from 'react-hook-form'
import type { NewOperationFormData } from './newOperationSchema'

export default function OperationNotes() {
  const { register } = useFormContext<NewOperationFormData>()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Notlar
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Operasyonla ilgili açıklama ve notları girin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Açıklama */}
        <div className="md:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Açıklama
          </label>

          <textarea
            {...register('description')}
            rows={4}
            placeholder="Operasyon hakkında açıklama..."
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Sürücü Notu */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Sürücü Notu
          </label>

          <textarea
            {...register('driverNote')}
            rows={4}
            placeholder="Sürücü için not..."
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Buluşma Noktası */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Buluşma Noktası
          </label>

          <textarea
            {...register('meetingPoint')}
            rows={4}
            placeholder="Buluşma noktası..."
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
    </section>
  )
}