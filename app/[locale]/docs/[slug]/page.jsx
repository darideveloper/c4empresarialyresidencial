// Libs
import { getTranslations } from 'next-intl/server'
import { getDocData } from '@/libs/docs'
import { notFound } from 'next/navigation'

// Components
import Title from '@/components/ui/Title'

// Css
import '@/css/globals.sass'
import '@/css/post-content.sass'


export default async function PrivacyNotice({ params }) {

  // Get doc data
  const { slug, locale } = await params
  const docData = await getDocData(locale, slug)

  if (!docData) {
    notFound()
  }

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

  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  const docData = await getDocData(locale, slug)
  if (!docData) {
    return {
      description: t('notFound.description'),
      title: t('notFound.title'),
    }
  }

  const image = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-images/home.jpg`,
    width: 700,
    height: 700,
    alt: t('title'),
  }

  return {
    description: t(`${slug}.description`),
    title: t(`${slug}.title`),

    // Open Graph metadata
    openGraph: {
      title: t(`${slug}.title`),
      description: t(`${slug}.description`),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/${slug}`,
      siteName: t('title'),
      images: [image],
      locale,
      type: "website",
    },

    // Twitter metadata
    twitter: {
      card: "summary_large_image",
      title: t(`${slug}.title`),
      description: t(`${slug}.description`),
      images: [image],
      creator: "@DeveloperDari",
    },
  }
}