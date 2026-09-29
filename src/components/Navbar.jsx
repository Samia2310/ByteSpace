import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/search', label: 'Courses' },
  { to: '/creator/1', label: 'Creators' },
]

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false)
  const textColor = transparent ? 'text-white' : 'text-[#14142B]'

  return (
    <header className={`${transparent ? 'absolute top-0 left-0 right-0 z-30' : 'relative bg-white border-b border-black/5'} w-full`}>
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <Link to="/" className={`flex items-center ${textColor}`}>
          <img src={logo} alt="ByteSpace" className="w-[150px] h-auto" />
        </Link>

        <ul className={`hidden md:flex items-center gap-10 font-medium ${textColor}`}>
          {links.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `transition-opacity hover:opacity-80 ${isActive ? 'opacity-100' : 'opacity-90'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={`hidden md:flex items-center gap-6 font-medium ${textColor}`}>
          <Link to="/login" className="hover:opacity-80 transition-opacity">Sign In</Link>
          <Link
            to="/register"
            className={`hover:opacity-80 transition-opacity ${transparent ? '' : ''}`}
          >
            Join Us
          </Link>
          <button aria-label="Cart" className="hover:opacity-80 transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>

        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full px-6 py-6 flex flex-col gap-4 text-[#14142B] font-medium z-40">
          {links.map((l) => (
            <Link key={l.label} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <hr />
          <Link to="/login" onClick={() => setOpen(false)}>Sign In</Link>
          <Link to="/register" onClick={() => setOpen(false)}>Join Us</Link>
        </div>
      )}
    </header>
  )
}
