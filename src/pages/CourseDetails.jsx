import { useParams } from 'react-router-dom'
import CourseLayout from '../components/course/CourseLayout'
import { courseDetail } from '../data/course'

export default function CourseDetails() {
  const { id } = useParams()
  const courseId = id ?? '1'

  return (
    <CourseLayout courseId={courseId} course={courseDetail}>
      <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-5">Description</h2>
      <div className="flex flex-col gap-4 sm:gap-5 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
        {courseDetail.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <section className="mt-10 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-5">Sneak Peek</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl">
          {courseDetail.sneakPeek.map((image, i) => (
            <img
              key={image}
              src={image}
              alt={`Course preview ${i + 1}`}
              className="w-full aspect-square object-cover rounded-xl sm:rounded-2xl"
            />
          ))}
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-5">Key Points</h2>
        <ul className="flex flex-col gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
          {courseDetail.keyPoints.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs sm:text-sm shrink-0">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
      </section>
    </CourseLayout>
  )
}