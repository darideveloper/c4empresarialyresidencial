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
 * @param {string} props.href - Link to redirect to when clicked
 * @returns 
 */
export default function CtaXL({ index, text, textHover, imageSrc, imageAlt, href, className }) {
  return (
    <TransitionLink
      href={href}
      className={`
        rounded-xl
        text-white
        relative
        h-36
        w-full
        group
        overflow-hidden
        duration-1000
        ${className}
      `}
      data-aos="fade-up"
      data-aos-delay={300 * index}
    >
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
          left-0 sm:group-hover:-left-1/2
          duration-700
          bg-blue group-hover:bg-greylight
        `}>
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
              hover:opacity-60
              duration-300
              w-8
              h-8
            `}
          />
        </p>
      </div>
    </TransitionLink>
  )
}