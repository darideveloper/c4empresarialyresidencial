"use client"

// Sections
import Hero from '@/components/layouts/Hero'
import WhyUs from '@/components/layouts/WhyUs'
import Products from '@/components/layouts/Products'
import TabsResidential from '@/components/layouts/TabsResidential'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'


// Libs
import AOS from "aos"
import { useEffect } from 'react'

export default function ResidentialPage() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: window.innerWidth < 768 ? 0 : 100,
    })
  }, [])

  return (
    <>
      <Hero langKey="ResidentialPage"/>
      <WhyUs />
      <TabsResidential />
      <Profits />
      <Products productsFilter="residential"/>
      <Testimonials />
    </>
  )
}