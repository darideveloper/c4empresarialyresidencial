"use client"

import { useTranslations } from 'next-intl'

import Link from 'next/link'
import Contact from '@/components/layouts/Contact'

/**
 * Global Footer section of the layout
 */
export default function Footer() {

  const tMeta = useTranslations('Meta')

  return (
    <footer>
      <Contact />
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
          {tMeta('company')}&nbsp; © 2024 - All rights reserved
          Powered by&nbsp;
          <Link 
            href="mailto:darideveloper@gmail.com"
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