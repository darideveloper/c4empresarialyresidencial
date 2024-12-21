'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'


import Title from '@/components/ui/Title'
import TabButton from '@/components/ui/tabs/TabButton'
import TabCard from '@/components/ui/tabs/TabCard'


/**
 * Tabs with storytelling for company data
 */
export default function TabsCompany() {

  // Data
  const tabsNames = [
    "restaurant",
    "cash",
    "retail",
    "hotel",
    "industry",
    "offices",
    "education",
    "construction",
    "transport",
    "government",
    "entertainment",
    "finance",
  ]

  // State
  const t = useTranslations('HomePage.TabsCompany')
  const [activeTab, setActiveTab] = useState("restaurant")
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

      <p
        className={`
          text-center
          max-w-6xl
          mx-auto
        `}
      >
        <span
          data-aos="fade-up"
        >
          Las cámaras de seguridad en un comercio ofrecen múltiples beneficios que van más allá de la simple vigilancia.
        </span>
        <br />
        <span
          data-aos="fade-up"
          data-aos-delay="500"
        >
          A continuación, se detallan algunas de las funciones más relevantes que cumplen estos sistemas en el entorno comercial
        </span>
        <br />
        <span
          className={`
            font-bold
          `}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Los delincuentes o trabajadores deshonesto son menos propensos a actuar si saben que están siendo grabado, pero aun así se ha logrado evadirlos porque no hay supervisión
        </span>
      </p>

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
          my-8
          overflow-hidden
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
            max-h-96
            overflow-y-scroll
            pr-2
            pb-4
          `}
          data-aos="fade-right"
          data-aos-delay="1500"
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
            w-full md:w-8/12 
          `}
          data-aos="fade-left"
          data-aos-delay="2500"
        >
          <TabCard
            title={t(`tabs.${activeTab}.title`)}
            text={t(`tabs.${activeTab}.text`)}
            ctaText={t(`tabs.${activeTab}.ctaText`)}
            tabChanging={tabChanging}
            className={`
              w-full           
            `}
          />
        </div>
      </div>
    </section>
  )
}