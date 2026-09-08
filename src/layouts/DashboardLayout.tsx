import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'

function DashboardLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar onExpandedChange={setIsSidebarExpanded} />

      <div
        className={`min-h-screen transition-all duration-300 ${
          isSidebarExpanded ? 'ml-64' : 'ml-20'
        }`}
      >
        <Navbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout