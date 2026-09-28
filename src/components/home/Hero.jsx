import { useState } from 'react'
import Navbar from '../Navbar'
import Squiggle from '../decorations/Squiggle'
import Triangle3D from '../decorations/Triangle3D'
import Cube3D from '../decorations/Cube3D'
import Ring from '../decorations/Ring'

export default function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section className="relative bg-brand-blue bg-grid overflow-hidden">
      <Navbar transparent />

      {/* Decorative shapes */}
      <Squiggle
        color="#D4F72E"
        className="absolute -left-6 top-24 md:top-32 rotate-[-8deg] w-24 h-40 md:w-36 md:h-56 opacity-90"
      />
      <Squiggle
        color="#ffffff"
        className="absolute left-40 top-60 md:left-64 md:top-72 w-16 h-28 md:w-24 md:h-40 opacity-90 hidden sm:block"
      />
      <Cube3D className="absolute -right-10 top-40 md:top-48 w-28 h-36 md:w-40 md:h-52 opacity-95 hidden sm:block" />
      <Triangle3D className="absolute right-16 bottom-24 md:right-28 md:bottom-16 w-20 h-20 md:w-32 md:h-32 hidden sm:block" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-8 md:pt-10 pb-0 text-center">
        <h1 className="text-white font-extrabold leading-tight text-[2.1rem] sm:text-5xl md:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="text-white/80 mt-6 max-w-2xl mx-auto text-sm md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 mx-auto max-w-xl flex items-center bg-white rounded-full p-1.5 shadow-lg"
        >
          <div className="flex items-center flex-1 px-4 gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full py-2.5 outline-none text-sm placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-brand-lime text-[#14142B] font-semibold px-6 py-2.5 rounded-full text-sm hover:brightness-95 transition whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>

      {/* Bottom lime blob + person + floating cards */}
      <div className="relative mt-10 md:mt-4">
        <div className="absolute inset-x-0 bottom-0 h-[70%] md:h-[75%] bg-brand-lime rounded-t-[50%] mx-[-10%]" />

        <Ring color="#1A2CF0" size={140} className="absolute left-4 bottom-24 hidden md:block opacity-90" />
        <Squiggle color="#ffffff" className="absolute right-6 bottom-10 w-16 h-28 md:w-20 md:h-36 hidden md:block" />

        <div className="relative z-10 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
            alt="Student wearing headphones holding a laptop"
            className="w-[260px] sm:w-[340px] md:w-[420px] object-cover object-top drop-shadow-2xl"
          />
        </div>

        {/* Floating info cards */}
        <div className="absolute left-[6%] sm:left-[14%] bottom-[30%] sm:bottom-[26%] bg-white rounded-2xl shadow-xl px-5 py-4 w-[150px] sm:w-[190px]">
          <p className="font-semibold text-sm sm:text-base">UI/UX Design</p>
          <p className="text-gray-400 text-[11px] sm:text-xs mt-1">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
        </div>

        <div className="absolute right-[6%] sm:right-[16%] bottom-[38%] sm:bottom-[34%] bg-white rounded-2xl shadow-xl px-5 py-4 w-[150px] sm:w-[190px]">
          <p className="text-gray-500 text-xs sm:text-sm">Learning Progress</p>
          <p className="font-extrabold text-2xl sm:text-3xl mt-1">55%</p>
          <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-brand-lime w-[55%]" />
          </div>
        </div>

        <div className="absolute left-[4%] sm:left-[10%] bottom-[6%] bg-white rounded-2xl shadow-xl px-5 py-4 w-[170px] sm:w-[210px] hidden sm:block">
          <p className="text-gray-500 text-xs">Happy Students</p>
          <p className="font-semibold text-sm mt-1">4.5 <span className="text-gray-400">(240)</span> ⭐</p>
          <div className="flex items-center mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/40?img=${i + 10}`}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-white -ml-2 first:ml-0"
              />
            ))}
            <span className="w-7 h-7 rounded-full bg-brand-lime text-[10px] font-semibold flex items-center justify-center -ml-2 border-2 border-white">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
