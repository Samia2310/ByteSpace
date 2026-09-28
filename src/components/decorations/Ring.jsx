export default function Ring({ className = '', size = 160, color = '#fff' }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="65" fill="none" stroke={color} strokeWidth="30" />
    </svg>
  )
}
