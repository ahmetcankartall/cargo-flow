import { useFieldArray, useFormContext } from 'react-hook-form'
import type { NewOperationFormData } from './newOperationSchema'

export default function OperationPassengers() {
  const { control, register } = useFormContext<NewOperationFormData>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'passengers',
  })

  const addPassenger = () => {
    append({
      firstName: '',
      lastName: '',
      phone: '',
      gender: '',
      nationality: '',
      identityNumber: '',
      voucherType: '',
      passengerType: 'adult',
      description: '',
      stationNo: '',
    })
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Yolcular
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Operasyona ait yolcuları ekleyin.
          </p>
        </div>

        <button
          type="button"
          onClick={addPassenger}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          + Yolcu Ekle
        </button>
      </div>

      {fields.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center">
          <p className="text-sm text-slate-500">
            Henüz yolcu eklenmedi.
          </p>

          <button
            type="button"
            onClick={addPassenger}
            className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            İlk yolcuyu ekle
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
                  Yolcu {index + 1}
                </h3>

                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  Sil
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Ad */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Ad
                  </label>

                  <input
                    {...register(`passengers.${index}.firstName`)}
                    placeholder="Ad"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Soyad */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Soyad
                  </label>

                  <input
                    {...register(`passengers.${index}.lastName`)}
                    placeholder="Soyad"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Telefon
                  </label>

                  <input
                    type="tel"
                    {...register(`passengers.${index}.phone`)}
                    placeholder="05xx xxx xx xx"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Cinsiyet */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Cinsiyet
                  </label>

                  <select
                    {...register(`passengers.${index}.gender`)}
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Seçiniz</option>
                    <option value="male">Erkek</option>
                    <option value="female">Kadın</option>
                  </select>
                </div>

                {/* Uyruk */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Uyruk
                  </label>

                  <input
                    {...register(`passengers.${index}.nationality`)}
                    placeholder="Türk"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* TC / Pasaport */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    TC / Pasaport
                  </label>

                  <input
                    {...register(`passengers.${index}.identityNumber`)}
                    placeholder="Kimlik veya pasaport no"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Voucher Tipi */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Voucher Tipi
                  </label>

                  <select
                    {...register(`passengers.${index}.voucherType`)}
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Seçiniz</option>
                    <option value="voucher">Voucher</option>
                    <option value="online">Online</option>
                    <option value="manual">Manuel</option>
                  </select>
                </div>

                {/* Yolcu Tipi */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Yolcu Tipi
                  </label>

                  <select
                    {...register(`passengers.${index}.passengerType`)}
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="adult">Yetişkin</option>
                    <option value="child">Çocuk</option>
                    <option value="free">Ücretsiz</option>
                  </select>
                </div>

                {/* İstasyon No */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    İstasyon No
                  </label>

                  <input
                    {...register(`passengers.${index}.stationNo`)}
                    placeholder="İstasyon no"
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Açıklama */}
                <div className="md:col-span-2 lg:col-span-3">
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Açıklama
                  </label>

                  <input
                    {...register(`passengers.${index}.description`)}
                    placeholder="Yolcu açıklaması..."
                    className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}