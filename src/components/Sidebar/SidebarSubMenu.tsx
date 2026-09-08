import { NavLink } from 'react-router-dom'

type SidebarSubMenuItem = {
  label: string
  path: string
}

type SidebarSubMenuProps = {
  items: SidebarSubMenuItem[]
}

const getSubLinkClass = ({ isActive }: { isActive: boolean }) =>
  `group flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[11px] transition-all duration-200 ${
    isActive
      ? 'bg-gray-100 font-medium text-gray-900 shadow-sm'
      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
  }`

const SidebarSubMenu = ({ items }: SidebarSubMenuProps) => (
  <div className="ml-5 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
    {items.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        end
        className={getSubLinkClass}
      >
        {({ isActive }) => (
          <>
            <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'scale-100 bg-gray-900'
                    : 'scale-75 bg-gray-300 group-hover:scale-100 group-hover:bg-gray-500'
                }`}
              />
            </span>
            <span className="truncate">{item.label}</span>
          </>
        )}
      </NavLink>
    ))}
  </div>
)

export default SidebarSubMenu
