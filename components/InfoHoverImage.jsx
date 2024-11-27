import Image from 'next/image'
import { Link } from '@/i18n/routing'

/**
 * Image that shows info when hover (title and text)
 * 
 * @param {object} props
 * @param {string} props.href - Link to the image
 * @param {string} props.imageSrc - Image src
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.title - Title of the image
 * @param {string} props.text - Text of the image
 * @param {string} props.className - Extra classes
 * @returns 
 */
export default function InfoImage({ href, imageSrc, imageAlt, title, text, className }) {
  return (
    <Link
      className={`
        img-wrapper
        border-2
        rounded-2xl
        overflow-hidden
        shadow-lg
        group
        relative 
        w-full
        inline-block
        ${className}
        debug
      `}
      href={href}
    >

      <div
        className={`
          texts
          absolute
          w-full
          h-full
          top-0
          left-0
          flex
          flex-col
          justify-center
          items-center
          p-4
          text-center
          text-white
          z-20
        `}
      >
        <div
          className={`
          bg-blue
            bg
            absolute
            w-full
            h-full
            top-0
            left-0
            opacity-0 group-hover:opacity-90
            -z-10
            duration-300
          `}
        >

        </div>

        <div 
          className={`
            content
            opacity-0 group-hover:opacity-90
            duration-300
          `}
        >
          <h3
            className={`
              text-xl
              mb-8
            `}
          >
            {title}
          </h3>
          <p>{text}</p>
        </div>
      </div>

      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
        className={`
          w-full
        `}
      />
    </Link>
  )
}