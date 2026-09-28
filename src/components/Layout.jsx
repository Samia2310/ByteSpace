import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
