import Image from 'next/image'

/**
 * Hero image animated for Residential page
 * 
 * @param {Object} props - The props of the component
 * @param {String} props.imageAlt - The alt text for the image
 * @returns 
 */
export default function HeroImageResidential({ imageAlt }) {
  return (
    <div
      className={`
        hero-image-residential
        w-[300px] sm:w-[500px] md:w-[350px] lg:w-[500px] xl:w-[600px]
        h-[300px] sm:h-[500px] md:h-[350px] lg:h-[500px] xl:h-[600px]
        my-16
        relative
        mx-auto
      `}
    >
      <Image
        src="/images/svg-parts/residential/bg.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          bg
          w-full
          h-auto
          absolute
          top-0
          left-0
          z-0
        `}
      />

      <Image
        src="/images/svg-parts/residential/houses.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          houses
          w-1/2
          h-auto
          absolute
          top-0
          right-0
          z-0
        `}
      />

      <Image
        src="/images/svg-parts/residential/main-house.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          main-house
          w-[28%]
          h-auto
          absolute
          top-[4%]
          right-[25%]
          z-0
        `}
      />

      <Image
        src="/images/svg-parts/residential/worker.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          worker
          h-[90%]
          w-auto
          absolute
          top-[-5%]
          left-[15%]
          z-0
        `}
      />

    </div>
  )
}