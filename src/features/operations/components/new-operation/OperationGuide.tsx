import { useFormContext } from 'react-hook-form'
import type { NewOperationFormData } from './newOperationSchema'

export default function OperationGuide() {
  const { register } = useFormContext<NewOperationFormData>()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Rehber Bilgileri
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Rehber ve karşılama personeli bilgilerini girin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Karşılama Personeli */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Karşılama Personeli
          </label>

          <select
            {...register('greetingStaff')}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Seçiniz</option>
            <option value="Ahmet Yılmaz">Ahmet Yılmaz</option>
            <option value="Mehmet Kaya">Mehmet Kaya</option>
            <option value="Ayşe Demir">Ayşe Demir</option>
          </select>
        </div>

        {/* Rehber Adı */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Rehber Adı
          </label>

          <input
            type="text"
            {...register('guideName')}
            placeholder="Rehber adı"
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Rehber Telefon */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Rehber Telefon
          </label>

          <input
            type="tel"
            {...register('guidePhone')}
            placeholder="05xx xxx xx xx"
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
    </section>
  )
}