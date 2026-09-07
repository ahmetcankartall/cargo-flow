
import { Search, ListFilter, Archive, Plus, Trash2, Edit } from 'lucide-react'

const vehiclesData = [
  { id: 1, plaka: '09 ATA 815', grup: 'Özmal', aracTuru: 'VİTO', marka: 'MERCEDES', model: 'VİTO', yil: '2021', koltukSayisi: '0' },
  { id: 2, plaka: '35 CIE 095', grup: 'Özmal', aracTuru: 'SPRİNTER', marka: 'MERCEDES', model: 'SPRİNTER', yil: '', koltukSayisi: '0' },
  { id: 3, plaka: '35 DAY 698', grup: 'Özmal', aracTuru: 'VİTO', marka: 'MERCEDES', model: 'VİTO', yil: '2024', koltukSayisi: '9' },
]

export default function VehiclesPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        
        {/* Üst Kısım: Başlık ve Sayaçlar */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Araçlar</h1>
          <div className="flex items-center gap-2">
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-semibold text-sm">
              10
            </span>
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-semibold text-sm">
              7
            </span>
          </div>
        </div>

        {/* Araç Çubuğu: Arama, Filtreler ve Yeni Ekle */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Arama Input */}
            <div className="relative min-w-70">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Ara"
                className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>

            {/* Araç Türleri Butonu */}
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              <ListFilter size={16} />
              Araç Türleri
            </button>

            {/* Arşiv Butonu */}
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              <Archive size={16} />
              Arşiv
            </button>
          </div>

          {/* Yeni Araç Ekle Butonu */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            <Plus size={16} />
            Yeni Araç Ekle
          </button>
        </div>

        {/* Tablo Yapısı */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Plaka</th>
                <th className="py-3 px-4">Grup</th>
                <th className="py-3 px-4">Araç Türü</th>
                <th className="py-3 px-4">Marka</th>
                <th className="py-3 px-4">Model</th>
                <th className="py-3 px-4">Yıl</th>
                <th className="py-3 px-4">Koltuk Sayısı</th>
                <th className="py-3 px-4 text-right">Arşiv</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {vehiclesData.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50/50 transition-colors text-gray-700">
                  <td className="py-4 px-4 font-semibold text-gray-900">{vehicle.plaka}</td>
                  <td className="py-4 px-4 text-gray-600">{vehicle.grup}</td>
                  <td className="py-4 px-4 text-gray-600">{vehicle.aracTuru}</td>
                  <td className="py-4 px-4 text-gray-600">{vehicle.marka}</td>
                  <td className="py-4 px-4 text-gray-600">{vehicle.model}</td>
                  <td className="py-4 px-4 text-gray-600">{vehicle.yil}</td>
                  <td className="py-4 px-4 text-gray-600">{vehicle.koltukSayisi}</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-3 text-gray-600">
                      <button className="hover:text-black transition-colors" title="Arşivle">
                        <Trash2 size={18} />
                      </button>
                      <button className="hover:text-black transition-colors" title="Düzenle">
                        <Edit size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alt Bilgi / Kayıt Sayısı */}
        <div className="mt-4 text-xs text-gray-500">
          3 kayıt
        </div>

      </div>
    </div>
  )
}