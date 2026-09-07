import {
  Landmark,
  BusFront,
  FileText,
  LayoutGrid,
  ArrowLeftRight,
  Languages,
  Monitor,
  Settings,
  UserCircle,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const menuItems = [
    {
      title: 'Hesap Özeti',
      icon: Landmark,
      to: '/current-accounts',
    },
    {
      title: 'Araç Özeti',
      icon: BusFront,
      to: '/vehicles',
    },
    {
      title: 'Operasyon Ekstresi',
      icon: FileText,
      to: '/operations',
    },
    {
      title: 'Raporlar',
      icon: LayoutGrid,
      to: '/reports',
    },
  ]

  return (
    <header className="flex h-16 items-center justify-between border-b bg-gray-100 px-6">
      {/* SOL - HIZLI MENÜ */}
      <div className="flex items-center gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.title}
              to={item.to}
              title={item.title}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <Icon size={20} strokeWidth={1.8} />
              <span>{item.title}</span>
            </NavLink>
          )
        })}

        {/* Transferler */}
        <NavLink
          to="/operations"
          title="Transferler"
          className={({ isActive }) =>
            `ml-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
              isActive
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            }`
          }
        >
          <ArrowLeftRight size={20} strokeWidth={1.8} />
          <span>Transferler</span>
        </NavLink>
      </div>

      {/* SAĞ */}
      <div className="flex items-center gap-1">
        <button
          title="Dil"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <Languages size={20} strokeWidth={1.8} />
          <span>Dil</span>
        </button>

        <button
          title="Ekran"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <Monitor size={20} strokeWidth={1.8} />
          <span>Ekran</span>
        </button>

        <button
          title="Ayarlar"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings size={20} strokeWidth={1.8} />
          <span>Ayarlar</span>
        </button>

        <button
          title="Profil"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <UserCircle size={20} strokeWidth={1.7} />
          <span>Profil</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar