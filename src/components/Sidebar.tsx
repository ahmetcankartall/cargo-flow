import { useEffect, useState } from 'react'
import {
  LayoutDashboard,
  Truck,
  ArrowLeftRight,
  WalletCards,
  CarFront,
  Users,
  Fuel,
  MessageSquare,
  Plug,
  UserCircle,
  ChevronDown,
  ChevronRight,
  Check,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const getSubLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
    isActive
      ? 'bg-gray-100 font-medium text-gray-900'
      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
  }`

const SubMenuItem = ({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) => (
  <NavLink to={to} className={getSubLinkClass}>
    <span className="ml-1 text-gray-300">○</span>
    <span>{children}</span>
  </NavLink>
)

const Sidebar = ({
  onExpandedChange,
}: {
  onExpandedChange: (expanded: boolean) => void
}) => {
  const [isPinned, setIsPinned] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const [openMenus, setOpenMenus] = useState({
    transfers: false,
    currentAccounts: false,
    accounts: false,
    vehicles: false,
    drivers: false,
  })

  const isExpanded = isPinned || isHovered

  useEffect(() => {
    onExpandedChange(isExpanded)
  }, [isExpanded, onExpandedChange])

  const toggleMenu = (menu: keyof typeof openMenus) => {
    setOpenMenus((current) => {
      const isCurrentlyOpen = current[menu]

      return {
        transfers: false,
        currentAccounts: false,
        accounts: false,
        vehicles: false,
        drivers: false,
        [menu]: !isCurrentlyOpen,
      }
    })
  }

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
      isActive
        ? 'bg-gray-100 font-medium text-gray-900'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LOGO / HEADER */}
      <div className="flex h-16 items-center border-b border-gray-200 px-4">
        {/* Logo her zaman gösteriliyor */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white">
            <Truck size={20} />
          </div>
          {isExpanded && (
            <span className="text-lg font-bold text-gray-900">
              CargoFlow
            </span>
          )}
        </div>

        {/* Sadece geniş durumda pin butonu göster */}
        {isExpanded && (
          <button
            type="button"
            onClick={() => setIsPinned(!isPinned)}
            className={`ml-auto rounded-lg p-2 transition ${
              isPinned
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-700'
            }`}
            title={
              isPinned
                ? 'Menüyü sabitlemeyi kaldır'
                : 'Menüyü sabitle'
            }
          >
            <Check size={17} />
          </button>
        )}
      </div>

      {/* MENU (kalan kısım aynı) */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        {/* GENEL BAKIŞ */}
        <div className="mb-6">
          {isExpanded && (
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Genel Bakış
            </p>
          )}

          <NavLink
            to="/dashboard"
            className={getLinkClass}
            title={!isExpanded ? 'Dashboard' : undefined}
          >
            <LayoutDashboard size={18} />
            {isExpanded && <span>Dashboard</span>}
          </NavLink>
        </div>

        {/* OPERASYON */}
        <div className="mb-6">
          {isExpanded && (
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Operasyon
            </p>
          )}

          <button
            type="button"
            onClick={() => toggleMenu('transfers')}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <div
              className={`flex items-center ${
                isExpanded ? 'gap-3' : 'justify-center'
              }`}
            >
              <Truck size={18} />
              {isExpanded && <span>Transferler</span>}
            </div>

            {isExpanded &&
              (openMenus.transfers ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </button>

          {isExpanded && openMenus.transfers && (
            <div className="mt-1 space-y-1 pl-4">
              <SubMenuItem to="/operations/summary">
                Operasyon Özeti
              </SubMenuItem>

              <SubMenuItem to="/operations/current">
                Operasyon Güncel
              </SubMenuItem>

              <SubMenuItem to="/operations">
                Operasyon
              </SubMenuItem>

              <SubMenuItem to="/price-lists">
                Fiyat Listeleri
              </SubMenuItem>

              <SubMenuItem to="/locations">
                Yerler
              </SubMenuItem>
            </div>
          )}
        </div>

        {/* HESAPLAR */}
        <div className="mb-6">
          {isExpanded && (
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Hesaplar
            </p>
          )}

          {/* Cari İşlemler */}
          <button
            type="button"
            onClick={() => toggleMenu('currentAccounts')}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <div
              className={`flex items-center ${
                isExpanded ? 'gap-3' : 'justify-center'
              }`}
            >
              <ArrowLeftRight size={18} />
              {isExpanded && <span>Cari İşlemler</span>}
            </div>

            {isExpanded &&
              (openMenus.currentAccounts ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </button>

          {isExpanded && openMenus.currentAccounts && (
            <div className="mt-1 space-y-1 pl-4">
              <SubMenuItem to="/current-accounts">
                Güncel Durum
              </SubMenuItem>

              <SubMenuItem to="/current-accounts/proforma">
                Proforma Faturalar
              </SubMenuItem>

              <SubMenuItem to="/current-accounts/sales">
                Satışlar
              </SubMenuItem>

              <SubMenuItem to="/current-accounts/expenses">
                Giderler
              </SubMenuItem>

              <SubMenuItem to="/current-accounts/collections">
                Tahsilatlar – Ödemeler
              </SubMenuItem>
            </div>
          )}

          {/* Hesaplar */}
          <button
            type="button"
            onClick={() => toggleMenu('accounts')}
            className="mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <div
              className={`flex items-center ${
                isExpanded ? 'gap-3' : 'justify-center'
              }`}
            >
              <WalletCards size={18} />
              {isExpanded && <span>Hesaplar</span>}
            </div>

            {isExpanded &&
              (openMenus.accounts ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </button>

          {isExpanded && openMenus.accounts && (
            <div className="mt-1 space-y-1 pl-4">
              <SubMenuItem to="/accounts/customers">
                Müşteriler
              </SubMenuItem>

              <SubMenuItem to="/accounts/subcontractors">
                Taşeronlar
              </SubMenuItem>

              <SubMenuItem to="/accounts/suppliers">
                Tedarikçiler
              </SubMenuItem>

              <SubMenuItem to="/accounts/cash-registers">
                Kasalar
              </SubMenuItem>

              <SubMenuItem to="/accounts/banks">
                Bankalar
              </SubMenuItem>

              <SubMenuItem to="/accounts/employees">
                Personel
              </SubMenuItem>
            </div>
          )}
        </div>

        {/* ARAÇLAR */}
        <div className="mb-6">
          {isExpanded && (
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Araçlar
            </p>
          )}

          {/* Araçlar */}
          <button
            type="button"
            onClick={() => toggleMenu('vehicles')}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <div
              className={`flex items-center ${
                isExpanded ? 'gap-3' : 'justify-center'
              }`}
            >
              <CarFront size={18} />
              {isExpanded && <span>Araçlar</span>}
            </div>

            {isExpanded &&
              (openMenus.vehicles ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </button>

          {isExpanded && openMenus.vehicles && (
            <div className="mt-1 space-y-1 pl-4">
              <SubMenuItem to="/vehicles">
                Araçlar
              </SubMenuItem>

              <SubMenuItem to="/vehicles/reminders">
                Hatırlatıcılar
              </SubMenuItem>

              <SubMenuItem to="/vehicles/deductions">
                Araç Kesintileri
              </SubMenuItem>

              <SubMenuItem to="/vehicles/rental-contracts">
                Kiralama Sözleşmeleri
              </SubMenuItem>
            </div>
          )}

          {/* Sürücüler */}
          <button
            type="button"
            onClick={() => toggleMenu('drivers')}
            className="mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <div
              className={`flex items-center ${
                isExpanded ? 'gap-3' : 'justify-center'
              }`}
            >
              <Users size={18} />
              {isExpanded && <span>Sürücüler</span>}
            </div>

            {isExpanded &&
              (openMenus.drivers ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </button>

          {isExpanded && openMenus.drivers && (
            <div className="mt-1 space-y-1 pl-4">
              <SubMenuItem to="/drivers">
                Sürücüler
              </SubMenuItem>

              <SubMenuItem to="/drivers/vehicle-assignments">
                Sürücü Araç Atamaları
              </SubMenuItem>

              <SubMenuItem to="/drivers/history">
                Sürücü Geçmişi
              </SubMenuItem>
            </div>
          )}

          {/* Akaryakıt */}
          <NavLink
            to="/fuels"
            className={getLinkClass}
            title={!isExpanded ? 'Akaryakıt' : undefined}
          >
            <Fuel size={18} />
            {isExpanded && <span>Akaryakıt</span>}
          </NavLink>
        </div>

        {/* AYARLAR */}
        <div>
          {isExpanded && (
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Ayarlar
            </p>
          )}

          <NavLink
            to="/account"
            className={getLinkClass}
            title={!isExpanded ? 'Hesap Bilgileri' : undefined}
          >
            <UserCircle size={18} />
            {isExpanded && <span>Hesap Bilgileri</span>}
          </NavLink>

          <NavLink
            to="/users"
            className={getLinkClass}
            title={!isExpanded ? 'Kullanıcılar' : undefined}
          >
            <Users size={18} />
            {isExpanded && <span>Kullanıcılar</span>}
          </NavLink>

          <NavLink
            to="/sms-settings"
            className={getLinkClass}
            title={!isExpanded ? 'SMS Ayarları' : undefined}
          >
            <MessageSquare size={18} />
            {isExpanded && <span>SMS Ayarları</span>}
          </NavLink>

          <NavLink
            to="/integrations"
            className={getLinkClass}
            title={!isExpanded ? 'Entegrasyonlar' : undefined}
          >
            <Plug size={18} />
            {isExpanded && <span>Entegrasyonlar</span>}
          </NavLink>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar