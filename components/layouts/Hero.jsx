// Libs
import { fontTitle } from "@/libs/fonts"
import { useTranslations } from 'next-intl'

// Components
import HeroImageHome from "../hero-images/HeroImageHome"
import Cta from "@/components/Cta"

// Ornaments
import Bubble from "@/components/ornaments/Bubble"

// Custom css
import "@/css/svg-animations.sass"


/**
 * Hero section for homepage
 * 
 * @param {String} langKey - The key to get the translations for this section
 * @param {Component} HeroImage - The hero image component
 */
export default function Hero({ langKey, HeroImage }) {

  // Get translations
  const t = useTranslations(`${langKey}.Hero`)
  const tMeta = useTranslations('Meta')
  const isHomePage = langKey === 'HomePage'
  
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
          flex-col ${isHomePage ? 'md:md:flex-row' : 'md:flex-row-reverse'}
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
            className="text-2xl"
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

        <HeroImage
          imageAlt={t('imgAlt')}
        />

      </div>
    </section>
  )
}