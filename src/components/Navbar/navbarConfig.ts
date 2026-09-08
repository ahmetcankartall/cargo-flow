import type { LucideIcon } from 'lucide-react'
import {
  Landmark,
  BusFront,
  FileText,
  LayoutGrid,
} from 'lucide-react'

export type NavbarMenuItem = {
  title: string
  icon: LucideIcon
  to: string
}

export const navbarMenuItems: NavbarMenuItem[] = [
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