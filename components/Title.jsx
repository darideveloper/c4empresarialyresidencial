import { fontTitle } from "@/libs/fonts"


/**
 * Title text (h2)
 * 
 * @param {object} props - Props object
 * @param {string} props.children - Text to display
 * @param {string} props.className - Additional classes
 */
export default function Title ({ children, className }) {
  return (
    <h2
      className={`
        text-3xl
        font-bold
        text-center
        mb-12
        ${fontTitle.className}
        ${className}
      `}
    >
      {children}
    </h2>
  )
}