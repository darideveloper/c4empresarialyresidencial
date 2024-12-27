'use client'

// Lang
import { useTranslations } from 'next-intl'

// Routing
import { useRouter } from '@/i18n/routing'
import { usePathname } from 'next/navigation'

// Components
import LangBtn from '@/components/ui/LangBtn'
import Image from 'next/image'


/**
 * Language selector component
 * 
 * @param {object} props - Props object
 * @param {string} props.className - Additional classes
 * @returns 
 */
export default function LangSelector({ className }) {

  const t = useTranslations('General.Langs')

  const router = useRouter()

  const langs = [
    "es",
    "en",
  ]
  const currentPage = usePathname()
  const currentlang = currentPage.split('/')[1]
  const currentPageNoLang = currentPage.split('/').slice(2).join('/')

  return (
    <div
      className={`
        lang-selector
        flex
        items-center
        justify-center
        ${className}
      `}>
      {
        langs.map(lang => (
          <LangBtn
            key={lang}
            icon={false}
            active={currentlang === lang}
            onClick={() => router.replace(`/${currentPageNoLang}`, { locale: lang })}
            className={`
              capitalize
            `}
          >
            <div
              className={`
                lang-content
                flex
                items-center
                justify-center
                gap-2
              `}
            >
              <p
                className={`
                  full-text
                  hidden sm:block
                `}
              >
                {t(lang)}
              </p>
              <p
                className={`
                  small-text
                  sm:hidden
                `}	
              >
                {lang}
              </p>
              <Image 
                src={`/images/flags/${lang}.webp`}
                alt={t(lang)}
                width={50}
                height={50}
                className={`
                  w-6
                  h-6
                  opacity-50                
                `}
              />
            </div>
          </LangBtn>
        ))
      }

    </div>
  )
}