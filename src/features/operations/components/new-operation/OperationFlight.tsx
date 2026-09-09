import { useFormContext } from 'react-hook-form'
import type { NewOperationFormData } from './newOperationSchema'

export default function OperationFlight() {
  const { register } = useFormContext<NewOperationFormData>()

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Uçuş Bilgileri
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Uçuş bilgilerini girin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Uçuş Saati */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Uçuş Saati
          </label>

          <input
            type="time"
            {...register('flightTime')}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Uçuş Kodu */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Uçuş Kodu
          </label>

          <input
            type="text"
            {...register('flightCode')}
            placeholder="TK1234"
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Varış / Kalkış */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Uçuş Yönü
          </label>

          <select
            {...register('flightDirection')}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Seçiniz</option>
            <option value="arrival">Varış</option>
            <option value="departure">Kalkış</option>
          </select>
        </div>

        {/* Terminal */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Terminal
          </label>

          <input
            type="text"
            {...register('flightTerminal')}
            placeholder="Terminal bilgisi"
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>
    </section>
  )
}