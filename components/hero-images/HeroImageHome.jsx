import Image from 'next/image'

/**
 * Hero image animated for Home page
 * 
 * @param {Object} props - The props of the component
 * @param {String} props.imageAlt - The alt text for the image
 * @returns 
 */
export default function HeroImageHome({ imageAlt }) {
  return (
    <div
      className={`
        hero-image-home
        w-[300px] sm:w-[500px] md:w-[350px] lg:w-[500px] xl:w-[600px]
        h-[300px] sm:h-[500px] md:h-[350px] lg:h-[500px] xl:h-[600px]
        my-16
        relative
        mx-auto
      `}
    >
      <Image
        src="/images/svg-parts/hero/background.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          background
          w-full
          h-auto
          absolute
          top-0
          left-0
          z-0
        `}
      />
      <Image
        src="/images/svg-parts/hero/lines.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          lines
          absolute
          w-8/12
          left-[17%]
          bottom-[29%]
        `}
      />
      <Image
        src="/images/svg-parts/hero/cloud.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          cloud
          absolute
          w-7/12
          left-[20%]
          bottom-0
        `}
      />
      <Image
        src="/images/svg-parts/hero/guard.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          guard
          absolute
          w-4/12
          left-[38%]
          bottom-0
        `}
      />
      <Image
        src="/images/svg-parts/hero/dialog.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          dialog
          absolute
          w-1/12
          right-[35%]
          bottom-[39%]
        `}
      />
      <Image
        src="/images/svg-parts/hero/pc.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          pc
          absolute
          w-2/12
          top-[50%]
          left-[0%]
        `}
      />
      <Image
        src="/images/svg-parts/hero/worker-1.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          worker-1
          absolute
          w-[32%]
          top-[15%]
          left-[4%]
        `}
      />
      <Image
        src="/images/svg-parts/hero/phone.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          phone
          absolute
          w-2/12
          top-[12%]
          left-[40%]
        `}
      />
      <Image
        src="/images/svg-parts/hero/worker-2.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          worker-2
          absolute
          w-[32%]
          top-[17%]
          right-[5%]
        `}
      />
      <Image
        src="/images/svg-parts/hero/server.webp"
        width={800}
        height={800}
        alt={imageAlt}
        className={`
          server
          absolute
          w-2/12
          bottom-[30%]
          right-[0%]
        `}
      />
    </div>
  )
}