import { fontTitle } from "@/libs/fonts"


/**
 * Title component (h2)
 * 
 * @param {object} props - Props object
 * @param {str} props.children - Text to display
 * @param {str} props.className - Additional classes
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