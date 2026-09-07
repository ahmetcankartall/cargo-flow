import TransportRequestForm from '../features/transportRequests/components/TransportRequestForm'
import TransportRequestList from '../features/transportRequests/components/TransportRequestList'
import { useTransportRequestStore } from '../features/transportRequests/store/useTransportRequestStore'

function TransportRequestsPage() {
  const requests = useTransportRequestStore(
    (state) => state.requests,
  )

  const addRequest = useTransportRequestStore(
    (state) => state.addRequest,
  )

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Taşıma Talepleri
        </h1>

        <p className="mt-1 text-gray-500">
          Müşterilerden gelen taşıma taleplerini yönetin.
        </p>
      </div>

      <TransportRequestForm
        onCreateRequest={addRequest}
      />

      <TransportRequestList requests={requests} />
    </div>
  )
}

export default TransportRequestsPage