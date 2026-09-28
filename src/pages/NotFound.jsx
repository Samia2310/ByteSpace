import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
        <p className="text-brand-blue font-extrabold text-7xl mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-block bg-brand-lime text-[#14142B] font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
        >
          Back to Home
        </Link>
      </div>
    </>
  )
}
