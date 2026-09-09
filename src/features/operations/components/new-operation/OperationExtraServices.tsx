import { useFieldArray, useFormContext } from 'react-hook-form'
import type { NewOperationFormData } from './newOperationSchema'

export default function OperationExtraServices() {
  const { control, register } = useFormContext<NewOperationFormData>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'extraServices',
  })

  const addService = () => {
    append({
      serviceName: '',
      price: '',
      currency: 'TRY',
      supplier: '',
      costPrice: '',
      costCurrency: 'TRY',
    })
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Ek Hizmetler
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Operasyona ait ek hizmetleri ve maliyetlerini ekleyin.
          </p>
        </div>

        <button
          type="button"
          onClick={addService}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          + Hizmet Ekle
        </button>
      </div>

      {fields.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center">
          <p className="text-sm text-slate-500">
            Henüz ek hizmet eklenmedi.
          </p>

          <button
            type="button"
            onClick={addService}
            className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            İlk hizmeti ekle
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-800">
                  Hizmet {index + 1}
                </h3>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Sil
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Hizmet Adı */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Hizmet Adı
                  </label>

                  <input
                    {...register(`extraServices.${index}.serviceName`)}
                    placeholder="Hizmet adı"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Satış Fiyatı */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Fiyat
                  </label>

                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    {...register(`extraServices.${index}.price`)}
                    placeholder="0.00"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Satış Para Birimi */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Para Birimi
                  </label>

                  <select
                    {...register(`extraServices.${index}.currency`)}
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>

                {/* Tedarikçi */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Tedarikçi
                  </label>

                  <input
                    {...register(`extraServices.${index}.supplier`)}
                    placeholder="Tedarikçi"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Maliyet */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Maliyet
                  </label>

                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    {...register(`extraServices.${index}.costPrice`)}
                    placeholder="0.00"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Maliyet Para Birimi */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Maliyet Para Birimi
                  </label>

                  <select
                    {...register(`extraServices.${index}.costCurrency`)}
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}