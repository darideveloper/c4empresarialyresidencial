import { fontTitle } from '@/libs/fonts'

import { TransitionLink } from '@/components/utils/TransitionLink'
import ArrowSvg from '@/components/icons/ArrowSvg'

/**
 * Cta component with intl routing
 * 
 * @param {object} props - Props object
 * @param {string} props.href - URL to route to (link button)
 * @param {string} props.text - Text to display (action button)
 * @param {string} props.text - Text to display
 * @param {string} props.className - Additional classes
 */
export default function Button({ href = "", onClick = null, text, className }) {

  const styles = `
    cta
    border-2
    bg-blue hover:bg-transparent
    text-white hover:text-blue
    border-blue
    rounded-xl
    py-3 px-6
    mt-6
    hover:bg-blue-dark
    inline-block
    duration-300
    font-bold
    ${fontTitle.className}
    group
    ${className}
  `

  const content = (
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

      <ArrowSvg 
        className={`
          fill-white
          group-hover:fill-blue
          group-hover:scale-125
          group-hover:ml-2
          duration-500
          hidden sm:block
        `}
      />
    </div>
  )

  return (
    (
      href !== ""
      ? <TransitionLink
          href={href}
          className={styles}
        >
          {content}
        </TransitionLink>
      : <button
          className={styles}
          onClick={onClick}
        >
          {content}
        </button>
    )
  )

}