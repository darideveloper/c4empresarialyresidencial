'use client'

import { useRouter } from '@/i18n/routing'
import { usePathname } from 'next/navigation'

import Btn from '@/components/ui/Btn'


/**
 * Language selector component
 * 
 * @param {object} props - Props object
 * @param {string} props.className - Additional classes
 * @returns 
 */
export default function LangSelector({ className }) {

  const router = useRouter()

  const langs = [
    "en",
    "es",
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
          <Btn
            key={lang}
            className={`
            `}
            icon={false}
            active={currentlang === lang}
            onClick={() => router.replace(`/${currentPageNoLang}`, { locale: lang })}
          >
            {lang.toUpperCase()}
          </Btn>
        ))
      }

    </div>
  )
}