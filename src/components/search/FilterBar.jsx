function PillButton({ icon, label }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-[#14142B] hover:bg-gray-50 transition"
    >
      {icon}
      {label}
    </button>
  )
}

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-start sm:items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <PillButton
          label="Filter"
          icon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 5h16M7 12h10M10 19h4" />
            </svg>
          }
        />
        <PillButton
          label="Level"
          icon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 20V12M11 20V4M18 20v-7" />
            </svg>
          }
        />
        <PillButton
          label="Category"
          icon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          }
        />
      </div>

      <PillButton
        label="Most relevant"
        icon={
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M7 12h10M10 18h4" />
          </svg>
        }
      />
    </div>
  )
}
