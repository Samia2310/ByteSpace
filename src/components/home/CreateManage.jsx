import Squiggle from '../decorations/Squiggle'

const bullets = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export default function CreateManage() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div className="relative flex justify-center md:justify-start order-2 md:order-1">
        <Squiggle color="#D4F72E" className="absolute -right-2 top-6 w-16 h-28 hidden sm:block" />
        <div className="relative w-[280px] sm:w-[320px]">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
            alt="Creator wearing a headset holding a tablet"
            className="rounded-2xl w-full h-[360px] object-cover"
          />
          <div className="absolute -left-8 top-6 bg-brand-blue text-white rounded-2xl shadow-lg px-4 py-3 w-[160px]">
            <p className="text-xs opacity-80">Total Revenue</p>
            <p className="text-[10px] opacity-60">July 1-28</p>
            <p className="font-extrabold text-xl mt-1">$120.29</p>
            <div className="h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-brand-lime w-[70%]" />
            </div>
          </div>
          <div className="absolute -left-10 top-40 bg-brand-blue text-white rounded-2xl shadow-lg px-4 py-3 w-[160px]">
            <p className="text-xs opacity-80">Year to Date</p>
            <p className="text-[10px] opacity-60">2023</p>
            <p className="font-extrabold text-xl mt-1">$1,200.38</p>
            <span className="inline-block mt-1 bg-brand-lime text-[#14142B] text-[10px] font-semibold px-2 py-0.5 rounded-full">
              +12$
            </span>
          </div>
          <div className="absolute -bottom-6 right-0 bg-white rounded-2xl shadow-lg px-4 py-3 w-[190px]">
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

      <div className="order-1 md:order-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Create & Manage Courses Easily.
        </h2>
        <p className="text-gray-500 mt-5 text-sm md:text-base max-w-md">
          <span className="font-semibold text-[#14142B]">ByteSpace</span> supports individuals or
          entities in the creation, publication, and administration of educational courses.
        </p>

        <ul className="mt-6 flex flex-col gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] shrink-0">
                ✓
              </span>
              <span className="text-[#14142B]">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
