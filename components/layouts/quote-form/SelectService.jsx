"use client"

// Libs and hooks
import { useTranslations } from 'next-intl'

// Components
import CtaXL from "@/components/ui/CtaXL"

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


/**
 * Select Service screen for QuoteForm
 */
export default function SelectService({ }) {

  const t = useTranslations('QuotePage.form.screens.selectService')

  const options = ["company", "residential"]

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
        gap-8 md:gap-12
        w-full
        max-w-xl
        mx-auto
      `}
    >

      {
        options.map((option, index) => (
          <CtaXL
            key={index}
            index={index}
            text={t(`options.${option}.text`)}
            textHover={t(`options.${option}.textHover`)}
            imageSrc={`/images/${option}.svg`}
            imageAlt={t(`options.${option}.imgAlt`)}
            onClick={() => { setSelectedService(option) }}
            active={selectedService === option}
          />
        ))
      }
    </div>
  )
}