'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

import { LuMenu, LuX } from "react-icons/lu";
import { Link } from '@/i18n/routing'
import Image from 'next/image'


/**
 * Global Header section of the layout
 */
export default function Header() {

  // Get translations
  const t = useTranslations('General.Header')
  const tMeta = useTranslations('Meta')

  // Header state
  const [menuOpen, setMenuOpen] = useState(false)
  const currentPage = usePathname()
  console.log({ currentPage })

  // Header data
  const links = [
    {
      "name": "company",
      "url": "/company"
    },
    {
      "name": "residential",
      "url": "/residential"
    },
    {
      "name": "profits",
      "url": "/#profits"
    },
    {
      "name": "contact",
      "url": "/#contact"
    }
  ]
  const menuIconStyles = `
    w-full
    h-full
    text-white
    absolute
    top-0
    left-0
    duration-300
  ` 

  return (
    <header
      className={`
        bg-blue
        relative
      `}
    >
      <div
        className={`
          mx-auto
          container
          flex
          items-center
          justify-between
        `}
      >
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt={'Logo ' + tMeta('company')}
            width={150}
            height={150}
            className={`
              w-16
              rounded-full
              hover:scale-105
              hover:shadow-xl
              border-blue hover:border-white
              border-2
              duration-300
              my-2
            `}
          />
        </Link>
     
        <nav>
          <ul
            className={`
              flex
              flex-col md:flex-row
              justify-center
              gap-4
              fixed md:relative
              bg-grey md:bg-blue
              shadow-lg md:shadow-none
              shadow-black
              ${menuOpen ? 'left-0' : '-left-72'} md:left-0
              top-0
              h-screen md:h-auto
              z-20
              duration-700
            `}
          >
            {links.map((link, index) => {

              let activeLink = currentPage.endsWith(link.url)

              return (
                <li
                  key={index}
                  className={`
                    px-2
                  `}
                >
                  <Link
                    href={link.url}
                    className={`
                      text-white
                      ${activeLink && 'font-bold'}
                      ${activeLink && 'opacity-30'}
                      ${activeLink && 'cursor-default'}
                      border-b-0 md:border-b-2
                      md:border-blue ${!activeLink && 'hover:border-white'}
                      duration-300
                      px-16 md:px-2
                      py-4 md:py-1
                      inline-block
                    `}
                    disable={`${activeLink}`}
                  >
                    {t(`nav.${link.name}`)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          className={`
            w-8
            h-8
            md:hidden
            relative
          `}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuMenu
            className={`
              ${menuOpen ? 'opacity-0' : 'opacity-100'}
              ${menuIconStyles}
            `}
          />
          <LuX
            className={`
              ${!menuOpen ? 'opacity-0' : 'opacity-100'}
              ${menuIconStyles}
            `}
          />
        </button>

      </div>

    </header>
  )
}