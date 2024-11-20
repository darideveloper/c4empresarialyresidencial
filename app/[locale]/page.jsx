"use client"

// Sections
import Hero from '@/components/layout/Hero'
import WhyUs from '@/components/layout/WhyUs'
import ResidentialCompany from '@/components/layout/ResidentialCompany'
import Products from '@/components/layout/Products'
import TabsResidential from '@/components/layout/TabsResidential'
import TabsCompany from '@/components/layout/TabsCompany'

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
      <Hero />
      <WhyUs />
      <ResidentialCompany />
      <TabsCompany />
      <Products />
      <TabsResidential />
    </>
  )
}