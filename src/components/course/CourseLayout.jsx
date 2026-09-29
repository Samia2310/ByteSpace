import { useState } from 'react'
import Navbar from '../Navbar'
import CourseSidebar from './CourseSidebar'
import CourseTabs from './CourseTabs'

function Badge({ icon, children }) {
  return (
    <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-medium">
      {icon}
      {children}
    </span>
  )
}

export default function CourseLayout({ courseId, course, children }) {
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <section className="relative bg-brand-blue bg-grid overflow-hidden pb-40 sm:pb-56 lg:pb-64">
        <Navbar transparent />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 pt-24">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl">
                {course.title}
              </h1>
              <p className="text-white/80 mt-3 text-sm sm:text-base">{course.subtitle}</p>
              <p className="text-white/80 mt-4 text-sm">
                by <span className="text-brand-lime font-medium">{course.studio}</span>
              </p>
            </div>

            <button className="flex items-center gap-2 bg-brand-lime text-[#14142B] font-semibold px-6 py-2.5 rounded-full text-sm hover:brightness-95 transition shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="m8.6 13.5 6.8 3.9M15.4 6.6 8.6 10.5" />
              </svg>
              Share
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Badge
              icon={
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 20V12M11 20V4M18 20v-7" />
                </svg>
              }
            >
              {course.level}
            </Badge>
            <Badge icon={<span className="text-yellow-400">★</span>}>
              {course.rating} ({course.reviewCount} reviews)
            </Badge>
            <Badge
              icon={
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            >
              {course.students} Students
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 -mt-32 sm:-mt-48 lg:-mt-56 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          <div className="flex-1 w-full min-w-0">
            <button
              type="button"
              aria-label={playing ? 'Pause course preview' : 'Play course preview'}
              onClick={() => setPlaying((p) => !p)}
              className="relative w-full aspect-video rounded-2xl sm:rounded-[28px] overflow-hidden bg-gray-200 block"
            >
              <img src={course.video} alt="Course preview" className="w-full h-full object-cover" />
              {!playing && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 rounded-[22px] bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              )}
            </button>

            <div className="mt-8 sm:mt-10">
              <CourseTabs courseId={courseId} />
              <div className="mt-8">{children}</div>
            </div>
          </div>

          <CourseSidebar
            creator={course.creator}
            totalLessons={course.totalLessons}
            totalHours={course.totalHours}
            price={course.price}
          />
        </div>
      </div>

      <div className="h-16 sm:h-20" />
    </>
  )
}
