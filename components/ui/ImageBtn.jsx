import Image from 'next/image'

/**
 * Image with text as button
 * 
 * @param {props} props - Props
 * @param {function} props.onClick - On click event
 * @param {string} props.text - Text to display
 * @param {string} props.className - Additional classes
 * @param {string} props.imageSrc - Image source
 * @param {string} props.imageAlt - Image alt text 
 * @param {boolean} props.active - Selected state
 */
export default function ImageBtn({ onClick = null, text, className, imageSrc, imageAlt, active }) {

  return (
    <button
      onClick={onClick}
      className={`
        bg-blue
        rounded-lg
        ${className}
        w-72
        group
        duration-300
        ${active ? 'scale-110' : 'hover:scale-110'}
        ${active ? 'shadow-lg' : 'shadow-md'}
        shadow-greylight
        overflow-hidden
        border-4
        border-blue
      `}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={200}
        height={100}
        className={`
          mx-auto
          w-full
          h-auto
          rounded-b-lg
          duration-500
          ${active ? 'opacity-100' : 'opacity-70'}
          ${active ? 'grayscale-0' : 'grayscale'}
          hover:grayscale-0
        `}
      />

      <div
        className={`
          text-wrapper
          w-full
          h-14
          text-white
          my-1
          px-3
          flex 
          items-center
          justify-center
        `}
      >
        <p
          className={`
          `}
        >
          {text}
        </p>
      </div>

    </button>
  )
}