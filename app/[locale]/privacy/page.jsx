// Libs
import { getTranslations } from 'next-intl/server'
import { getDocData } from '@/libs/docs'


// Components
import Title from '@/components/ui/Title'

// Css
import '@/css/globals.sass'
import '@/css/post-content.sass'

// Current page
const page = "privacy"

export default async function PrivacyNotice({ params }) {

  const { locale } = await params
  const docData = await getDocData(locale, page)


  return (
    <section
      className={`
        container
        max-w-6xl
        mx-auto
      `}
    >

      <Title
        isH1={true}
        className={`
          mt-16
        `}
      >
        {docData.title}
      </Title>
      <div
        dangerouslySetInnerHTML={{ __html: docData.contentHtml }}
        className={`
          post-content
        `}
      >
      </div>
    </section>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  const image = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-images/home.jpg`,
    width: 700,
    height: 700,
    alt: t('title'),
  }

  return {
    description: t(`${page}.description`),
    title: t(`${page}.title`),

    // Open Graph metadata
    openGraph: {
      title: t(`${page}.title`),
      description: t(`${page}.description`),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/${page}`,
      siteName: t('title'),
      images: [image],
      locale,
      type: "website",
    },

    // Twitter metadata
    twitter: {
      card: "summary_large_image",
      title: t(`${page}.title`),
      description: t(`${page}.description`),
      images: [image],
      creator: "@DeveloperDari",
    },
  }
}