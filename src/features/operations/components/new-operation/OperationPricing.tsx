import { useFormContext } from 'react-hook-form'
import type { NewOperationFormData } from './newOperationSchema'

export default function OperationPricing() {
  const { register } = useFormContext<NewOperationFormData>()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Fiyat
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Operasyon fiyatlandırma bilgilerini girin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Fiyat */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Fiyat
          </label>

          <input
            type="number"
            step="0.01"
            min="0"
            {...register('price')}
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
            {...register('priceCurrency')}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="TRY">TRY - Türk Lirası</option>
            <option value="USD">USD - Amerikan Doları</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </div>

        {/* Ödeme Tipi */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Ödeme Tipi
          </label>

          <select
            {...register('paymentType')}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="Cari">Cari</option>
            <option value="Peşin">Peşin</option>
          </select>
        </div>
      </div>
    </section>
  )
}