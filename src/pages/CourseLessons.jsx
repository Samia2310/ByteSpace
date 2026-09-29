import { useParams } from 'react-router-dom'
import CourseLayout from '../components/course/CourseLayout'
import { courseDetail } from '../data/course'

function VideoIcon() {
  return (
    <span className="w-11 h-11 sm:w-14 sm:h-14 md:w-[84px] md:h-[84px] rounded-xl sm:rounded-2xl md:rounded-3xl bg-brand-lime flex items-center justify-center shrink-0">
      <svg
        width="22"
        height="22"
        className="sm:w-7 sm:h-7 md:w-8 md:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#14142B"
        strokeWidth="2"
      >
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m22 8-6 4 6 4V8Z" />
      </svg>
    </span>
  )
}

export default function CourseLessons() {
  const { id } = useParams()
  const courseId = id ?? '1'

  return (
    <CourseLayout courseId={courseId} course={courseDetail}>
      <h2 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4">Explore the Modules</h2>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mb-8 sm:mb-10">
        Immerse yourself in the course content as we break down each module into comprehensive
        lessons, providing practical insights and hands-on experiences.
      </p>

      <h3 className="text-lg sm:text-xl font-extrabold mb-4 sm:mb-5">Lesson List</h3>
      <ul className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-10">
        {courseDetail.modules.map((m) => (
          <li key={m.title} className="flex gap-3 sm:gap-4">
            <VideoIcon />
            <div className="min-w-0">
              <p className="font-bold text-sm sm:text-base">{m.title}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed max-w-xl">{m.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-lg sm:text-xl font-extrabold mb-3 sm:mb-4">Lesson Content</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mb-8 sm:mb-10">
        Engage with each lesson through captivating video content, detailed textual explanations,
        and interactive elements. Download resources, complete assignments, and test your
        understanding with quizzes.
      </p>

      <h3 className="text-lg sm:text-xl font-extrabold mb-3 sm:mb-4">Lesson Progress Tracking</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mb-5 sm:mb-6">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature
        guiding you through your learning journey.
      </p>

      <div className="border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 max-w-2xl">
        <p className="text-gray-500 text-xs sm:text-sm">Learning Progress</p>
        <p className="font-extrabold text-2xl sm:text-3xl mt-1">{courseDetail.progress}%</p>
        <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full mt-2 sm:mt-3 overflow-hidden">
          <div
            className="h-full bg-brand-lime"
            style={{ width: `${courseDetail.progress}%` }}
          />
        </div>
      </div>
    </CourseLayout>
  )
}