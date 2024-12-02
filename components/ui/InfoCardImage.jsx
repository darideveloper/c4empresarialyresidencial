import Image from 'next/image'

/**
 * Card with image, title and description
 * 
 * @param {object} props - Props object
 * @param {string} props.imageSrc - Path of the image
 * @param {string} props.title - Title of the card
 * @param {string} props.description - Description of the card
 * @param {string} props.className - Additional classes
 * @param {string} props.imageClassName - Additional classes for the image icon
 * @param {number} props.aosDelay - Delay for AOS animation. Default is 0
 * @returns 
 */
export default function InfoCardImage({
  imageSrc,
  title,
  description,
  className,
  imageClassName,
  aosDelay = 0
}) {

  return (
    <article
      className={`
        card
        duration-1000
        group
      `}
      data-aos="zoom-in"
      data-aos-delay={aosDelay}
    >

      <div 
        className={`
          border-2
          rounded-lg
          p-8
          content
          duration-300
          w-full
          h-full
          ${className}
        `}
      >
        <Image 
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
          className={`
            mx-auto
            w-52
            h-52
            ${imageClassName}
            group-hover:scale-125
            duration-700
          
          `}
        />


        <h3
          className={`
          text-xl
          font-bold
          my-4
          duration-700
        `}
          data-aos="fade-up"
          data-aos-delay={aosDelay + 300}
        >
          {title}
        </h3>

        <p
          data-aos="fade-up"
          data-aos-delay={aosDelay + 500}
        >
          {description}
        </p>
      </div>
    </article>
  )
}