import Squiggle from '../decorations/Squiggle'

const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export default function ProfessionalGrowth() {
  return (
    <section className="mt-28 bg-gradient-to-br from-lime-100/40 via-white to-indigo-100/40">
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="text-gray-500 mt-5 text-sm md:text-base max-w-md">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          <div className="flex gap-10 mt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-blue-600">{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <Squiggle color="#D4F72E" className="absolute -right-2 top-0 w-16 h-28 hidden sm:block" />
          <div className="relative w-[300px] sm:w-[360px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Team reviewing a UX wireframe on paper"
              className="rounded-2xl shadow-xl w-full h-[220px] object-cover"
            />
            <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 w-[210px]">
              <p className="font-bold text-sm">Learn Figma from Basic</p>
              <p className="text-xs text-blue-600 mt-0.5">by purepearl studio</p>
              <p className="mt-2 font-bold text-blue-600 text-sm">
                $25<span className="text-gray-400 font-normal">/lifetime</span>
              </p>
            </div>
            <div className="absolute -right-6 bottom-6 bg-white rounded-2xl shadow-lg px-4 py-3 w-[130px]">
              <p className="text-gray-500 text-xs">Learning Progress</p>
              <p className="font-extrabold text-xl mt-1">55%</p>
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
