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


export default function HomePage() {
  return (
    <>
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