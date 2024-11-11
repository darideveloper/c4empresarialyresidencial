import { Link } from '@/i18n/routing'
import { fontTitle } from '@/libs/fonts'

/**
 * Cta component with intl routing
 * 
 * @param {object} props - Props object
 * @param {str} props.href - URL to route to
 * @param {str} props.text - Text to display
 */
export default function Cta({ href, text }) {

  return (
    <Link
      href={href}
      className={`
        cta
        border-2
        bg-blue hover:bg-transparent
        text-white hover:text-blue
        border-blue
        rounded-xl
        py-3 px-6
        mt-6
        hover:bg-blue-dark
        text-2xl
        inline-block
        duration-300
        font-bold
        ${fontTitle.className}
        group
      `}
    >

      <div 
        className={`
          content
          flex 
          items-center
          justify-center
          gap-2
        `}
      >
        <span>
          {text}
        </span>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`
            fill-white
            group-hover:fill-blue
            group-hover:scale-125
            group-hover:ml-2
            duration-500
            hidden sm:block
          `}
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z" />
        </svg>
      </div>

    </Link>

  )

}