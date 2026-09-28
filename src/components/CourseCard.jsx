import { Link } from 'react-router-dom'

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-3"
    >
      <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
          {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((tag) => (
            <span
              key={tag}
              className="bg-black/50 text-white text-[11px] px-2.5 py-1 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-1 flex items-start justify-between gap-2">
        <h3 className="font-bold text-base leading-snug">{course.title}</h3>
        <span className="flex items-center gap-1 text-sm text-gray-700 shrink-0">
          4.5 <span className="text-yellow-400">★</span>
        </span>
      </div>
      <p className="text-sm text-blue-600">by purepearl studio</p>

      <div className="flex items-center justify-between mt-3">
        <span className="bg-[#F2F2F4] text-gray-600 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 20V10M10 20V4M17 20v-7" />
          </svg>
          Beginner
        </span>
        <div className="flex items-center">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/40?img=${i + 20 + course.id}`}
              alt=""
              className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0"
            />
          ))}
          <span className="w-6 h-6 rounded-full bg-brand-lime text-[9px] font-semibold flex items-center justify-center -ml-2 border-2 border-white">
            26+
          </span>
        </div>
      </div>

      <p className="mt-3 font-bold text-blue-600">
        $25<span className="text-gray-400 font-normal text-sm">/lifetime</span>
      </p>
    </Link>
  )
}
