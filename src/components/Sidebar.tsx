import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-white p-4">
      <div className="mb-8 px-2">
        <h2 className="text-2xl font-bold">CargoFlow</h2>
        <p className="text-sm text-gray-500">Logistics Platform</p>
      </div>

      <nav className="flex flex-col gap-2">
        <Link
          to="/dashboard"
          className="rounded-lg bg-gray-100 px-4 py-3 font-medium"
        >
          Dashboard
        </Link>

        <Link
          to="/transport-requests"
          className="rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Taşıma Talepleri
        </Link>

        <Link
          to="/shipments"
          className="rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Sevkiyatlar
        </Link>

        <Link
          to="/vehicles"
          className="rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Araçlar
        </Link>

        <Link
          to="/drivers"
          className="rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Sürücüler
        </Link>

        <Link
          to="/reports"
          className="rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100"
        >
          Raporlar
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar