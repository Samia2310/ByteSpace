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

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Featured')

  return (
    <>
      <Hero />
      <LogoStrip />
      <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
      <CourseGrid />
      <LearningPaths />
      <ProfessionalGrowth />
      <CreateManage />
      <CreatorCTA />
      <Testimonials />
    </>
  )
}
