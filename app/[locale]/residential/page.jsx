// libs
import { getTranslations } from 'next-intl/server'

// Components
import HeroImageResidential from '@/components/ui/anim-images/HeroImageResidential'

// Sections
import Hero from '@/components/layouts/Hero'
import WhyUs from '@/components/layouts/WhyUs'
import Products from '@/components/layouts/Products'
import TabsResidential from '@/components/layouts/TabsResidential'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'

export default function ResidentialPage() {

  return (
    <>
      <Hero langKey="ResidentialPage" HeroImage={HeroImageResidential} />
      <WhyUs />
      <TabsResidential />
      <Profits />
      <Products productsFilter="residential"/>
      <Testimonials />
    </>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  return {
    description: t('description.residential'),
  }
}