"use client"

// Libs and hooks
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

// Components
import CtaXL from "@/components/ui/CtaXL"

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


/**
 * SelectService screen for QuoteForm
 * 
 */
export default function SelectService({ }) {

  const t = useTranslations('QuotePage.form.screens.selectService')

  const [optionsData, setOptionsData] = useState([
    {
      "name": "company",
      "active": false,
    },
    {
      "name": "residential",
      "active": false,
    },
  ])

  // Zustand data
  const { selectedService, setSelectedService } = useQuoteFormStore(
    (state) => state,
  )

  return (
    <div
      className={`
        ctas-wrapper
        flex
        flex-col
        items-center
        justify-center
        gap-4 md:gap-12
        w-full
        max-w-xl
        mx-auto
      `}
    >

      {
        optionsData.map((optionData, index) => (
          <CtaXL
            key={index}
            index={index}
            text={t(`options.${optionData.name}.text`)}
            textHover={t(`options.${optionData.name}.textHover`)}
            imageSrc={`/images/${optionData.name}.svg`}
            imageAlt={t(`options.${optionData.name}.imgAlt`)}
            onClick={() => { setSelectedService(optionData.name) }}
          />
        ))
      }
    </div>
  )
}