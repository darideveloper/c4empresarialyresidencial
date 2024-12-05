// libs
import { getTranslations } from 'next-intl/server'

// Components
import HeroImageCompany from '@/components/ui/anim-images/HeroImageCompany'

// Sections
import Hero from '@/components/layouts/Hero'
import WhyUs from '@/components/layouts/WhyUs'
import Products from '@/components/layouts/Products'
import TabsCompany from '@/components/layouts/TabsCompany'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'


export default function CompanyPage() {
  return (
    <>
      <Hero langKey="CompanyPage" HeroImage={HeroImageCompany}/>
      <WhyUs />
      <TabsCompany />
      <Profits />
      <Products productsFilter="company"/>
      <Testimonials />
    </>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  return {
    description: t('description.company'),
  }
}