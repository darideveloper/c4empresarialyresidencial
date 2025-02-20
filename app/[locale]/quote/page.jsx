// libs
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

// Sections
import QuoteForm from '@/components/layouts/QuoteForm'

// zustand
import { QuoteFormStoreProvider } from '@/providers/quoteform-store-provider'

// Current page slug
const page = "quote"


export default function QuotePage() {

  // Metadata
  const tMeta = useTranslations('Meta')
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": tMeta(`${page}.title`),
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/es/${page}`,
    "description": tMeta(`${page}.description`),
    "publisher": {
      "@type": "Organization",
      "name": tMeta('author'),
    }
  }

  return (
    <>
      {/* Render json ld */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <QuoteFormStoreProvider>
        <QuoteForm />
      </QuoteFormStoreProvider>
    </>
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