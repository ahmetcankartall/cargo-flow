import { useEffect, useState } from 'react'
import { Check, Truck } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import SidebarMenuItem from './SidebarMenuItem'
import SidebarSubMenu from './SidebarSubMenu'
import { sidebarSections } from './sidebarConfig'

type SidebarProps = {
  onExpandedChange?: (expanded: boolean) => void
}

const Sidebar = ({ onExpandedChange }: SidebarProps) => {
  const location = useLocation()
  const [isPinned, setIsPinned] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const isExpanded = isPinned || isHovered

  useEffect(() => {
    onExpandedChange?.(isExpanded)
  }, [isExpanded, onExpandedChange])

  const toggleMenu = (menuId: string) => {
    setOpenMenu((currentMenu) => (currentMenu === menuId ? null : menuId))
  }

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <header className={`flex h-16 shrink-0 items-center border-b border-gray-100 ${isExpanded ? 'justify-between px-4' : 'justify-center px-2'}`}>
        <div className={`flex items-center ${isExpanded ? 'gap-3' : 'justify-center'}`}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm">
            <Truck size={18} strokeWidth={2.2} />
          </div>
          {isExpanded && (
            <div>
              <p className="whitespace-nowrap text-sm font-light tracking-tight text-gray-900">CargoFlow</p>
              <p className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-gray-400">Logistics</p>
            </div>
          )}
        </div>

        {isExpanded && (
          <button
            type="button"
            onClick={() => setIsPinned((current) => !current)}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition-all duration-200 ${isPinned ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'}`}
            title={isPinned ? 'Menüyü sabitlemeyi kaldır' : 'Menüyü sabitle'}
          >
            <Check size={14} strokeWidth={2} />
          </button>
        )}
      </header>

      <nav className="flex-1 overflow-y-auto px-2.5 py-4 scrollbar-thin">
        {sidebarSections.map((section) => (
          <section key={section.label} className="mb-4 last:mb-0">
            {isExpanded ? (
              <p className="mb-1.5 h-4 px-2.5 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-gray-400">{section.label}</p>
            ) : (
              <div className="mb-1.5 flex h-4 items-center px-2.5"><div className="h-px w-full bg-gray-200" /></div>
            )}

            <div className="space-y-1">
              {section.items.map((item) => {
                if (item.type === 'link') {
                  return <SidebarMenuItem key={item.path} label={item.label} path={item.path} icon={item.icon} expanded={isExpanded} />
                }

                const isActive = item.activePrefixes.some((prefix) => location.pathname.startsWith(prefix))
                const isOpen = openMenu === item.id

                return (
                  <div key={item.id}>
                    <SidebarMenuItem
                      label={item.label}
                      icon={item.icon}
                      expanded={isExpanded}
                      active={isActive}
                      open={isOpen}
                      onClick={() => toggleMenu(item.id)}
                    />
                    {isExpanded && isOpen && <SidebarSubMenu items={item.items} />}
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </nav>

      <footer className="shrink-0 border-t border-gray-100 p-2.5">
        <div className={`flex items-center rounded-lg bg-gray-50 ${isExpanded ? 'gap-3 px-2.5 py-2' : 'justify-center p-2'}`}>
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-semibold text-white">AK</div>
          {isExpanded && (
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-gray-800">Ahmet</p>
              <p className="truncate text-[9px] text-gray-400">Yönetici</p>
            </div>
          )}
        </div>
      </footer>
    </aside>
  )
}

export default Sidebar
