import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchHero from '../components/search/SearchHero'
import FilterBar from '../components/search/FilterBar'
import CategoryChips from '../components/search/CategoryChips'
import Pagination from '../components/search/Pagination'
import CourseCard from '../components/CourseCard'
import { filterCourses, getCourses } from '../data/courses'

const courses = getCourses(30)
const PAGE_SIZE = 6

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState('Featured')
  const [page, setPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const filteredCourses = filterCourses(courses, { category: activeCategory, query })
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE))
  const visibleCourses = filteredCourses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleCategoryChange(category) {
    setActiveCategory(category)
    setPage(1)
  }

  function handleSearch(nextQuery) {
    setSearchParams(nextQuery.trim() ? { q: nextQuery.trim() } : {})
    setPage(1)
  }

  return (
    <>
      <SearchHero initialQuery={query} onSearch={handleSearch} />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-24">
        <FilterBar />
        <CategoryChips active={activeCategory} onChange={handleCategoryChange} />

        {visibleCourses.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {visibleCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-gray-500">No courses match your search.</p>
        )}

        {filteredCourses.length > PAGE_SIZE && (
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        )}
      </section>
    </>
  )
}
