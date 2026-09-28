import { useParams } from 'react-router-dom'
import CourseLayout from '../components/course/CourseLayout'
import { courseDetail } from '../data/course'

export default function CourseDetails() {
  const { id } = useParams()
  const courseId = id ?? '1'

  return (
    <CourseLayout courseId={courseId} course={courseDetail}>
      <h2 className="text-2xl font-extrabold mb-5">Description</h2>
      <div className="flex flex-col gap-5 text-gray-600 leading-relaxed max-w-2xl">
        {courseDetail.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </CourseLayout>
  )
}
