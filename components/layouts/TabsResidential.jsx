'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'


import Title from '@/components/Title'
import TabButton from '@/components/tabs/TabButton'
import TabCard from '@/components/tabs/TabCard'


/**
 * Tabs with storytelling for residential data
 */
export default function TabsResidential() {

  // Data
  const tabsNames = [
    "house",
    "apartment",
    "residential",
    "hightValue",
  ]

  // State
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

  return (
    <section
      id="tabs-company"
      className={`
        tabs-company
        my-28
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
        data-aos="fade-down"
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

      <div 
        className={`
          tabcard-wrapper
          w-full
        `}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <TabCard
          title={t(`tabs.${activeTab}.title`)}
          text={t(`tabs.${activeTab}.text`)}
          ctaText={t(`tabs.${activeTab}.ctaText`)}
          tabChanging={tabChanging}
        />
      </div>
      
    </section>
  )
}