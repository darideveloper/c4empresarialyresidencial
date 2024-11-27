"use client"

// Sections
import Hero from '@/components/layouts/Hero'
import HeroImageHome from '@/components/hero-images/HeroImageHome'
import WhyUs from '@/components/layouts/WhyUs'
import ResidentialCompany from '@/components/layouts/ResidentialCompany'
import Products from '@/components/layouts/Products'
import TabsResidential from '@/components/layouts/TabsResidential'
import TabsCompany from '@/components/layouts/TabsCompany'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'


// Libs
import AOS from "aos"
import { useEffect } from 'react'

export default function HomePage() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: window.innerWidth < 768 ? 0 : 100,
    })
  }, [])

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