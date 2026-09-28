import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <section className="relative bg-brand-blue bg-grid overflow-hidden">
      <Navbar transparent />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-10 pb-24 text-center">
        <p
          className="font-extrabold leading-none text-[6.5rem] sm:text-[9rem] md:text-[11rem] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #D4F72E 0%, #D4F72E 45%, #1A2CF0 90%)',
          }}
        >
          404
        </p>

        <h1 className="text-white font-extrabold text-2xl sm:text-4xl md:text-5xl leading-tight -mt-6 sm:-mt-10">
          The page you are looking for doesn&apos;t exist
        </h1>

        <p className="text-white/80 mt-6 max-w-lg mx-auto">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-brand-lime text-[#14142B] font-semibold px-8 py-3.5 rounded-full hover:brightness-95 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
