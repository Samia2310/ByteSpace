const categories = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking',
]

export default function CategoryChips({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition whitespace-nowrap ${
            active === cat
              ? 'bg-brand-lime text-[#14142B]'
              : 'bg-[#F2F2F4] text-gray-600 hover:bg-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
