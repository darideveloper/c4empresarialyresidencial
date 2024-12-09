// Libs and hooks
import { useTranslations } from 'next-intl'

// Components
import InfoCardImage from "@/components/ui/InfoCardImage"

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function CompanyFeatures() {

  const t = useTranslations('QuotePage.form.screens.companyFeatures')

  // Zustand data
  const {
    // states
    companyFeatures,

    // actions
    addCompanyFeature,
    removeCompanyFeature
  } = useQuoteFormStore(
    (state) => state,
  )

  const featuresOptions = [
    "monitoring",
    "notification",
    "storage",
    "reporting",
    "emergency",
    "tech",
    "support",
    "plans",
  ]

  return (
    <div
      className={`
        features-wrapper
        flex
        flex-wrap
        justify-center
        items-center
        gap-10
      `}
    >
      {
        featuresOptions.map((feature, index) => {

          const isActive = companyFeatures.includes(feature)

          return (
            <button
              key={index}
              className={`
                feature
                w-full sm:w-96
                group
                duration-300
                shadow-grey
                rounded-lg
                ${isActive && 'scale-105'}
                ${isActive && 'shadow-md'}
              `}
              onClick={() => {
                if (isActive) {
                  removeCompanyFeature(feature)
                } else {
                  addCompanyFeature(feature)
                }
              }}
            >
              <InfoCardImage
                title={t(`features.${feature}.title`)}
                description={t(`features.${feature}.description`)}
                imageSrc={`/images/form/company/features/${feature}.svg`}
                className={`
                  text-center
                  border-4
                  border-blue
                  ${isActive ? 'bg-blue' : 'bg-white hover:bg-blue'}
                  ${isActive ? 'text-white' : 'text-blue hover:text-white'}
                `}
              />
            </button>
          )

        })
      }

    </div>
  )
}