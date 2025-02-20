// Sections
import Hero from '@/components/layouts/Hero'
import HeroImageHome from '@/components/ui/anim-images/HeroImageHome'
import WhyUs from '@/components/layouts/WhyUs'
import ResidentialCompany from '@/components/layouts/ResidentialCompany'
import Products from '@/components/layouts/Products'
import TabsResidential from '@/components/layouts/TabsResidential'
import TabsCompany from '@/components/layouts/TabsCompany'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'

// Libs
import { useTranslations } from 'next-intl'


export default function HomePage() {

  const tMeta = useTranslations('Meta')

  // Metadata
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": tMeta('title'),
    "url": process.env.NEXT_PUBLIC_SITE_URL,
    "description": tMeta('home.description'),
    "publisher": {
      "@type": "Organization",
      "name": tMeta('author'),
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": process.env.NEXT_PUBLIC_SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": tMeta('company.title'),
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/es/company`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": tMeta('residential.title'),
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/es/residential`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": tMeta('quote.title'),
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/es/quote`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": tMeta('blog.title'),
          "item": `${process.env.NEXT_PUBLIC_SITE_URL}/es/blog`
        }
      ]
    },
  }

  return (
    <>
      {/* Render json ld */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero langKey="HomePage" HeroImage={HeroImageHome} />
      <WhyUs />
      <ResidentialCompany />
      <TabsCompany />
      <Products productsFilter="all"/>
      <TabsResidential />
      <Profits />
      <Testimonials />
    </>
  )
}