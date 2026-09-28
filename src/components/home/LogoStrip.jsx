const icons = ['🌐', '✳️', '⚡', '❇️', '🌀']

export default function LogoStrip() {
  return (
    <section className="bg-[#F5F5F7] py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
        {icons.map((icon, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-400 font-bold text-lg">
            <span className="w-9 h-9 rounded-full bg-gray-300/60 flex items-center justify-center text-base">
              {icon}
            </span>
            Logoipsum
          </div>
        ))}
      </div>
    </section>
  )
}
