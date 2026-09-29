export const baseCourses = [
  {
    title: 'Learn Figma from Basic',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=600&q=80',
    category: 'UI/UX Design',
  },
  {
    title: 'Build Digital Asset',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80',
    category: 'Digital Illustration',
  },
  {
    title: 'the Power of Big Data',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    category: 'Data Science',
  },
  {
    title: 'Balancing Productivity and Wellbeing',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80',
    category: 'Productivity',
  },
  {
    title: 'Mastering Money Management',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&q=80',
    category: 'Business',
  },
  {
    title: 'From Idea to Startup Success',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    category: 'Freelance & Entrepreneurship',
  },
]

/** Cycles the base course set to produce `count` items with unique ids. */
export function getCourses(count = 6) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    ...baseCourses[i % baseCourses.length],
  }))
}

export function filterCourses(courses, { category = 'Featured', query = '' } = {}) {
  const normalizedQuery = query.trim().toLowerCase()

  return courses.filter((course) => {
    const matchesCategory = category === 'Featured' || course.category === category
    const matchesQuery = !normalizedQuery || [course.title, course.category]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery)

    return matchesCategory && matchesQuery
  })
}
