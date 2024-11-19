"use client"

// Sections
import Hero from '@/components/layout/Hero'
import WhyUs from '@/components/layout/WhyUs'
import HomeCompany from '@/components/layout/HomeCompany'
import Products from '@/components/layout/Products'

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
      <HomeCompany />
      <Products />
    </>
  )
}