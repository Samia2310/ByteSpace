import { useParams } from 'react-router-dom'
import CourseLayout from '../components/course/CourseLayout'
import { courseDetail } from '../data/course'

function VideoIcon() {
  return (
    <span className="w-[84px] h-[84px] rounded-3xl bg-brand-lime flex items-center justify-center shrink-0">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14142B" strokeWidth="2">
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
      <h2 className="text-2xl font-extrabold mb-4">Explore the Modules</h2>
      <p className="text-gray-600 leading-relaxed max-w-2xl mb-10">
        Immerse yourself in the course content as we break down each module into comprehensive
        lessons, providing practical insights and hands-on experiences.
      </p>

      <h3 className="text-xl font-extrabold mb-5">Lesson List</h3>
      <ul className="flex flex-col gap-6 mb-10">
        {courseDetail.modules.map((m) => (
          <li key={m.title} className="flex gap-4">
            <VideoIcon />
            <div>
              <p className="font-bold">{m.title}</p>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed max-w-xl">{m.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-extrabold mb-4">Lesson Content</h3>
      <p className="text-gray-600 leading-relaxed max-w-2xl mb-10">
        Engage with each lesson through captivating video content, detailed textual explanations,
        and interactive elements. Download resources, complete assignments, and test your
        understanding with quizzes.
      </p>

      <h3 className="text-xl font-extrabold mb-4">Lesson Progress Tracking</h3>
      <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature
        guiding you through your learning journey.
      </p>

      <div className="border border-gray-200 rounded-2xl px-6 py-5 max-w-2xl">
        <p className="text-gray-500 text-sm">Learning Progress</p>
        <p className="font-extrabold text-3xl mt-1">{courseDetail.progress}%</p>
        <div className="h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
          <div
            className="h-full bg-brand-lime"
            style={{ width: `${courseDetail.progress}%` }}
          />
        </div>
      </div>
    </CourseLayout>
  )
}
