'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'


import Title from '@/components/Title'
import TabButton from '@/components/tabs/TabButton'
import TabCard from '@/components/tabs/TabCard'


/**
 * Tabs with storytelling for homepage
 */
export default function TestimonialsHome() {
  
    const t = useTranslations('HomePage.TabsResidential')
    const [activeTab, setActiveTab] = useState("house")
    const [tabChanging, setTabChanging] = useState(false)

    // Change tab with fade
    function changeTab(newTab) {

      // Start fade out
      setTabChanging(true)

      // Change value after 0.5s
      setTimeout(() => {
        setActiveTab(newTab)
      }, 500)

      // Start fade in
      setTimeout(() => {
        setTabChanging(false)
      }, 600)
    }
  
    const tabsNames = [
      "house",
      "apartment",
      "residential",
      "hightValue",
    ]
  
    return (
      <section
        id="testimonials-home"
        className={`
          testimonials-home
          mt-10
          container
          mx-auto
        `}
      >
  
        <Title>
          {t('title')}
        </Title>

        <div 
          className={`
            tabs
            grid
            grid-cols-1 sm:grid-cols-2 md:grid-cols-4
            gap-4
            max-w-5xl
            mx-auto
          `}
        >
          {
            tabsNames.map((tabName, index) => (
              <TabButton
                key={index}
                name={tabName}
                text={t(`tabs.${tabName}.tabName`)}
                activeTab={activeTab}
                setActive={changeTab}
              />
            ))
          }
        </div>

        <TabCard 
          title={t(`tabs.${activeTab}.title`)}
          text={t(`tabs.${activeTab}.text`)}
          ctaText={t(`tabs.${activeTab}.ctaText`)}
          tabChanging={tabChanging}
        />
  
        
  
      </section>
    )
}