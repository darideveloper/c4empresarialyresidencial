// Libs and hooks
import { useTranslations } from 'next-intl'

// Components
import ImageBtn from "@/components/ui/ImageBtn"

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


/**
 * Company Sector screen for QuoteForm
 */
export default function CompanySector() {

  const t = useTranslations('QuotePage.form.screens.companySector')

  // Zustand data
  const { companySector, setCompanySector } = useQuoteFormStore(
    (state) => state,
  )

  const businessSectors = [
    "agriculture",
    "real-estate-and-rentals",
    "hunting",
    "retail-and-wholesale-trade",
    "construction",
    "education",
    "entertainment",
    "livestock",
    "lodging",
    "manufacturing-industry",
    "media",
    "research-and-development",
    "mining",
    "fishing",
    "healthcare",
    "professional-and-cultural-services",
    "financial-and-insurance-services",
    "business-support",
    "forestry",
    "information-technology",
    "transportation-and-storage",
    "other"
  ]

  return (
    <div 
      className={`
        sectors-wrapper
        flex
        flex-wrap
        justify-center
        gap-8
      `}
    >
      {
        businessSectors.map((sector, index) => (
          <ImageBtn
            key={index}
            imageSrc={`/images/form/company/sectors/${sector}.webp`}
            imageAlt={t(`imagesAlt`)  + " " + t(`sectors.${sector}`)}
            text={t(`sectors.${sector}`)}
            selected={false}
            onClick={() => { setCompanySector(t(`sectors.${sector}`)) }}
            active={companySector === sector}
          />
        ))
      }
    </div>
  )
}