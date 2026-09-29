import CourseCard from '../CourseCard'

export default function CourseGrid({ courses, activeCategory }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 sm:pt-14">
      {courses.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-gray-500">
          No courses are available in {activeCategory} yet.
        </p>
      )}
    </section>
  )
}
