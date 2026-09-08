import { FileSpreadsheet, FileText } from 'lucide-react'
import { useState } from 'react'

import OperationsSummaryFilters from '../features/operations/components/OperationsSummaryFilters'
import OperationsSummaryOverview from '../features/operations/components/OperationsSummaryOverview'
import OperationsSummaryTable from '../features/operations/components/OperationsSummaryTable'
import { mockOperationSummaries } from '../features/operations/mockData'

export default function OperationsSummaryPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<'all' | 'invoiced' | 'not_invoiced'>('all')

const filteredData = mockOperationSummaries.filter((item) => {
  const matchesSearch = item.customerName
    .toLocaleLowerCase('tr-TR')
    .includes(search.toLocaleLowerCase('tr-TR'))

  const matchesStatus =
    status === 'all' || item.invoiceStatus === status

  return matchesSearch && matchesStatus
})

  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Operasyon Özeti
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Operasyon hareketlerinin ve faturaların genel durumu
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <FileSpreadsheet size={17} />
              XLS
            </button>
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <FileText size={17} />
              PDF
            </button>
          </div>
        </div>

        <div className="mb-6">
          <OperationsSummaryFilters
            status={status}
            onStatusChange={setStatus}
          />
        </div>
        <div className="mb-6">
          <OperationsSummaryOverview data={filteredData} />
        </div>
        <OperationsSummaryTable
          data={filteredData}
          search={search}
          onSearchChange={setSearch}
        />
      </div>
    </div>
  )
}
