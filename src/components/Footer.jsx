import { Link } from 'react-router-dom'

const columns = [
  {
    heading: null,
    links: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  },
  {
    heading: null,
    links: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  },
  {
    heading: null,
    links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 font-extrabold text-xl mb-5">
              <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                <path d="M4 2h10a8 8 0 0 1 0 16H10v8H4V2z" fill="#D4F72E" />
                <path d="M10 10h4a4 4 0 0 1 0 8h-4v-8z" fill="#1A2CF0" />
              </svg>
              ByteSpace
            </Link>
            <p className="text-gray-500 mb-5 max-w-xs">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-stretch border border-gray-200 rounded-full overflow-hidden max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-brand-lime text-[#14142B] font-semibold px-6 rounded-full m-1 hover:brightness-95 transition"
              >
                Search
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 max-w-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {columns.map((col, i) => (
            <ul key={i} className="flex flex-col gap-4 text-gray-600">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-brand-blue transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>@ {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
