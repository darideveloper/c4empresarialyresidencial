// Internationzation
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

// Fonts
import { fontBody } from '@/libs/fonts'

// Global components
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

// Css
import '@/css/globals.sass'
import "aos/dist/aos.css"

/**
 * Main layout (header, footer, and children)
 * 
 * @param {object} props - Props object
 * @param {object} props.children - Children components
 * @param {object} props.params - Parameters object
 * @returns 
 */
export default async function LocaleLayout({ children, params }) {

  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`
          ${fontBody.className}
          bg-white
          text-grey
        `}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}