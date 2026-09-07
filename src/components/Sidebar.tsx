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
import { NavLink, useLocation } from 'react-router-dom'

const getLinkBaseClass = ({
  isActive,
}: {
  isActive: boolean
}) =>
  `group relative flex h-9 w-full items-center rounded-lg text-xs transition-all duration-200 ${
    isActive
      ? 'bg-gray-900 font-medium text-white shadow-sm'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }`

const getButtonClass = (isActive: boolean) =>
  `group relative flex h-9 w-full items-center rounded-lg text-xs font-medium transition-all duration-200 ${
    isActive
      ? 'bg-gray-900 text-white shadow-sm'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }`

const iconWrapperClass =
  'absolute left-2.5 flex h-5 w-5 items-center justify-center'

const textClass =
  'ml-11 whitespace-nowrap transition-opacity duration-200'

const getSubLinkClass = ({
  isActive,
}: {
  isActive: boolean
}) =>
  `group flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[11px] transition-all duration-200 ${
    isActive
      ? 'bg-gray-100 font-medium text-gray-900 shadow-sm'
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
    {({ isActive }) => (
      <>
        <span
          className={`relative flex h-4 w-4 shrink-0 items-center justify-center ${
            isActive ? 'text-gray-900' : 'text-gray-300'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
              isActive
                ? 'scale-100 bg-gray-900'
                : 'scale-75 bg-gray-300 group-hover:scale-100 group-hover:bg-gray-500'
            }`}
          />
        </span>

        <span className="truncate">{children}</span>
      </>
    )}
  </NavLink>
)

type SidebarProps = {
  onExpandedChange?: (expanded: boolean) => void
}

type MenuOverride = {
  menu: string | null
  pathname: string
}

const Sidebar = ({ onExpandedChange }: SidebarProps) => {
  const location = useLocation()

  const [isPinned, setIsPinned] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const [menuOverride, setMenuOverride] =
    useState<MenuOverride | null>(null)

  const isExpanded = isPinned || isHovered

  const isTransfersActive =
    location.pathname.startsWith('/operations') ||
    location.pathname.startsWith('/price-lists') ||
    location.pathname.startsWith('/locations')

  const isCurrentAccountsActive =
    location.pathname.startsWith('/current-accounts')

  const isAccountsActive =
    location.pathname.startsWith('/accounts')

  const isVehiclesActive =
    location.pathname.startsWith('/vehicles')

  const isDriversActive =
    location.pathname.startsWith('/drivers')

  const activeMenu =
    isTransfersActive
      ? 'transfers'
      : isCurrentAccountsActive
        ? 'currentAccounts'
        : isAccountsActive
          ? 'accounts'
          : isVehiclesActive
            ? 'vehicles'
            : isDriversActive
              ? 'drivers'
              : null

  const currentMenu =
    menuOverride?.pathname === location.pathname
      ? menuOverride.menu
      : activeMenu

  const isTransfersOpen = currentMenu === 'transfers'
  const isCurrentAccountsOpen = currentMenu === 'currentAccounts'
  const isAccountsOpen = currentMenu === 'accounts'
  const isVehiclesOpen = currentMenu === 'vehicles'
  const isDriversOpen = currentMenu === 'drivers'

  // Herhangi bir akordiyon alt menünün açık olup olmadığını kontrol ediyoruz
  const isAnyAccordionOpen =
    isTransfersOpen ||
    isCurrentAccountsOpen ||
    isAccountsOpen ||
    isVehiclesOpen ||
    isDriversOpen

  useEffect(() => {
    onExpandedChange?.(isExpanded)
  }, [isExpanded, onExpandedChange])

  const toggleMenu = (menu: string) => {
    setMenuOverride({
      pathname: location.pathname,
      menu: currentMenu === menu ? null : menu,
    })
  }

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HEADER */}
      <div
        className={`flex h-16 shrink-0 items-center border-b border-gray-100 ${
          isExpanded
            ? 'justify-between px-4'
            : 'justify-center px-2'
        }`}
      >
        <div
          className={`flex items-center ${
            isExpanded ? 'gap-3' : 'justify-center'
          }`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm">
            <Truck size={18} strokeWidth={2.2} />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded
                ? 'w-auto opacity-100'
                : 'w-0 opacity-0'
            }`}
          >
            <p className="whitespace-nowrap text-sm font-light tracking-tight text-gray-900">
              CargoFlow
            </p>

            <p className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-gray-400">
              Logistics
            </p>
          </div>
        </div>

        {isExpanded && (
          <button
            type="button"
            onClick={() => setIsPinned((prev) => !prev)}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition-all duration-200 ${
              isPinned
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'
            }`}
            title={
              isPinned
                ? 'Menüyü sabitlemeyi kaldır'
                : 'Menüyü sabitle'
            }
          >
            <Check
              size={14}
              strokeWidth={2}
            />
          </button>
        )}
      </div>

      {/* MENU - Akordiyon kapalıyken veya daraltılmışken scrollbar gizlendi */}
      <nav
        className={`flex-1 overflow-x-hidden px-2.5 py-4 transition-all ${
          isExpanded && isAnyAccordionOpen
            ? 'overflow-y-auto scrollbar-thin'
            : 'overflow-y-hidden'
        }`}
      >
        {/* =========================
            GENEL BAKIŞ
        ========================== */}
        <div className="mb-4">
          {isExpanded ? (
            <p className="mb-1.5 h-4 px-2.5 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-gray-400">
              Genel Bakış
            </p>
          ) : (
            <div className="mb-1.5 flex h-4 items-center px-2.5">
              <div className="h-px w-full bg-gray-200" />
            </div>
          )}

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              getLinkBaseClass({ isActive })
            }
          >
            <span className={iconWrapperClass}>
              <LayoutDashboard size={17} strokeWidth={1.9} />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Dashboard
            </span>
          </NavLink>
        </div>

        {/* =========================
            OPERASYON
        ========================== */}
        <div className="mb-4">
          {isExpanded ? (
            <p className="mb-1.5 h-4 px-2.5 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-gray-400">
              Operasyon
            </p>
          ) : (
            <div className="mb-1.5 flex h-4 items-center px-2.5">
              <div className="h-px w-full bg-gray-200" />
            </div>
          )}

          <button
            type="button"
            onClick={() => toggleMenu('transfers')}
            className={getButtonClass(isTransfersActive)}
          >
            <span className={iconWrapperClass}>
              <ArrowLeftRight
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Transferler
            </span>

            {isExpanded && (
              <span className="absolute right-2.5">
                {isTransfersOpen ? (
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                  />
                ) : (
                  <ChevronRight
                    size={14}
                    strokeWidth={1.8}
                  />
                )}
              </span>
            )}
          </button>

          {isExpanded && isTransfersOpen && (
            <div className="ml-5 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
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

        {/* =========================
            HESAPLAR
        ========================== */}
        <div className="mb-4">
          {isExpanded ? (
            <p className="mb-1.5 h-4 px-2.5 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-gray-400">
              Hesaplar
            </p>
          ) : (
            <div className="mb-1.5 flex h-4 items-center px-2.5">
              <div className="h-px w-full bg-gray-200" />
            </div>
          )}

          <button
            type="button"
            onClick={() =>
              toggleMenu('currentAccounts')
            }
            className={getButtonClass(
              isCurrentAccountsActive,
            )}
          >
            <span className={iconWrapperClass}>
              <WalletCards
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Cari İşlemler
            </span>

            {isExpanded && (
              <span className="absolute right-2.5">
                {isCurrentAccountsOpen ? (
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                  />
                ) : (
                  <ChevronRight
                    size={14}
                    strokeWidth={1.8}
                  />
                )}
              </span>
            )}
          </button>

          {isExpanded && isCurrentAccountsOpen && (
            <div className="ml-5 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
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

          <button
            type="button"
            onClick={() => toggleMenu('accounts')}
            className={`${getButtonClass(
              isAccountsActive,
            )} mt-1`}
          >
            <span className={iconWrapperClass}>
              <Users
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Hesaplar
            </span>

            {isExpanded && (
              <span className="absolute right-2.5">
                {isAccountsOpen ? (
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                  />
                ) : (
                  <ChevronRight
                    size={14}
                    strokeWidth={1.8}
                  />
                )}
              </span>
            )}
          </button>

          {isExpanded && isAccountsOpen && (
            <div className="ml-5 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
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

        {/* =========================
            ARAÇLAR
        ========================== */}
        <div className="mb-4">
          {isExpanded ? (
            <p className="mb-1.5 h-4 px-2.5 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-gray-400">
              Araçlar
            </p>
          ) : (
            <div className="mb-1.5 flex h-4 items-center px-2.5">
              <div className="h-px w-full bg-gray-200" />
            </div>
          )}

          <button
            type="button"
            onClick={() => toggleMenu('vehicles')}
            className={getButtonClass(isVehiclesActive)}
          >
            <span className={iconWrapperClass}>
              <CarFront
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Araçlar
            </span>

            {isExpanded && (
              <span className="absolute right-2.5">
                {isVehiclesOpen ? (
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                  />
                ) : (
                  <ChevronRight
                    size={14}
                    strokeWidth={1.8}
                  />
                )}
              </span>
            )}
          </button>

          {isExpanded && isVehiclesOpen && (
            <div className="ml-5 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
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

          <button
            type="button"
            onClick={() => toggleMenu('drivers')}
            className={`${getButtonClass(
              isDriversActive,
            )} mt-1`}
          >
            <span className={iconWrapperClass}>
              <Users
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Sürücüler
            </span>

            {isExpanded && (
              <span className="absolute right-2.5">
                {isDriversOpen ? (
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                  />
                ) : (
                  <ChevronRight
                    size={14}
                    strokeWidth={1.8}
                  />
                )}
              </span>
            )}
          </button>

          {isExpanded && isDriversOpen && (
            <div className="ml-5 mt-1 space-y-0.5 border-l border-gray-200 pl-2">
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

          <NavLink
            to="/fuels"
            className={({ isActive }) =>
              `${getLinkBaseClass({
                isActive,
              })} mt-1`
            }
          >
            <span className={iconWrapperClass}>
              <Fuel
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Akaryakıt
            </span>
          </NavLink>
        </div>

        {/* =========================
            AYARLAR
        ========================== */}
        <div className="mt-6 border-t border-gray-100 pt-3">
          {isExpanded ? (
            <p className="mb-1.5 h-4 px-2.5 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-gray-400">
              Ayarlar
            </p>
          ) : (
            <div className="mb-1.5 flex h-4 items-center px-2.5">
              <div className="h-px w-full bg-gray-200" />
            </div>
          )}

          <NavLink
            to="/account"
            className={({ isActive }) =>
              getLinkBaseClass({ isActive })
            }
          >
            <span className={iconWrapperClass}>
              <UserCircle
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Hesap Bilgileri
            </span>
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${getLinkBaseClass({
                isActive,
              })} mt-1`
            }
          >
            <span className={iconWrapperClass}>
              <Users
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Kullanıcılar
            </span>
          </NavLink>

          <NavLink
            to="/sms-settings"
            className={({ isActive }) =>
              `${getLinkBaseClass({
                isActive,
              })} mt-1`
            }
          >
            <span className={iconWrapperClass}>
              <MessageSquare
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              SMS Ayarları
            </span>
          </NavLink>

          <NavLink
            to="/integrations"
            className={({ isActive }) =>
              `${getLinkBaseClass({
                isActive,
              })} mt-1`
            }
          >
            <span className={iconWrapperClass}>
              <Plug
                size={17}
                strokeWidth={1.9}
              />
            </span>

            <span
              className={`${
                isExpanded
                  ? 'opacity-100'
                  : 'opacity-0'
              } ${textClass}`}
            >
              Entegrasyonlar
            </span>
          </NavLink>
        </div>
      </nav>

      {/* FOOTER */}
      <div
        className={`shrink-0 border-t border-gray-100 p-2.5 ${
          isExpanded ? '' : 'flex justify-center'
        }`}
      >
        <div
          className={`flex items-center rounded-lg bg-gray-50 ${
            isExpanded
              ? 'gap-3 px-2.5 py-2'
              : 'justify-center p-2'
          }`}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-semibold text-white">
            AK
          </div>

          {isExpanded && (
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-gray-800">
                Ahmet
              </p>

              <p className="truncate text-[9px] text-gray-400">
                Yönetici
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar