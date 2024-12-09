import { TransitionLink } from '@/components/utils/TransitionLink'
import Image from 'next/image'
import ArrowSvg from '@/components/icons/ArrowSvg'

/**
 * Big cta who changes text when hovered
 * 
 * @param {object} props - Component props
 * @param {number} props.index - Index of the cta
 * @param {string} props.text - Text to display
 * @param {string} props.textHover - Text to display when hovered
 * @param {string} props.imageSrc - Image source
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.href - Link to redirect to when clicked (for TransitionLink)
 * @param {function} props.onClick - Function to execute when clicked (for button)
 * @param {boolean} props.active - If the cta is active
 * @param {string} props.className - Additional classes
 * @returns 
 */
export default function CtaXL({
  index,
  text,
  textHover,
  imageSrc,
  imageAlt,
  href = "",
  onClick = null,
  active = false,
  className
}) {

  const content = (
    <div
      className={`
        content
        flex
        gap-0 sm:gap-16
        flex-row
        items-center
        justify-center
        w-full sm:w-[150%]
        px-6
        absolute
        top-1/2
        transform
        -translate-y-1/2
        left-0 sm:group-hover:-left-1/2 ${active && "sm:-left-1/2"}
        duration-700
        bg-blue group-hover:bg-greylight ${active && "bg-greylight"}
      `}
    >
      <h3
        className={`
          text
          text-xl md:text-3xl
          font-bold
          w-1/2
          text-center
        `}
      >
        {text}
      </h3>
      <div
        className={`
          img-wrapper
          w-1/3
          flex
          justify-center
          items-center
        `}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={100}
          height={100}
          className={`
            px-4
            h-40
            w-40
          `}
        />
      </div>
      <p
        className={`
          hover-text
          text-center
          w-1/2
          items-center
          justify-center
          flex-col
          gap-2
          mr-4
          hidden sm:flex
        `}
      >
        <span
          className={`
          `}
        >
          {textHover}
        </span>
        <ArrowSvg
          className={`
            fill-white
            ${href && "hover:opacity-60"}
            duration-300
            w-8
            h-8
          `}
        />
      </p>
    </div>
  )

  const styles = `
    rounded-xl
    text-white
    relative
    h-36
    w-full
    group
    overflow-hidden
    duration-1000
    ${className}
    ${active && "shadow-lg shadow-blue"}
    ${active && "scale-105"}
  `

  return (
    href == ""
      ? <button
        className={styles}
        onClick={onClick}
      >
        {content}
      </button>
      : <TransitionLink
        href={href}
        className={styles}
        data-aos="fade-up"
        data-aos-delay={300 * index}
      >
        {content}
      </TransitionLink>
  )
}