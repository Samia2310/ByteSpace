export default function Triangle3D({ className = '', size = 140 }) {
  return (
    <svg viewBox="0 0 140 140" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points="70,10 130,120 10,120" fill="#F5F5F5" />
      <polygon points="70,10 130,120 90,120" fill="#DADADA" />
    </svg>
  )
}
