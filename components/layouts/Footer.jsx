"use client"

import { useTranslations } from 'next-intl'

import Link from 'next/link'
import Contact from '@/components/layouts/Contact'

/**
 * Global Footer section of the layout
 */
export default function Footer() {

  const tMeta = useTranslations('Meta')
  const t = useTranslations('General.Footer')

  const links = [
    {
      "name": "privacy",
      "link": "/privacy-notice"
    }
  ]

  return (
    <footer>
      <Contact />

      <div
        className={`
          top-bar
          flex
          justify-center
          items-center
          gap-4
          my-2
          font-bold
        `}
      >
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            className={`
              text-blue
              duration-300
              hover:underline
              hover:opacity-80
            `}
            target="_blank"
          >
            {t(link.name)}
          </Link>
        ))}
      </div>

      <div className="bottom-bar">
        <p
          className={`
            text-sm
            text-center
            bg-blue
            text-white
            p-3
          `}
        >
          {tMeta('title')}&nbsp; © 2024 - All rights reserved
          Powered by&nbsp;
          <Link
            href="https://api.whatsapp.com/send?phone=5214493402622"
            target="_blank"
            className={`
              font-bold
            `}
          >
            Dari Dev
          </Link>
        </p>

      </div>
    </footer>
  )
}