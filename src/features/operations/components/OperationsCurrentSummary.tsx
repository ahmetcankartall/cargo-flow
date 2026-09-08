interface Props {
  summary: {
    passengers: number
    cancelled: number
    requests: number
    reservations: number
    operations: number
    completed: number
    types: number
    noShow: number
  }
}

export default function OperationsCurrentSummary({
  summary,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">YOLCULAR</p>
        <p className="mt-2 text-2xl font-bold text-blue-600">
          {summary.passengers}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          İPTAL EDİLEN
        </p>
        <p className="mt-2 text-2xl font-bold text-red-500">
          {summary.cancelled}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">TALEP</p>
        <p className="mt-2 text-2xl font-bold text-amber-500">
          {summary.requests}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          REZERVASYON
        </p>
        <p className="mt-2 text-2xl font-bold text-violet-600">
          {summary.reservations}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          OPERASYON
        </p>
        <p className="mt-2 text-2xl font-bold text-emerald-600">
          {summary.operations}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          TAMAMLANDI
        </p>
        <p className="mt-2 text-2xl font-bold text-green-600">
          {summary.completed}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">TÜRÜ</p>
        <p className="mt-2 text-2xl font-bold text-indigo-600">
          {summary.types}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">NOSHOW</p>
        <p className="mt-2 text-2xl font-bold text-rose-600">
          {summary.noShow}
        </p>
      </div>
    </div>
  )
}