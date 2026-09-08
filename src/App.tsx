import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import TransportRequestsPage from './pages/TransportRequestsPage'
import TransportRequestDetailPage from './pages/TransportRequestDetailPage'
import ShipmentsPage from './pages/ShipmentsPage'
import VehiclesPage from './pages/VehiclesPage'
import DriversPage from './pages/DriversPage'
import ReportsPage from './pages/ReportsPage'
import DashboardLayout from './layouts/DashboardLayout'
import CurrentAccountStatus from './pages/CurrentAccountStatus'
import OperationsSummaryPage from './pages/OperationsSummaryPage'
import NotFoundPage from './pages/NotFoundPage'
import OperationsCurrentPage from './pages/OperationsCurrentPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="/operations/summary"
            element={<OperationsSummaryPage />}
          />
<Route
  path="/operations/current"
  element={<OperationsCurrentPage />}
/>
          <Route
            path="/transport-requests"
            element={<TransportRequestsPage />}
          />
          <Route path="/current-accounts" element={<CurrentAccountStatus />} />
          <Route
            path="/transport-requests/:id"
            element={<TransportRequestDetailPage />}
          />

          <Route path="/shipments" element={<ShipmentsPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App