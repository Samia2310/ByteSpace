import { Link } from 'react-router-dom'
import Squiggle from '../decorations/Squiggle'
import Triangle3D from '../decorations/Triangle3D'
import Ring from '../decorations/Ring'

export default function CreatorCTA() {
  return (
    <section className="relative bg-brand-blue bg-grid overflow-hidden py-24 px-6 text-center">
      <Squiggle color="#D4F72E" className="absolute -left-6 top-8 w-24 h-40 hidden sm:block" />
      <Squiggle color="#ffffff" className="absolute left-32 top-4 w-16 h-28 hidden md:block" />
      <Triangle3D className="absolute left-4 bottom-6 w-20 h-20 hidden md:block" />
      <Ring color="#D4F72E" size={140} className="absolute -left-10 bottom-0 hidden sm:block" />

      <Triangle3D className="absolute -right-6 top-6 w-28 h-28 hidden sm:block" />
      <div className="absolute right-0 top-24 w-24 h-32 bg-white rounded-3xl rotate-12 hidden md:block" />
      <Squiggle color="#D4F72E" className="absolute right-10 bottom-4 w-20 h-32 hidden sm:block" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-white/80 mt-6 text-sm md:text-base">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          to="/register"
          className="inline-block mt-8 bg-brand-lime text-[#14142B] font-semibold px-8 py-3.5 rounded-full hover:brightness-95 transition"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  )
}
