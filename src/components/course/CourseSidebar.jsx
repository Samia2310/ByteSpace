import { Link } from 'react-router-dom'

const previewLessons = [
  { n: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
  { n: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
  { n: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
]

const includes = [
  {
    label: 'Learning Resources',
    icon: (
      <path d="M4 5a2 2 0 0 1 2-2h6l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" />
    ),
  },
  {
    label: 'Quality Lesson Videos',
    icon: (
      <>
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m22 8-6 4 6 4V8Z" />
      </>
    ),
  },
  {
    label: 'Certificate of Completion',
    icon: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
      </>
    ),
  },
  {
    label: 'Private Consultation',
    icon: (
      <>
        <path d="M14.5 2a5.5 5.5 0 0 0-4.9 8.02L2 17.6V22h4.4l7.58-7.6A5.5 5.5 0 1 0 14.5 2Z" />
      </>
    ),
  },
]

export default function CourseSidebar({ remainingLessons = 99, totalLessons = 112, totalHours = 24, price = 25, creator }) {
  return (
    <aside className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 w-full lg:w-[420px] shrink-0">
      <h2 className="text-xl font-extrabold mb-6">
        {totalLessons} Lessons ({totalHours} hours)
      </h2>

      <ul className="flex flex-col gap-5">
        {previewLessons.map((l) => (
          <li key={l.n} className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <span className="text-gray-400 font-semibold text-sm pt-0.5">{l.n}</span>
              <span className="font-medium text-sm leading-snug">{l.title}</span>
            </div>
            <span className="text-blue-600 text-sm shrink-0">{l.duration}</span>
          </li>
        ))}
      </ul>

      <p className="text-gray-400 text-sm mt-4">{remainingLessons} more videos</p>

      <p className="text-gray-500 text-sm mt-6">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <p className="font-extrabold text-3xl text-blue-600 mt-5">
        ${price}
        <span className="text-gray-400 font-normal text-base">/lifetime</span>
      </p>

      <button className="w-full bg-brand-lime text-[#14142B] font-semibold py-3.5 rounded-full mt-4 hover:brightness-95 transition">
        Enroll Now
      </button>

      <h3 className="font-bold mt-8 mb-4">This course include</h3>
      <ul className="flex flex-col gap-3.5">
        {includes.map((item) => (
          <li key={item.label} className="flex items-center gap-3 text-sm text-gray-700">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.8">
              {item.icon}
            </svg>
            {item.label}
          </li>
        ))}
      </ul>

      {creator && (
        <>
          <hr className="my-7 border-gray-100" />
          <div className="flex items-center gap-3 mb-4">
            <img src={creator.avatar} alt={creator.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-bold text-sm">{creator.name}</p>
              <p className="text-gray-400 text-xs">{creator.role}</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>
          <Link
            to={`/creator/${creator.id}`}
            className="inline-block border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition"
          >
            See Full Profile
          </Link>
        </>
      )}
    </aside>
  )
}
