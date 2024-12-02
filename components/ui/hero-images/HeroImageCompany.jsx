import Image from 'next/image'

/**
 * Hero image animated for Company page
 * 
 * @param {Object} props - The props of the component
 * @param {String} props.imageAlt - The alt text for the image
 * @returns 
 */
export default function HeroImageCompany({ imageAlt }) {
  return (
    <div
      className={`
        hero-image-company
        w-[300px] sm:w-[500px] md:w-[350px] lg:w-[500px] xl:w-[600px]
        h-[300px] sm:h-[500px] md:h-[350px] lg:h-[500px] xl:h-[600px]
        my-16
        relative
        mx-auto
      `}
    >
      <Image
        src="/images/svg-parts/company/bg.webp"
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
        src="/images/svg-parts/company/company.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          company
          h-[75%]
          w-auto
          absolute
          bottom-[10%]
          left-[30%]
          z-0
        `}
      />

      <Image
        src="/images/svg-parts/company/worker-1.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          worker-1
          h-[60%]
          w-auto
          absolute
          bottom-[5%]
          left-[5%]
          z-0
        `}
      />

      <Image
        src="/images/svg-parts/company/worker-2.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          worker-2
          h-[55%]
          w-auto
          absolute
          bottom-[5%]
          right-[5%]
          z-0
        `}
      />

    </div>
  )
}