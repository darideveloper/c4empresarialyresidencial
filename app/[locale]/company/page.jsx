// libs
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

// Components
import HeroImageCompany from '@/components/ui/anim-images/HeroImageCompany'

// Sections
import Hero from '@/components/layouts/Hero'
import WhyUs from '@/components/layouts/WhyUs'
import Products from '@/components/layouts/Products'
import TabsCompany from '@/components/layouts/TabsCompany'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'

// Current page slug
const page = "company"


export default function CompanyPage() {

  const tMeta = useTranslations('Meta')

  // Metadata
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

      <Hero langKey="CompanyPage" HeroImage={HeroImageCompany} />
      <WhyUs />
      <TabsCompany />
      <Profits />
      <Products productsFilter="company" />
      <Testimonials testimonialsFilter="company" />
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
    title: t(`${page}.title`),
    description: t(`${page}.description`),

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