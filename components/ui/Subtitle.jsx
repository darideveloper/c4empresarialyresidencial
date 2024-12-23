import { fontTitle } from "@/libs/fonts"


/**
 * Title text (h2)
 * 
 * @param {object} props - Props object
 * @param {string} props.children - Text to display
 * @param {string} props.className - Additional classes
 */
export default function Subtitle ({ children, className }) {
  return (
    <h3
      className={`
        text-xl
        font-bold
        text-center
        mb-6
        ${fontTitle.className}
        ${className}
      `}
    >
      {children}
    </h3>
  )
}