const icons = ['M4 12a8 8 0 1 0 16 0A8 8 0 1 0 4 12', 'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4', 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z', 'M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM5 14a4 4 0 1 0 0 7 4 4 0 0 0 0-7ZM19 14a4 4 0 1 0 0 7 4 4 0 0 0 0-7Z', 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z']

export default function LogoStrip() {
  return (
    <section className="bg-[#F6F6F8] py-9 md:py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
        {icons.map((icon, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-400 font-bold text-lg opacity-80">
            <span className="w-9 h-9 rounded-full bg-gray-300/60 flex items-center justify-center">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d={icon} />
              </svg>
            </span>
            Logoipsum
          </div>
        ))}
      </div>
    </section>
  )
}
