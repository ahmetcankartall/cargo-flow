import { useFormContext } from 'react-hook-form'
import type { NewOperationFormData } from './newOperationSchema'

export default function OperationCommission() {
  const { register } = useFormContext<NewOperationFormData>()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Komisyon
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Komisyon bilgilerini girin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Komisyon Cari Hesabı */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Komisyon Cari Hesabı
          </label>

          <select
            {...register('commissionAccount')}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Seçiniz</option>
            <option value="cari-001">ABC Turizm</option>
            <option value="cari-002">XYZ Taşımacılık</option>
            <option value="cari-003">Global Travel</option>
          </select>
        </div>

        {/* Komisyon Tutarı */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Komisyon Tutarı
          </label>

          <input
            type="number"
            step="0.01"
            min="0"
            {...register('commissionPrice')}
            placeholder="0.00"
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Para Birimi */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Para Birimi
          </label>

          <select
            {...register('commissionCurrency')}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="TRY">TRY - Türk Lirası</option>
            <option value="USD">USD - Amerikan Doları</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </div>
      </div>
    </section>
  )
}