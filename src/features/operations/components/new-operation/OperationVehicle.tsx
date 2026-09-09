import { useFormContext } from 'react-hook-form'

import type { NewOperationFormData } from './newOperationSchema'

export default function OperationVehicle() {
  const {
    register,
    watch,
    setValue,
  } = useFormContext<NewOperationFormData>()

  const mode = watch('mode')

  return (
    <section>
      <h3 className="mb-3 text-sm font-semibold text-slate-900">
        Araç
      </h3>

      <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-4">

        {/* Araç Türü */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Araç Türü
          </label>

          <select
            {...register('vehicleType')}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
          >
            <option value="">Araç türü seç</option>
            <option value="Otomobil">Otomobil</option>
            <option value="Minibüs">Minibüs</option>
            <option value="VIP Minibüs">VIP Minibüs</option>
            <option value="Otobüs">Otobüs</option>
            <option value="Kamyon">Kamyon</option>
          </select>
        </div>

        {/* Araç / Taşeron */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Kaynak
          </label>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setValue('mode', 'vehicle')}
              className={`h-11 rounded-xl border text-sm font-medium transition ${
                mode === 'vehicle'
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              Araç
            </button>

            <button
              type="button"
              onClick={() =>
                setValue('mode', 'subcontractor')
              }
              className={`h-11 rounded-xl border text-sm font-medium transition ${
                mode === 'subcontractor'
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
              }`}
            >
              Taşeron
            </button>
          </div>
        </div>

        {/* =====================================================
            ARAÇ
        ===================================================== */}
        {mode === 'vehicle' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* Araç */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Araç
              </label>

              <select
                {...register('vehicleId')}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
              >
                <option value="">Araç seç</option>
                <option value="vehicle-1">
                  35 ABC 123
                </option>
                <option value="vehicle-2">
                  35 XYZ 456
                </option>
              </select>
            </div>

            {/* Araç Plaka */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Araç Plaka
              </label>

              <input
                type="text"
                {...register('vehiclePlate')}
                placeholder="Araç plakası"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            {/* Sürücü */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Sürücü
              </label>

              <input
                type="text"
                {...register('driverName')}
                placeholder="Sürücü adı"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            {/* Sürücü Hakediş */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Sürücü Hakediş
              </label>

              <input
                type="number"
                {...register('driverPayment')}
                placeholder="0,00"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            {/* Para Birimi */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Para Birimi
              </label>

              <select
                {...register('currency')}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
              >
                <option value="TRY">TRY</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
        )}

        {/* =====================================================
            TAŞERON
        ===================================================== */}
        {mode === 'subcontractor' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* Taşeron */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Taşeron Seç
              </label>

              <select
                {...register('subcontractorId')}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
              >
                <option value="">Taşeron seç</option>
                <option value="sub-1">
                  İzmir VIP Turizm
                </option>
                <option value="sub-2">
                  Ege Transfer
                </option>
              </select>
            </div>

            {/* Araç Plaka */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Araç Plaka
              </label>

              <input
                type="text"
                {...register('vehiclePlate')}
                placeholder="Araç plakası"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            {/* Sürücü */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Sürücü
              </label>

              <input
                type="text"
                {...register('driverName')}
                placeholder="Sürücü adı"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            {/* Taşeron Fiyat */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Taşeron Fiyat
              </label>

              <input
                type="number"
                {...register('subcontractorPrice')}
                placeholder="0,00"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            {/* Para Birimi */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Para Birimi
              </label>

              <select
                {...register('currency')}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
              >
                <option value="TRY">TRY</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>

            {/* Sürücü Telefon */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Sürücü Tel. No
              </label>

              <input
                type="tel"
                {...register('driverPhone')}
                placeholder="Telefon numarası"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}