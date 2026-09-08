import type { LucideIcon } from 'lucide-react'
import {
  ArrowLeftRight,
  CarFront,
  Fuel,
  LayoutDashboard,
  MessageSquare,
  Plug,
  UserCircle,
  Users,
  WalletCards,
} from 'lucide-react'

export type SidebarLinkItem = {
  type: 'link'
  label: string
  path: string
  icon: LucideIcon
}

export type SidebarMenuItem = {
  type: 'menu'
  id: string
  label: string
  icon: LucideIcon
  activePrefixes: string[]
  items: Array<{ label: string; path: string }>
}

export type SidebarItem = SidebarLinkItem | SidebarMenuItem

export type SidebarSection = {
  label: string
  items: SidebarItem[]
}

export const sidebarSections: SidebarSection[] = [
  {
    label: 'Genel Bakış',
    items: [{ type: 'link', label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard }],
  },
  {
    label: 'Operasyon',
    items: [
      {
        type: 'menu',
        id: 'transfers',
        label: 'Transferler',
        icon: ArrowLeftRight,
        activePrefixes: ['/operations', '/price-lists', '/locations'],
        items: [
          { label: 'Operasyon Özeti', path: '/operations/summary' },
          { label: 'Operasyon Güncel', path: '/operations/current' },
          { label: 'Operasyon', path: '/operations' },
          { label: 'Fiyat Listeleri', path: '/price-lists' },
          { label: 'Yerler', path: '/locations' },
        ],
      },
    ],
  },
  {
    label: 'Hesaplar',
    items: [
      {
        type: 'menu',
        id: 'currentAccounts',
        label: 'Cari İşlemler',
        icon: WalletCards,
        activePrefixes: ['/current-accounts'],
        items: [
          { label: 'Güncel Durum', path: '/current-accounts' },
          { label: 'Proforma Faturalar', path: '/current-accounts/proforma' },
          { label: 'Satışlar', path: '/current-accounts/sales' },
          { label: 'Giderler', path: '/current-accounts/expenses' },
          { label: 'Tahsilatlar – Ödemeler', path: '/current-accounts/collections' },
        ],
      },
      {
        type: 'menu',
        id: 'accounts',
        label: 'Hesaplar',
        icon: Users,
        activePrefixes: ['/accounts'],
        items: [
          { label: 'Müşteriler', path: '/accounts/customers' },
          { label: 'Taşeronlar', path: '/accounts/subcontractors' },
          { label: 'Tedarikçiler', path: '/accounts/suppliers' },
          { label: 'Kasalar', path: '/accounts/cash-registers' },
          { label: 'Bankalar', path: '/accounts/banks' },
          { label: 'Personel', path: '/accounts/employees' },
        ],
      },
    ],
  },
  {
    label: 'Araçlar',
    items: [
      {
        type: 'menu',
        id: 'vehicles',
        label: 'Araçlar',
        icon: CarFront,
        activePrefixes: ['/vehicles'],
        items: [
          { label: 'Araçlar', path: '/vehicles' },
          { label: 'Hatırlatıcılar', path: '/vehicles/reminders' },
          { label: 'Araç Kesintileri', path: '/vehicles/deductions' },
          { label: 'Kiralama Sözleşmeleri', path: '/vehicles/rental-contracts' },
        ],
      },
      {
        type: 'menu',
        id: 'drivers',
        label: 'Sürücüler',
        icon: Users,
        activePrefixes: ['/drivers'],
        items: [
          { label: 'Sürücüler', path: '/drivers' },
          { label: 'Sürücü Araç Atamaları', path: '/drivers/vehicle-assignments' },
          { label: 'Sürücü Geçmişi', path: '/drivers/history' },
        ],
      },
      { type: 'link', label: 'Akaryakıt', path: '/fuels', icon: Fuel },
    ],
  },
  {
    label: 'Ayarlar',
    items: [
      { type: 'link', label: 'Hesap Bilgileri', path: '/account', icon: UserCircle },
      { type: 'link', label: 'Kullanıcılar', path: '/users', icon: Users },
      { type: 'link', label: 'SMS Ayarları', path: '/sms-settings', icon: MessageSquare },
      { type: 'link', label: 'Entegrasyonlar', path: '/integrations', icon: Plug },
    ],
  },
]
