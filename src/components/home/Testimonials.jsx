const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'https://i.pravatar.cc/100?img=47',
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'https://i.pravatar.cc/100?img=52',
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'https://i.pravatar.cc/100?img=13',
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-lime-50 py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Discover What Our Community Is Saying
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we do.
          Hear directly from those who have experienced the transformative journey of learning and
          creating on our platform. Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover mb-5" />
            <p className="font-bold">{t.name}</p>
            <p className="text-blue-600 text-sm mb-4">{t.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">&quot;{t.quote}&quot;</p>
          </div>
        ))}
      </div>
    </section>
  )
}
