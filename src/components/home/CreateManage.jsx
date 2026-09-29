import Squiggle from '../decorations/Squiggle'
import girlFigure from '../../assets/girl.png'

const bullets = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export default function CreateManage() {
  return (
    <section className="section-wash py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 items-center">
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
        <Squiggle color="#D4F72E" className="absolute left-[61%] top-32 w-20 h-32 hidden sm:block z-20" />
        <div className="relative w-full max-w-[600px] min-h-[440px] sm:min-h-[560px]">
          <div className="absolute inset-x-16 bottom-4 h-72 rounded-full bg-gradient-to-t from-indigo-100/80 via-white/70 to-transparent blur-2xl" />
          <img
            src={girlFigure}
            alt="Creator wearing a headset holding a tablet"
            className="relative z-10 mx-auto w-full max-w-[260px] sm:max-w-[420px] h-auto max-h-[440px] sm:max-h-[580px] object-contain drop-shadow-[0_24px_24px_rgba(20,20,43,0.16)]"
          />
          <div className="absolute left-0 top-0 bg-brand-blue text-white rounded-2xl shadow-lg px-4 sm:px-5 py-3 sm:py-4 w-[180px] sm:w-[270px] z-0">
            <p className="text-xs opacity-80">Total Revenue</p>
            <p className="text-[10px] opacity-60">July 1-28</p>
            <p className="font-extrabold text-2xl mt-1">$120.29</p>
            <div className="h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-brand-lime w-[70%]" />
            </div>
          </div>
          <div className="absolute left-0 top-32 sm:top-40 bg-brand-blue text-white rounded-2xl shadow-lg px-4 sm:px-5 py-3 sm:py-4 w-[155px] sm:w-[230px] z-0">
            <p className="text-xs opacity-80">Year to Date</p>
            <p className="text-[10px] opacity-60">2023</p>
            <p className="font-extrabold text-2xl mt-1">$1,200.38</p>
            <span className="inline-block mt-1 bg-brand-lime text-[#14142B] text-[10px] font-semibold px-2 py-0.5 rounded-full">
              +12$
            </span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-white rounded-2xl shadow-lg px-4 sm:px-5 py-3 sm:py-4 w-[min(235px,90%)] sm:left-[48%] sm:translate-x-0 sm:w-[276px] z-20">
            <p className="text-gray-500 text-xs">Happy Students</p>
            <p className="font-semibold text-sm mt-1">4.5 <span className="text-gray-400">(240)</span> ⭐</p>
            <div className="flex items-center mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i + 30}`}
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0"
                />
              ))}
              <span className="w-6 h-6 rounded-full bg-brand-lime text-[9px] font-semibold flex items-center justify-center -ml-2 border-2 border-white">
                2K+
              </span>
            </div>
          </div>
        </div>
        </div>

        <div className="order-1 lg:order-2">
        <h2 className="text-[#202032] text-4xl sm:text-5xl font-extrabold leading-[1.08]">
          Create & Manage Courses Easily.
        </h2>
        <p className="text-[#626575] mt-8 text-base md:text-lg leading-[1.6] max-w-lg">
          <span className="font-semibold text-[#14142B]">ByteSpace</span> supports individuals or
          entities in the creation, publication, and administration of educational courses.
        </p>

        <ul className="mt-8 flex flex-col gap-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
                ✓
              </span>
              <span className="text-[#14142B]">{b}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  )
}
