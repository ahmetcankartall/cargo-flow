import {
  LayoutDashboard,
  ClipboardList,
  Truck,
  Container,
  Users,
  BarChart3,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const menuItems = [
    {
      to: '/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      to: '/transport-requests',
      label: 'Taşıma Talepleri',
      icon: ClipboardList,
    },
    {
      to: '/shipments',
      label: 'Sevkiyatlar',
      icon: Truck,
    },
    {
      to: '/vehicles',
      label: 'Araçlar',
      icon: Container,
    },
    {
      to: '/drivers',
      label: 'Sürücüler',
      icon: Users,
    },
    {
      to: '/reports',
      label: 'Raporlar',
      icon: BarChart3,
    },
  ]

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r bg-white p-4">
      <div className="mb-8 px-2">
        <h2 className="text-2xl font-bold">CargoFlow</h2>

        <p className="text-sm text-gray-500">
          Logistics Platform
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <Icon size={19} strokeWidth={1.8} />

              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar