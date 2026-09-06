import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Nis', shipments: 32 },
  { month: 'May', shipments: 45 },
  { month: 'Haz', shipments: 38 },
  { month: 'Tem', shipments: 52 },
  { month: 'Ağu', shipments: 61 },
  { month: 'Eyl', shipments: 48 },
]

function ShipmentChart() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Aylık Sevkiyatlar
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Son 6 aydaki sevkiyat sayısı
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="shipments"
              stroke="#111827"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ShipmentChart