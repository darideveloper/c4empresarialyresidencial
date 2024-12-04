import { fontTitle } from '@/libs/fonts'

/**
 * Cta component with intl routing
 * 
 * @param {object} props - Props object
 * @param {string} props.className - Additional classes
 * @param {function} props.onClick - Click handler
 * @param {string} props.children - Child elements
 */
export default function Btn({ className, onClick, children, active }) {

  return (
    <button
      className={`
        cta
        border-2
        bg-white
        text-blue
        border-blue
        hover:opacity-70
        ${active && 'opacity-70'}
        rounded-xl
        py-2 px-5
        hover:bg-blue-dark
        inline-block
        duration-300
        font-bold
        ${fontTitle.className}
        group
        ${className}
      `}
      disabled={active}
      onClick={onClick}
    >
      {children}
    </button>

  )

}