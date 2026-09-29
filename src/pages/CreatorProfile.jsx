import Navbar from '../components/Navbar'
import FilterBar from '../components/search/FilterBar'
import CourseCard from '../components/CourseCard'
import { baseCourses } from '../data/courses'

const creator = {
  name: 'PurePearl Studio',
  tagline: 'Passionate UI/UX, Web designer',
  avatar: 'https://i.pravatar.cc/300?img=13',
  bio: [
    "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive our creative journey. Let's explore and learn together!",
    'Dive into our creative portfolio, showcasing a glimpse of our artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with us.',
  ],
  products: 3,
  followers: 12,
}

const creatorCourses = baseCourses.slice(0, 3).map((c, i) => ({ id: i + 1, ...c }))

function StatPill({ value, label }) {
  return (
    <span className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium">
      <span className="font-extrabold text-blue-600">{value}</span>
      {label}
    </span>
  )
}

export default function CreatorProfile() {
  return (
    <>
      <section className="relative bg-brand-blue bg-grid overflow-hidden pb-12 sm:pb-16">
        <Navbar transparent />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
          <div className="flex items-start gap-4 sm:gap-6 flex-wrap">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl object-cover shrink-0"
            />

            <div className="flex-1 min-w-[200px] sm:min-w-[240px]">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-4xl">{creator.name}</h1>
                <span className="bg-brand-lime text-[#14142B] text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  Creator
                </span>
              </div>
              <p className="text-white/80 text-sm sm:text-base mt-1.5 sm:mt-2">{creator.tagline}</p>
            </div>

          </div>

          <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 text-sm sm:text-base text-white/80 leading-relaxed">
            {creator.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 sm:mt-8">
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <StatPill value={creator.products} label="Products" />
              <StatPill value={creator.followers} label="Followers" />
            </div>
            <button className="ml-auto bg-brand-lime text-[#14142B] font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:brightness-95 transition shrink-0">
              Follow
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-24">
        <FilterBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10">
          {creatorCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>
    </>
  )
}
