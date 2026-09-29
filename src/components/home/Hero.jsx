import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Squiggle from '../decorations/Squiggle'
import Triangle3D from '../decorations/Triangle3D'
import Cube3D from '../decorations/Cube3D'
import Ring from '../decorations/Ring'
import boyFigure from '../../assets/boy.png'

export default function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSearch(event) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    navigate(`/search${params.size ? `?${params}` : ''}`)
  }

  return (
    <section className="relative bg-brand-blue bg-grid overflow-hidden">
      <Navbar transparent />

      {/* Decorative shapes — sit in the blue area, above the blob */}
      <Squiggle
        color="#D4F72E"
        className="absolute -left-6 top-20 md:top-28 -rotate-[15deg] w-28 h-44 md:w-40 md:h-64 opacity-95 z-10 hidden sm:block"
      />
      <Squiggle
        color="#ffffff"
        className="absolute left-32 top-56 md:left-52 md:top-72 rotate-[6deg] w-14 h-24 md:w-20 md:h-32 opacity-90 hidden sm:block z-10"
      />
      <Cube3D className="absolute -right-8 top-28 md:top-36 w-28 h-36 md:w-40 md:h-52 opacity-95 hidden sm:block z-10" />
      <Triangle3D className="absolute right-[8%] top-[40%] md:top-[36%] w-16 h-16 md:w-28 md:h-28 hidden sm:block z-10" />

      <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-0 text-center">
        <h1 className="text-white font-extrabold leading-[1.08] text-[2rem] sm:text-5xl md:text-[4.5rem] tracking-[-0.02em]">
          Get Access to Hundreds<br className="hidden sm:block" /> Courses Available
        </h1>
        <p className="text-white/80 mt-4 md:mt-5 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-6 md:mt-8 mx-auto max-w-xl flex items-center max-[420px]:flex-col bg-white rounded-full max-[420px]:rounded-2xl p-1.5 shadow-[0_14px_30px_rgba(0,0,0,0.16)]"
        >
          <div className="flex items-center flex-1 w-full px-4 gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full py-2 max-[420px]:py-1.5 outline-none text-sm placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-brand-lime text-[#14142B] font-semibold px-6 py-2.5 max-[420px]:py-1.5 rounded-full text-sm border border-[#bce000] shadow-[0_4px_0_#b7d400] hover:translate-y-px hover:shadow-[0_2px_0_#b7d400] transition whitespace-nowrap max-[420px]:w-full"
          >
            Search
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="11" cy="11" r="6" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
        </form>
      </div>

      {/* Bottom lime blob + person + floating cards */}
      <div className="relative mt-6 md:mt-4 h-[320px] sm:h-[420px] md:h-[540px]">
        <div
  className="absolute left-0 right-0 md:left-1/2 md:right-auto md:-translate-x-1/2 bottom-0 w-full md:w-[103%] md:max-w-[1200px] h-[180px] sm:h-[400px] md:h-[460px] bg-brand-lime z-0"
  style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
/>

        {/* Neon lime ring */}
        <Ring
          color="#D4F72E"
          size={130}
          className="absolute left-[-50px] bottom-2 md:left-[-20px] md:bottom-4 hidden sm:block z-10 opacity-95 drop-shadow-[0_0_24px_rgba(212,247,46,0.85)]"
        />
        <Squiggle
          color="#ffffff"
          className="absolute right-4 bottom-12 md:right-10 md:bottom-16 rotate-[8deg] w-14 h-24 md:w-20 md:h-32 hidden md:block z-10"
        />

        <div className="relative z-20 flex justify-center h-full">
          <img
            src={boyFigure}
            alt="Student wearing headphones holding a laptop"
            className="w-[200px] sm:w-[360px] md:w-[440px] h-auto object-contain self-end drop-shadow-2xl"
          />
        </div>

        {/* Floating info cards */}
        <div className="absolute left-[3%] sm:left-[10%] top-[14%] sm:top-[18%] max-[420px]:left-3 max-[420px]:top-4 bg-white rounded-2xl shadow-xl px-3 sm:px-5 py-3 sm:py-4 w-[128px] sm:w-[200px] z-20">
          <p className="font-semibold text-[11px] sm:text-base">UI/UX Design</p>
          <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
            200 Courses &nbsp;•&nbsp; 1000+ Students
          </p>
        </div>

        <div className="absolute right-[3%] sm:right-[12%] top-[22%] sm:top-[26%] max-[420px]:right-3 max-[420px]:top-4 bg-white rounded-2xl shadow-xl px-3 sm:px-5 py-3 sm:py-4 w-[128px] sm:w-[190px] z-20">
          <p className="text-gray-500 text-[10px] sm:text-sm">Learning Progress</p>
          <p className="font-extrabold text-xl sm:text-3xl mt-1">55%</p>
          <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-brand-lime w-[55%]" />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 sm:left-[14%] sm:translate-x-0 bottom-[8%] bg-white rounded-2xl shadow-xl px-5 py-4 w-[min(250px,90vw)] sm:w-[210px] hidden sm:block z-20">
          <p className="text-gray-500 text-xs whitespace-nowrap">Happy Students</p>
          <p className="font-semibold text-sm mt-1 whitespace-nowrap">
            4.5 <span className="text-gray-400">(240)</span> ⭐
          </p>
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