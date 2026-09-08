import {
  
  ArrowLeftRight,
  Languages,
  Monitor,
  Settings,
  UserCircle,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navbarMenuItems } from './navbarConfig'
import NavbarMenuItem from './NavbarMenuItem'
import NavbarAction from './NavbarAction'
function Navbar() {
 

  return (
    <header className="flex h-16 items-center justify-between border-b bg-gray-100 px-16">
      {/* SOL - HIZLI MENÜ */}
      
      <div className="flex items-center gap-1">
        {navbarMenuItems.map((item) => (
             <NavbarMenuItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  to={item.to}
                                      />
))}

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
        <NavbarAction
  title="Dil"
  icon={Languages}
/>

<NavbarAction
  title="Ekran"
  icon={Monitor}
/>

<NavbarAction
  title="Ayarlar"
  icon={Settings}
/>

<NavbarAction
  title="Profil"
  icon={UserCircle}
/>
      </div>
    </header>
  )
}

export default Navbar