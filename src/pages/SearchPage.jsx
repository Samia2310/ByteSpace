import { useState } from 'react'
import SearchHero from '../components/search/SearchHero'
import FilterBar from '../components/search/FilterBar'
import CategoryChips from '../components/search/CategoryChips'
import Pagination from '../components/search/Pagination'
import CourseCard from '../components/CourseCard'
import { getCourses } from '../data/courses'

const courses = getCourses(18)
const TOTAL_PAGES = 5

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState('Featured')
  const [page, setPage] = useState(1)

  return (
    <>
      <SearchHero />

      <section className="max-w-[1200px] mx-auto px-6 pt-14 pb-24">
        <FilterBar />
        <CategoryChips active={activeCategory} onChange={setActiveCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>

        <Pagination page={page} totalPages={TOTAL_PAGES} onChange={setPage} />
      </section>
    </>
  )
}
