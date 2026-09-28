import Squiggle from '../decorations/Squiggle'
import Triangle3D from '../decorations/Triangle3D'
import Ring from '../decorations/Ring'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function AuthVisual({ heading, description }) {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 min-h-screen overflow-hidden items-center">
      <Link to="/" aria-label="ByteSpace home" className="absolute left-14 xl:left-20 top-0 z-30">
        <img src={logo} alt="ByteSpace" className="w-[150px] h-auto" />
      </Link>
      <Triangle3D className="absolute left-[6%] bottom-[4%] w-24 h-24 z-20" />
      <Squiggle color="#ffffff" className="absolute right-[10%] bottom-[18%] w-16 h-28 z-20" />

      <div className="relative z-10 px-14 xl:px-20 w-full -translate-y-10">
        <h2 className="text-white text-3xl xl:text-4xl font-extrabold mb-4">{heading}</h2>
        <p className="text-white/80 text-[17px] leading-[1.55] max-w-[390px] mb-14">{description}</p>

        <div className="relative w-[410px] h-[380px]">
          <Ring color="#D4F72E" size={78} className="absolute left-[62px] top-[-2px] z-30 w-[78px] h-[62px] rotate-[-12deg]" />
          {/* Back card */}
          <div className="absolute left-0 top-6 w-[260px] bg-white rounded-2xl shadow-xl p-3 -rotate-3">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="rounded-xl w-full h-28 object-cover"
            />
            <p className="font-bold text-sm mt-3">Build Digital Asset</p>
            <p className="text-xs text-blue-600">by purepearl studio</p>
            <p className="text-sm font-bold text-blue-600 mt-2">
              $25<span className="text-gray-400 font-normal">/lifetime</span>
            </p>
          </div>

          {/* Front card */}
          <div className="absolute right-0 top-0 w-[300px] bg-white rounded-2xl shadow-2xl p-3 rotate-2">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                alt=""
                className="w-full h-36 object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 flex gap-1 flex-wrap">
                {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((t) => (
                  <span key={t} className="bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-start justify-between mt-3">
              <p className="font-bold text-sm">the Power of Big Data</p>
              <span className="text-xs flex items-center gap-0.5 shrink-0">4.5 <span className="text-yellow-400">★</span></span>
            </div>
            <p className="text-xs text-blue-600">by purepearl studio</p>
            <div className="flex items-center justify-between mt-2">
              <span className="bg-[#F2F2F4] text-gray-600 text-[10px] px-2 py-1 rounded-full">Beginner</span>
              <div className="flex items-center">
                {[1, 2, 3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i + 5}`} alt="" className="w-5 h-5 rounded-full border-2 border-white -ml-1.5 first:ml-0" />
                ))}
                <span className="w-5 h-5 rounded-full bg-brand-lime text-[8px] font-semibold flex items-center justify-center -ml-1.5 border-2 border-white">26+</span>
              </div>
            </div>
          </div>

          {/* Happy students badge */}
          <div className="absolute left-6 bottom-0 bg-brand-lime rounded-2xl shadow-xl px-4 py-3 w-[206px] z-20">
            <p className="text-[#14142B] text-xs">Happy Students</p>
            <p className="font-semibold text-sm mt-1">4.5 <span className="opacity-70">(240)</span> ★</p>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/40?img=${i + 60}`} alt="" className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0" />
              ))}
              <span className="w-6 h-6 rounded-full bg-[#14142B] text-white text-[9px] font-semibold flex items-center justify-center -ml-2 border-2 border-white">2K+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
