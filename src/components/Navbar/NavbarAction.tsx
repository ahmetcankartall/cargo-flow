import type { LucideIcon } from 'lucide-react'

type NavbarActionProps = {
  title: string
  icon: LucideIcon
  onClick?: () => void
}

const NavbarAction = ({
  title,
  icon: Icon,
  onClick,
}: NavbarActionProps) => {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
    >
      <Icon size={20} strokeWidth={1.8} />
      <span>{title}</span>
    </button>
  )
}

export default NavbarAction