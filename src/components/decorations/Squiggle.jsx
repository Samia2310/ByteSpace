export default function Squiggle({ color = '#D4F72E', className = '', width = 140, height = 220 }) {
  return (
    <svg
      viewBox="0 0 140 220"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10 L120 60 L20 110 L120 160 L60 200"
        stroke={color}
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
