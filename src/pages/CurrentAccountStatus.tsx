import {
  FileText,
  ArrowDownLeft,
  ArrowUpRight,
  Receipt,
  Users,
  Building2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from 'lucide-react'

const CurrentAccountStatus = () => {
  // Örnek state'ler (Backend bağlandığında buralardan veriler çekilebilir)
  const dateRange = '1 – 30 Eylül 2026'

  return (
    <div className="p-6 space-y-6">
      {/* SAYFA BAŞLIĞI */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <h1 className="text-lg font-semibold text-gray-800">Güncel Durum</h1>
      </div>

      {/* FİLTRE VE YENİLEME ÇUBUĞU */}
      <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white">
            <Calendar size={16} className="text-gray-400" />
            <span>{dateRange}</span>
          </div>

          <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
            <ChevronRight size={18} />
          </button>
        </div>

        <button 
          onClick={() => window.location.reload()} 
          className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
          title="Yenile"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      {/* 4'LÜ KARTLAR GRID YAPISI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* 1. SATIŞLAR */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="bg-[#1e1b4b] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={18} />
                <span className="font-medium text-sm">Satışlar</span>
              </div>
              <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                0 Adet
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">TOPLAM</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">0,00</span>
                <span className="text-lg font-medium text-gray-500">₺</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. TAHSİLATLAR */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="bg-[#14532d] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowDownLeft size={18} />
                <span className="font-medium text-sm">Tahsilatlar</span>
              </div>
              <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                0 Adet
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">TOPLAM</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">0,00</span>
                <span className="text-lg font-medium text-gray-500">₺</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. GİDERLER (Alt detay kırılımlı) */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="bg-[#991b1b] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowUpRight size={18} />
                <span className="font-medium text-sm">Giderler</span>
              </div>
              <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                0 Adet
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">TOPLAM</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">0,00</span>
                <span className="text-lg font-medium text-gray-500">₺</span>
              </div>
            </div>
          </div>

          {/* Alt Kırılım Detayları */}
          <div className="border-t border-gray-100 px-5 py-3 space-y-2 bg-gray-50/50">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Receipt size={14} className="text-gray-400" />
                <span>Gider Faturası</span>
              </div>
              <span className="bg-gray-200/70 px-2 py-0.5 rounded-full font-medium text-gray-700">0</span>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Users size={14} className="text-gray-400" />
                <span>Maaş / Prim</span>
              </div>
              <span className="bg-gray-200/70 px-2 py-0.5 rounded-full font-medium text-gray-700">0</span>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Building2 size={14} className="text-gray-400" />
                <span>Vergi / SGK</span>
              </div>
              <span className="bg-gray-200/70 px-2 py-0.5 rounded-full font-medium text-gray-700">0</span>
            </div>
          </div>
        </div>

        {/* 4. ÖDEMELER */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="bg-[#831843] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowUpRight size={18} />
                <span className="font-medium text-sm">Ödemeler</span>
              </div>
              <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                0 Adet
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">TOPLAM</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">0,00</span>
                <span className="text-lg font-medium text-gray-500">₺</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CurrentAccountStatus