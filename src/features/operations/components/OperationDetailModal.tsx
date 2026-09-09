import type { CurrentOperation } from '../types'

interface Props {
  operation: CurrentOperation
  onClose: () => void
}

export default function OperationDetailModal({
  operation,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        {/* Başlık */}
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Operasyon Detayı
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {operation.operationName}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Kapat
          </button>
        </div>

        <div className="space-y-6 p-6">
          {/* Genel Bilgiler */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Genel Bilgiler
            </h3>

            <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs text-slate-400">Durum</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.status}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Tarih</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.date}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Saat</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.time}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Müşteri</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.customerName}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Operasyon Türü</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.operationType}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Operasyon Adı</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.operationName}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Yolcu Sayısı</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.passengerCount}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Ana Yolcu</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.mainPassenger}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">OP Seri No</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.operationSerialNo}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">OP Kodu</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.operationCode}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">OP Grubu</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.operationGroup}
                </p>
              </div>
            </div>
          </section>

          {/* Güzergâh */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Güzergâh
            </h3>

            <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-xs text-slate-400">Başlangıç Yeri</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.startLocation}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Durak</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.stop}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Bitiş Yeri</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.endLocation}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Şehir</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.endCity}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Bitiş Tarihi</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.endDate}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Bitiş Saati</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.endTime}
                </p>
              </div>
            </div>
          </section>

          {/* Araç & Sürücü */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Araç & Sürücü
            </h3>

            <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs text-slate-400">Araç Türü</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.vehicleType}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Araç Plaka</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.vehiclePlate}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Sürücü</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.driverName}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Taşeron</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.subcontractor}
                </p>
              </div>

              <div className="sm:col-span-2 lg:col-span-4">
                <p className="text-xs text-slate-400">Sürücü Notu</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.driverNote}
                </p>
              </div>
            </div>
          </section>

          {/* Uçuş Bilgileri */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Uçuş Bilgileri
            </h3>

            <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs text-slate-400">Uçuş Kodu</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.flightCode}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Varış / Gidiş Yeri</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.flightLocation}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Uçuş Saati</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.flightTime}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Terminal</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.flightTerminal}
                </p>
              </div>
            </div>
          </section>

          {/* Personel & Buluşma */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Personel & Buluşma
            </h3>

            <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-xs text-slate-400">Rehber</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.guide}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Karşılama Personeli
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.greetingStaff}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Buluşma Noktası
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.meetingPoint}
                </p>
              </div>
            </div>
          </section>

          {/* Ek Bilgiler */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">
              Ek Bilgiler
            </h3>

            <div className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <p className="text-xs text-slate-400">Açıklama</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.description}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Bildirimler</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.notifications}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Ek Hizmetler</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {operation.extraServices}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Fiyat</p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  {operation.price.toLocaleString('tr-TR')} ₺
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}