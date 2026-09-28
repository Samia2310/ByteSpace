const paths = [
  { label: 'Design', icon: '✏️' },
  { label: 'Development', icon: '💻' },
  { label: 'IT & Software', icon: '🖥️' },
  { label: 'Business', icon: '🏢' },
  { label: 'Marketing', icon: '📣' },
  { label: 'Photography', icon: '📷' },
]

export default function LearningPaths() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-24 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold">Explore Diverse Learning Paths at Bytespace</h2>
      <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-sm md:text-base">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
        courses spans various fields, ensuring there's something for everyone. Unleash your potential
        and explore our carefully curated categories.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
        {paths.map((p) => (
          <div
            key={p.label}
            className="border border-gray-200 rounded-2xl py-8 px-4 flex flex-col items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <span className="w-14 h-14 rounded-full bg-brand-lime flex items-center justify-center text-2xl">
              {p.icon}
            </span>
            <p className="font-semibold">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
