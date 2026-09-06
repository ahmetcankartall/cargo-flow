import TransportRequestForm from '../features/transportRequests/components/TransportRequestForm'
import TransportRequestList from '../features/transportRequests/components/TransportRequestList'
import { mockTransportRequests } from '../features/transportRequests/mockData'

function TransportRequestsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Taşıma Talepleri</h1>

        <p className="mt-1 text-gray-500">
          Müşterilerden gelen taşıma taleplerini yönetin.
        </p>
      </div>

      <TransportRequestForm />

      <TransportRequestList requests={mockTransportRequests} />
    </div>
  )
}

export default TransportRequestsPage