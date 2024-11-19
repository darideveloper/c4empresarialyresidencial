// Libs
import { fontTitle } from "@/libs/fonts"
import { useTranslations } from 'next-intl'

// Components
import Image from "next/image"
import Cta from "@/components/Cta"

// Ornaments
import Bubble from "@/components/ornaments/Bubble"


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

        <Image
          src="/images/hero.svg"
          width={800}
          height={800}
          alt={t('imgAlt')}
          className={`
            w-full md:w-1/2
          `}
        />
      </div>

    </section >
  )
}