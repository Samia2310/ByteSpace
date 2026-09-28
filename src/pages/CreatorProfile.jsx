import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FilterBar from '../components/search/FilterBar'
import CourseCard from '../components/CourseCard'
import { baseCourses } from '../data/courses'

const creator = {
  name: 'PurePearl Studio',
  tagline: 'Passionate UI/UX, Web designer',
  avatar: 'https://i.pravatar.cc/300?img=13',
  bio: [
    "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    'ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
  ],
  products: 3,
  followers: 12,
}

const creatorCourses = baseCourses.slice(3, 6).map((c, i) => ({ id: i + 1, ...c }))

function StatPill({ value, label }) {
  return (
    <span className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-sm font-medium">
      <span className="font-extrabold text-blue-600">{value}</span>
      {label}
    </span>
  )
}

export default function CreatorProfile() {
  const { id } = useParams()

  return (
    <>
      <section className="relative bg-brand-blue bg-grid overflow-hidden pb-16">
        <Navbar transparent />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-24">
          <div className="flex items-start gap-6 flex-wrap">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover shrink-0"
            />

            <div className="flex-1 min-w-[240px]">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-white font-extrabold text-3xl sm:text-4xl">{creator.name}</h1>
                <span className="bg-brand-lime text-[#14142B] text-xs font-semibold px-3 py-1.5 rounded-full">
                  Creator
                </span>
              </div>
              <p className="text-white/80 mt-2">{creator.tagline}</p>
            </div>

            <button className="bg-brand-lime text-[#14142B] font-semibold px-8 py-3 rounded-full hover:brightness-95 transition shrink-0">
              Follow
            </button>
          </div>

          <div className="mt-8 max-w-3xl flex flex-col gap-4 text-white/80 leading-relaxed">
            {creator.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <StatPill value={creator.products} label="Products" />
            <StatPill value={creator.followers} label="Followers" />
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pt-14 pb-24">
        <FilterBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {creatorCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>
    </>
  )
}
