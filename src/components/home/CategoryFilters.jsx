import { useState } from 'react'

const categories = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media',
  'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts',
  'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity',
  'Web Development', 'Data Science', 'Cooking',
]

export default function CategoryFilters({ active, onChange }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? categories : categories.slice(0, 18)

  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center pt-16 md:pt-24">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        Discover Your Passion, Build Your Skills
      </h2>
      <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-sm md:text-base">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
        courses across different fields, from technology to the arts, and make a difference in your
        career and life.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-9">
        {visible.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
          className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition ${
              active === cat
                ? 'bg-brand-lime text-[#14142B]'
                : 'bg-[#F2F2F4] text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="px-2 py-2.5 text-sm font-medium text-blue-600 hover:underline"
          >
            + More
          </button>
        )}
      </div>
    </section>
  )
}
