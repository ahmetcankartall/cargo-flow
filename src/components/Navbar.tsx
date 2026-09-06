function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium">Ahmet</p>
          <p className="text-xs text-gray-500">Operasyon</p>
        </div>

        <button className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50">
          Çıkış Yap
        </button>
      </div>
    </header>
  )
}

export default Navbar