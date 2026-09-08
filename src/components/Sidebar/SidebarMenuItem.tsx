import type { LucideIcon } from 'lucide-react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

type SidebarMenuItemProps = {
  label: string
  path?: string
  icon: LucideIcon
  expanded: boolean
  active?: boolean
  open?: boolean
  onClick?: () => void
}

const getItemClass = ({
  isActive,
  expanded,
}: {
  isActive: boolean
  expanded: boolean
}) =>
  `group relative flex h-9 w-full items-center rounded-lg text-xs transition-all duration-200 ${
    isActive
      ? expanded
        ? 'bg-gray-900 font-medium text-white shadow-sm'
        : 'justify-center bg-gray-900 text-white shadow-sm'
      : expanded
        ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        : 'justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }`

const SidebarMenuItem = ({
  label,
  path,
  icon: Icon,
  expanded,
  active = false,
  open = false,
  onClick,
}: SidebarMenuItemProps) => {
  const content = (
    <>
      <span className="absolute left-2.5 flex h-5 w-5 items-center justify-center">
        <Icon size={17} strokeWidth={1.9} />
      </span>

      {expanded && (
        <span className="ml-11 whitespace-nowrap">
          {label}
        </span>
      )}
    </>
  )

  if (path) {
    return (
      <NavLink
        to={path}
        title={!expanded ? label : undefined}
        className={({ isActive }) =>
          getItemClass({
            isActive,
            expanded,
          })
        }
      >
        {content}
      </NavLink>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      title={!expanded ? label : undefined}
      className={getItemClass({
        isActive: active,
        expanded,
      })}
    >
      {content}

      {expanded && (
        <span className="absolute right-2.5">
          {open ? (
            <ChevronDown size={14} strokeWidth={1.8} />
          ) : (
            <ChevronRight size={14} strokeWidth={1.8} />
          )}
        </span>
      )}
    </button>
  )
}

export default SidebarMenuItem