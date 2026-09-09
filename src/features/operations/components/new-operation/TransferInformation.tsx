import { useFormContext } from 'react-hook-form'

import type { NewOperationFormData } from './newOperationSchema'

export default function TransferInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOperationFormData>()

  return (
    <section>
      <h3 className="mb-3 text-sm font-semibold text-slate-900">
        Transfer Bilgileri
      </h3>

      <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-2 lg:grid-cols-3">

        {/* Müşteri */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Müşteri
          </label>

          <select
            {...register('customer')}
            className={`h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none transition ${
              errors.customer
                ? 'border-red-300 focus:border-red-400'
                : 'border-slate-200 focus:border-slate-400'
            }`}
          >
            <option value="">Müşteri seç</option>
            <option value="TAV Havalimanları">
              TAV Havalimanları
            </option>
            <option value="XYZ Gıda">XYZ Gıda</option>
            <option value="ABC Lojistik">ABC Lojistik</option>
          </select>

          {errors.customer && (
            <p className="mt-1 text-xs text-red-500">
              {errors.customer.message}
            </p>
          )}
        </div>

        {/* OP Türü */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            OP Türü
          </label>

          <select
            {...register('operationType')}
            className={`h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none transition ${
              errors.operationType
                ? 'border-red-300 focus:border-red-400'
                : 'border-slate-200 focus:border-slate-400'
            }`}
          >
            <option value="">OP türü seç</option>
            <option value="Transfer">Transfer</option>
            <option value="Tur">Tur</option>
            <option value="Günlük Kiralama">
              Günlük Kiralama
            </option>
          </select>

          {errors.operationType && (
            <p className="mt-1 text-xs text-red-500">
              {errors.operationType.message}
            </p>
          )}
        </div>

        {/* OP Adı */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            OP Adı
          </label>

          <input
            type="text"
            {...register('operationName')}
            placeholder="Operasyon adı"
            className={`h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 ${
              errors.operationName
                ? 'border-red-300 focus:border-red-400'
                : 'border-slate-200 focus:border-slate-400'
            }`}
          />

          {errors.operationName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.operationName.message}
            </p>
          )}
        </div>

        {/* Referans */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Referans
          </label>

          <input
            type="text"
            {...register('reference')}
            placeholder="Referans numarası"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
          />
        </div>

        {/* OP Kodu */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            OP Kodu
          </label>

          <input
            type="text"
            {...register('operationCode')}
            placeholder="OP kodu"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
          />
        </div>

        {/* OP Grubu */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            OP Grubu
          </label>

          <select
            {...register('operationGroup')}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
          >
            <option value="">OP grubu seç</option>
            <option value="Havalimanı Transfer">
              Havalimanı Transfer
            </option>
            <option value="Şehir İçi Transfer">
              Şehir İçi Transfer
            </option>
            <option value="Şehirler Arası Transfer">
              Şehirler Arası Transfer
            </option>
            <option value="VIP Transfer">
              VIP Transfer
            </option>
          </select>
        </div>

      </div>
    </section>
  )
}