import {
  Package,
  Truck,
  ClipboardList,
  Container,
} from 'lucide-react'
import ShipmentStatusChart from '../features/dashboard/components/ShipmentStatusChart'
import ShipmentChart from '../features/dashboard/components/ShipmentChart'

function DashboardPage() {
  const stats = [
    {
      title: 'Toplam Sevkiyat',
      value: '248',
      icon: Package,
      description: 'Tüm sevkiyatlar',
    },
    {
      title: 'Aktif Sevkiyat',
      value: '42',
      icon: Truck,
      description: 'Şu anda taşımada',
    },
    {
      title: 'Bekleyen Talepler',
      value: '18',
      icon: ClipboardList,
      description: 'Onay bekleyen',
    },
    {
      title: 'Aktif Araçlar',
      value: '67',
      icon: Container,
      description: 'Sistemde aktif',
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Genel Bakış</h1>

        <p className="mt-1 text-gray-500">
          CargoFlow operasyonlarına genel bakış.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.title}
              className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {stat.value}
                  </p>
                </div>

                <div className="rounded-lg bg-gray-100 p-2.5">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {stat.description}
              </p>
            </div>
          )
        })}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
  <ShipmentChart />
  <ShipmentStatusChart />
</div>
    </div>
  )
}

export default DashboardPage