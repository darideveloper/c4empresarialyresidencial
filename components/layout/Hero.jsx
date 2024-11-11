// Components
import Image from "next/image"
import Cta from "@/components/Cta"

// Libs
import { fontTitle } from "@/libs/fonts"
import { useTranslations } from 'next-intl'

/**
 * Hero section for homepage
 */
export default function Hero() {

  const t = useTranslations('HomePage.hero')
  const tMeta = useTranslations('Meta')

  return (
    <div
      id="hero"
      className={`
        hero
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
          <span>
            {t('title.beforeText')}
          </span>
          <br />
          <span
            className={`
              text-blue
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            `}
          >
            {tMeta('company')}&nbsp;
          </span>
          <span>
            - {t('title.afterText')}
          </span>
        </h1>

        <Cta
          href="/cotizar"
          text={t('cta')}
        />

        <p
          className={`
            mt-6
          `}
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
        className={`
          w-full md:w-1/2
        `}
        alt={t('imgAlt')}
      />

    </div >
  )
}