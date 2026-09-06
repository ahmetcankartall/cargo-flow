function DashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Genel Bakış</h1>
        <p className="mt-1 text-gray-500">
          CargoFlow operasyonlarına genel bakış.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Toplam Sevkiyat</p>
          <p className="mt-2 text-3xl font-bold">248</p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Aktif Sevkiyat</p>
          <p className="mt-2 text-3xl font-bold">42</p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Bekleyen Talepler</p>
          <p className="mt-2 text-3xl font-bold">18</p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Aktif Araçlar</p>
          <p className="mt-2 text-3xl font-bold">67</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage