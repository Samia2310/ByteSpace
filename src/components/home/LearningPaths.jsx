const paths = [
  { label: 'Design', icon: 'M6 20 4 4l16 2-2 14H6ZM4 4l8 8m0 0 8-6m-8 6-6 6' },
  { label: 'Development', icon: 'm8 9-4 3 4 3m8-6 4 3-4 3m-3-9-2 12' },
  { label: 'IT & Software', icon: 'M4 5h16v11H4zM2 20h20M9 16h6' },
  { label: 'Business', icon: 'M4 7h16v13H4zM8 7V4h8v3M8 12h8M8 16h5' },
  { label: 'Marketing', icon: 'M4 12h4l8-5v10l-8-5H4v5m12-5h4' },
  { label: 'Photography', icon: 'M4 7h4l2-2h4l2 2h4v12H4V7Zm8 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z' },
]

export default function LearningPaths() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold">Explore Diverse Learning Paths at Bytespace</h2>
      <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-sm md:text-base">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
        courses spans various fields, ensuring there's something for everyone. Unleash your potential
        and explore our carefully curated categories.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-10 sm:mt-12">
        {paths.map((p) => (
          <div
            key={p.label}
            className="bg-white border border-gray-200 rounded-2xl py-6 sm:py-8 px-3 sm:px-4 flex flex-col items-center gap-3 sm:gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
          >
            <span className="w-14 h-14 rounded-full bg-brand-lime flex items-center justify-center">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#14142B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={p.icon} />
              </svg>
            </span>
            <p className="font-semibold">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
