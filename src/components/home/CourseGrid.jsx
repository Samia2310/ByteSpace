import CourseCard from '../CourseCard'
import { getCourses } from '../../data/courses'

const courses = getCourses(6)

export default function CourseGrid() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}
