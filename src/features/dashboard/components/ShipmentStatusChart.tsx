import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Bekliyor', value: 18 },
  { name: 'Onaylandı', value: 24 },
  { name: 'Atandı', value: 12 },
  { name: 'Taşımada', value: 42 },
  { name: 'Teslim Edildi', value: 152 },
]

const COLORS = [
  '#9CA3AF',
  '#60A5FA',
  '#A78BFA',
  '#F59E0B',
  '#22C55E',
]

function ShipmentStatusChart() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Sevkiyat Durumları
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Mevcut sevkiyatların durum dağılımı
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ShipmentStatusChart