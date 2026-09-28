import { useState } from 'react'
import Navbar from '../Navbar'

export default function SearchHero() {
  const [query, setQuery] = useState('')
  const [scope, setScope] = useState('Courses')

  return (
    <section className="relative bg-brand-blue bg-grid overflow-hidden">
      <Navbar transparent />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-24 pb-16 md:pb-20 text-center">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl">
          Find Your Next Course
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-9 mx-auto max-w-2xl flex items-center gap-3"
        >
          <div className="flex items-center flex-1 bg-white rounded-full px-5 py-3.5 gap-2 shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full outline-none text-sm placeholder:text-gray-400"
            />
          </div>

          <button
            type="button"
            onClick={() => setScope(scope === 'Courses' ? 'Creators' : 'Courses')}
            className="flex items-center gap-2 bg-brand-lime text-[#14142B] font-semibold px-6 py-3.5 rounded-full text-sm hover:brightness-95 transition whitespace-nowrap"
          >
            {scope}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
