'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

import { LuMenu, LuX } from "react-icons/lu"
import { TransitionLink } from '@/components/utils/TransitionLink'
import Image from 'next/image'
import LangSelector from '@/components/ui/LangSelector'


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
      "name": "contact",
      "url": "#contact"
    },
    {
      "name": "blog",
      "url": "/blog"
    },
    {
      "name": "quote",
      "url": "/quote"
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
        <TransitionLink href="/">
          <Image
            src="/images/logo.webp"
            alt={'Logo ' + tMeta('title')}
            width={150}
            height={150}
            className={`
              w-12
              hover:scale-105
              hover:opacity-60
              duration-300
              my-2
            `}
          />
        </TransitionLink>

        <div
          className={`
            nav-wrapper
            flex
            items-center
            justify-between
          `}
        >
          {/* Nav */}
          <nav>
            <ul
              className={`
                flex
                flex-col lg:flex-row
                justify-center
                gap-4
                fixed lg:relative
                bg-grey lg:bg-blue
                shadow-lg lg:shadow-none
                shadow-black
                ${menuOpen ? 'left-0' : '-left-72'} lg:left-0
                top-0
                h-screen lg:h-auto
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
                    <TransitionLink
                      href={link.url}
                      className={`
                        text-white
                        ${activeLink && 'font-bold'}
                        ${activeLink && 'opacity-30'}
                        ${activeLink && 'cursor-default'}
                        border-b-0 lg:border-b-2
                        lg:border-blue ${!activeLink && 'hover:border-white'}
                        duration-300
                        px-16 lg:px-2
                        py-4 lg:py-1
                        inline-block
                      `}
                      disable={`${activeLink}`}
                      onClick={(e) => {
                        if (activeLink) e.preventDefault()
                        setMenuOpen(false)
                      }}
                    >
                      {t(`nav.${link.name}`)}
                    </TransitionLink>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Lang */}
          <LangSelector
            className={`
              mx-4
            `}
          />

          {/* Menu button */}
          <button
            className={`
              w-8
              h-8
              lg:hidden
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


      </div>

    </header>
  )
}