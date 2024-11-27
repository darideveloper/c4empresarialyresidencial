"use client"

// Sections
import Hero from '@/components/layouts/Hero'
import WhyUs from '@/components/layouts/WhyUs'
import Products from '@/components/layouts/Products'
import TabsCompany from '@/components/layouts/TabsCompany'
import Profits from '@/components/layouts/Profits'
import Testimonials from '@/components/layouts/Testimonials'


// Libs
import AOS from "aos"
import { useEffect } from 'react'

export default function CompanyPage() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: window.innerWidth < 768 ? 0 : 100,
    })
  }, [])

  return (
    <>
      <Hero langKey="CompanyPage"/>
      <WhyUs />
      <TabsCompany />
      <Profits />
      <Products productsFilter="company"/>
      <Testimonials />
    </>
  )
}