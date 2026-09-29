import { useState } from 'react'
import Hero from '../components/home/Hero'
import LogoStrip from '../components/home/LogoStrip'
import CategoryFilters from '../components/home/CategoryFilters'
import CourseGrid from '../components/home/CourseGrid'
import LearningPaths from '../components/home/LearningPaths'
import ProfessionalGrowth from '../components/home/ProfessionalGrowth'
import CreateManage from '../components/home/CreateManage'
import CreatorCTA from '../components/home/CreatorCTA'
import Testimonials from '../components/home/Testimonials'
import { filterCourses, getCourses } from '../data/courses'

const featuredCourses = getCourses(6)

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Featured')
  const visibleCourses = filterCourses(featuredCourses, { category: activeCategory })

  return (
    <>
      <Hero />
      <LogoStrip />
      <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
      <CourseGrid courses={visibleCourses} activeCategory={activeCategory} />
      <LearningPaths />
      <ProfessionalGrowth />
      <CreateManage />
      <CreatorCTA />
      <Testimonials />
    </>
  )
}
