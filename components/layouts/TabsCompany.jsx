'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'


import Title from '@/components/Title'
import TabButton from '@/components/tabs/TabButton'
import TabCard from '@/components/tabs/TabCard'


/**
 * Tabs with storytelling for homepage
 */
export default function TabsCompany() {

  // Data
  const tabsNames = [
    "house",
    "apartment",
    "residential",
    "hightValue",
    "house2",
    "apartment2",
    "residential2",
    "hightValue2",
  ]

  // State
  const t = useTranslations('HomePage.TabsCompany')
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
        debug
      `}
    >

      <Title>
        {t('title')}
      </Title>

      <div
        className={`
          content
          flex
          flex-col md:flex-row
          justify-center
          items-center
          max-w-5xl
          mx-auto
          w-full
          gap-12
        `}
      >

        <div
          className={`
            tabs
            grid
            grid-cols-1
            mx-auto
            w-full md:w-4/12
            gap-4
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
          className={`
            w-full md:w-8/12            
          `}
        />
      </div>
    </section>
  )
}