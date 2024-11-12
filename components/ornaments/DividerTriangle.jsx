/**
 * Triangle divider component (ornament)
 * 
 * @param {props} object - Component props
 * @param {string} props.className - Additional classes to add to the component
 */
export default function DividerTriangle({ className }) {
  return (
    <div
      className={`
        divider-triangle
        w-full
        overflow-hidden
        leading-none
        z-10
        ${className}
      `}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`
          fill-inherit
        `}
      >
        <path
          d="M1200 0L0 0 892.25 114.72 1200 0z"
          className="shape-fill">
        </path>
      </svg>
    </div>
  )
}