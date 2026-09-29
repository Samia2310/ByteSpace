import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

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
    <footer className="bg-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 md:gap-12">
          <div>
            <Link to="/" className="flex items-center mb-5">
              <img src={logo} alt="ByteSpace" className="w-[150px] h-auto" />
            </Link>
            <p className="text-gray-500 mb-5 max-w-xs">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch border border-gray-200 rounded-2xl sm:rounded-full overflow-hidden max-w-sm p-1 sm:p-0"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-5 py-3 outline-none text-sm min-w-0"
              />
              <button
                type="submit"
                className="bg-brand-lime text-[#14142B] font-semibold px-6 py-3 sm:py-0 rounded-full sm:m-1 hover:brightness-95 transition"
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

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center md:text-left">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            <a href="#" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
