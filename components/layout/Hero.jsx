// Libs
import { fontTitle } from "@/libs/fonts"
import { useTranslations } from 'next-intl'

// Components
import Image from "next/image"
import Cta from "@/components/Cta"

// Ornaments
import Bubble from "@/components/ornaments/Bubble"

// Custom css
import "@/css/hero.sass"


/**
 * Hero section for homepage
 */
export default function Hero() {

  const t = useTranslations('HomePage.Hero')
  const tMeta = useTranslations('Meta')

  return (
    <section
      id="hero"
      className={`
        hero
        relative
        w-full
        overflow-hidden
        py-8
      `}
    >
      {/* Ornaments */}
      <Bubble
        className={`
          top-0
          left-0
          -mt-32
          -ml-32
          md:scale-150
        `}
      />


      <Bubble
        className={`
          bottom-20
          right-0
          -mr-16
          scale-75 md:scale-125
        `}
      />

      {/* Content */}
      <div
        className={`
          container
          mx-auto
          flex
          flex-col md:flex-row
          items-center
          justify-center
        `}
      >
        <div
          className={`
            text
            text-center md:text-left
            w-full md:w-1/2
          `}
        >
          <h1
            className={`
              font-bold
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              ${fontTitle.className}
            `}
          >
            <span
              data-aos="fade-right"
              data-aos-delay="1200"
              className={`inline-block`}
            >
              {t('title.beforeText')}
            </span>
            <br />
            <span
              className={`
                text-blue
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                inline-block
              `}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {tMeta('company')}&nbsp;
            </span>
            <span
              data-aos="fade-right"
              data-aos-delay="1200"
              className={`inline-block`}
            >
              - {t('title.afterText')}
            </span>
          </h1>

          <Cta
            href="/cotizar"
            text={t('cta')}
            dataAos="fade-up"
            dataAosDelay="1800"
          />

          <p
            className={`
              mt-6
            `}
            data-aos="fade-up"
            data-aos-delay="2200"
          >
            <span>
              {t('text.beforeText')}&nbsp;
            </span>
            <span
              className={`
              text-blue
              font-bold
            `}
            >
              {tMeta('company')}&nbsp;
            </span>
            <span>
              {t('text.afterText')}
            </span>
          </p>

        </div>

        <div
          className={`
            hero-image
            w-[300px] sm:w-[500px] md:w-[350px] lg:w-[500px] xl:w-[600px]
            h-[300px] sm:h-[500px] md:h-[350px] lg:h-[500px] xl:h-[600px]
            my-16
            relative
            mx-auto
          `}
        >
          <Image
            src="/images/hero/background.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
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
            src="/images/hero/lines.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              lines
              absolute
              w-8/12
              left-[17%]
              bottom-[29%]
            `}
          />
          <Image
            src="/images/hero/cloud.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              cloud
              absolute
              w-7/12
              left-[20%]
              bottom-0
            `}
          />
          <Image
            src="/images/hero/guard.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              guard
              absolute
              w-4/12
              left-[38%]
              bottom-0
            `}
          />
          <Image
            src="/images/hero/dialog.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              dialog
              absolute
              w-1/12
              right-[35%]
              bottom-[39%]
            `}
          />
          <Image
            src="/images/hero/pc.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              pc
              absolute
              w-2/12
              top-[50%]
              left-[0%]
            `}
          />
          <Image
            src="/images/hero/worker-1.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              worker-1
              absolute
              w-[32%]
              top-[15%]
              left-[4%]
            `}
          />
          <Image
            src="/images/hero/phone.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              phone
              absolute
              w-2/12
              top-[12%]
              left-[40%]
            `}
          />
          <Image
            src="/images/hero/worker-2.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              worker-2
              absolute
              w-[32%]
              top-[17%]
              right-[5%]
            `}
          />
          <Image
            src="/images/hero/server.webp"
            width={800}
            height={800}
            alt={t('imgAlt')}
            className={`
              server
              absolute
              w-2/12
              bottom-[30%]
              right-[0%]
            `}
          />
          

        </div>
      </div>
    </section>
  )
}