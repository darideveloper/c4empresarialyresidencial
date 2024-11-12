
/**
 * Bubble component (background decoration)
 * 
 * @param {object} props - Props object
 * @param {string} props.className - Additional classes
 */
export default function Bubble({ className }) {
  return (
    <div
      className={`
        bubble
        absolute
        bg-blue
        rounded-full
        ${className}
        w-80
        h-80
        opacity-10
        blur-lg
        z-20
      `}
    >

    </div>
  )

}