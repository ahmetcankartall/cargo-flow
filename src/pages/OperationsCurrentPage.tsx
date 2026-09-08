import OperationsCurrentFilters from '../features/operations/components/OperationsCurrentFilters'
import OperationsCurrentSummary from '../features/operations/components/OperationsCurrentSummary'
import OperationsCurrentTable from '../features/operations/components/OperationsCurrentTable'
import {
  currentOperations,
  currentOperationSummary,
} from '../features/operations/mockData'

export default function OperationsCurrentPage() {
  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Transfer Operasyonları Güncel Görünüm
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Günlük transfer operasyonlarının genel durumu
          </p>
        </div>

        <div className="mb-6">
          <OperationsCurrentFilters />
        </div>

        <div className="mb-6">
          <OperationsCurrentSummary
            summary={currentOperationSummary}
          />
        </div>

        <OperationsCurrentTable data={currentOperations} />
      </div>
    </div>
  )
}