import { NavLink } from 'react-router-dom'

export default function CourseTabs({ courseId }) {
  const tabs = [
    { label: 'About', to: `/course/${courseId}`, end: true },
    { label: 'Lesson', to: `/course/${courseId}/lessons` },
    { label: 'Reviews', to: `/course/${courseId}/reviews` },
  ]

  return (
    <div className="flex gap-3">
      {tabs.map((t) => (
        <NavLink
          key={t.label}
          to={t.to}
          end={t.end}
          className={({ isActive }) =>
            `px-6 py-2.5 rounded-full text-sm font-medium transition ${
              isActive ? 'bg-brand-lime text-[#14142B]' : 'bg-[#F2F2F4] text-gray-600 hover:bg-gray-200'
            }`
          }
        >
          {t.label}
        </NavLink>
      ))}
    </div>
  )
}
