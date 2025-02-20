// libs
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

// Components
import HeroImageResidential from '@/components/ui/anim-images/HeroImageResidential'

// Sections
import Hero from '@/components/layouts/Hero'
import WhyUs from '@/components/layouts/WhyUs'
import Products from '@/components/layouts/Products'
import TabsResidential from '@/components/layouts/TabsResidential'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'

// Current page slug
const page = "residential"


export default function ResidentialPage() {

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

      <Hero langKey="ResidentialPage" HeroImage={HeroImageResidential} />
      <WhyUs />
      <TabsResidential />
      <Profits />
      <Products productsFilter="residential"/>
      <Testimonials testimonialsFilter="residential"/>
    </>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  return {
    description: t('residential.description'),
    title: t('residential.title'),
  }
}