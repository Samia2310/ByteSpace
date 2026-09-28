export default function Cube3D({ className = '', size = 160 }) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="140" height="180" rx="28" fill="#D4F72E" transform="rotate(8 80 100)" />
      <rect x="10" y="10" width="140" height="180" rx="28" fill="#BEDF25" opacity="0.4" transform="rotate(8 80 100) translate(10 0)" />
    </svg>
  )
}
