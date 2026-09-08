import type { LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

type NavbarMenuItemProps = {
  title: string
  icon: LucideIcon
  to: string
}

const NavbarMenuItem = ({
  title,
  icon: Icon,
  to,
}: NavbarMenuItemProps) => {
  return (
    <NavLink
      to={to}
      title={title}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
          isActive
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
        }`
      }
    >
      <Icon size={20} strokeWidth={1.8} />
      <span>{title}</span>
    </NavLink>
  )
}

export default NavbarMenuItem