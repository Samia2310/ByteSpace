import Squiggle from '../decorations/Squiggle'
import boyFigure from '../../assets/boy.png'

const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export default function ProfessionalGrowth() {
  return (
    <section className="section-wash mt-28">
      <div className="max-w-[1280px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-[#202032] text-4xl sm:text-5xl font-extrabold leading-[1.08]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="text-[#626575] mt-8 text-base md:text-lg leading-[1.6] max-w-lg">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          <div className="flex gap-12 mt-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[2.65rem] font-extrabold leading-none text-[#1f54e8]">{s.value}</p>
                <p className="text-[#626575] text-base mt-3">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end overflow-visible">
          <Squiggle color="#D4F72E" className="absolute right-0 top-24 w-20 h-32 hidden sm:block z-30" />
          <div className="relative w-[340px] sm:w-[560px] h-[480px]">
            <div className="absolute left-0 top-0 w-[330px] sm:w-[420px] bg-white rounded-2xl border border-black/10 shadow-xl p-3 z-0">
              <img
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=700&q=80"
                alt="Course design workspace"
                className="rounded-xl w-full h-[180px] sm:h-[220px] object-cover"
              />
              <p className="font-bold text-lg mt-4">Learn Figma from Basic</p>
              <p className="text-sm text-blue-600 mt-0.5">by purepearl studio</p>
              <div className="flex items-center gap-3 mt-4">
                <span className="bg-[#F2F2F4] text-gray-600 text-xs px-3 py-1.5 rounded-full">Beginner</span>
                <span className="text-gray-600 text-sm">4.5 <span className="text-yellow-400">★</span></span>
              </div>
              <p className="mt-4 font-bold text-blue-600 text-lg">
                $25<span className="text-gray-400 font-normal text-sm">/lifetime</span>
              </p>
            </div>
            <img
              src={boyFigure}
              alt="Creator wearing headphones and holding a laptop"
              className="absolute right-[-18px] sm:right-[4px] bottom-0 z-10 w-[300px] sm:w-[420px] h-auto object-contain drop-shadow-2xl"
            />
            <div className="absolute right-[-10px] sm:right-[-8px] top-[235px] bg-white rounded-2xl shadow-lg px-5 py-4 w-[190px] sm:w-[230px] z-20">
              <p className="text-gray-500 text-xs">Learning Progress</p>
              <p className="font-extrabold text-3xl mt-1">55%</p>
              <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-brand-lime w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
