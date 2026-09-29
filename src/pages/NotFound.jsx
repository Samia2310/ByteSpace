import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <section className="relative bg-brand-blue bg-grid-strong overflow-hidden">
      <Navbar transparent />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 pt-28 sm:pt-36 md:pt-40 pb-10 sm:pb-12 md:pb-14 text-center flex flex-col items-center">
        <p
          aria-hidden="true"
          className="relative z-0 font-bold leading-[0.78] tracking-[-0.02em] text-[38vw] sm:text-[15rem] md:text-[19rem] lg:text-[30rem] bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(212,247,46,0.96) 0%, rgba(212,247,46,0.82) 46%, rgba(190,224,75,0.48) 72%, rgba(26,44,240,0) 100%)',
          }}
        >
          404
        </p>

        <h1 className="relative z-10 text-white font-semibold leading-[1.08] text-[1.9rem] sm:text-5xl md:text-[4.2rem] lg:text-[4.6rem] max-w-[1080px] -mt-4 sm:-mt-10 md:-mt-14 px-2">
          <span className="block">The page you are looking</span>
          <span className="block">for doesn&apos;t exist</span>
        </h1>

        <p className="text-white/75 mt-6 sm:mt-8 md:mt-10 max-w-xl mx-auto text-xs sm:text-sm md:text-base px-4">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          to="/"
          className="inline-block mt-6 sm:mt-8 md:mt-10 bg-brand-lime text-[#14142B] font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:brightness-95 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}