// Libs and hooks
import { useTranslations } from 'next-intl'

// Components
import Button from "@/components/ui/Button"

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'

/**
 * Company residential screen for QuoteForm
 */
export default function ResidentialType() {

  const t = useTranslations('QuotePage.form.screens.residentialType')

  // Zustand data
  const { residentialType, setResidentialType } = useQuoteFormStore(
    (state) => state,
  )

  const residentialOptions = [
    "apartment",
    "cottage",
    "townhouse",
    "port",
    "single-family",
    "condo",
    "duplex",
    "other"
  ]

  return (
    <div
      className={`
        residential-type-wrapper
        flex
        flex-col
        justify-center
        items-center
        w-full
        max-w-sm
        mx-auto
      `}
    >
      {
        residentialOptions.map((residential, index) => (
          <Button
            key={index}
            text={t(`types.${residential}`)}
            onClick={() => setResidentialType(residential)}
            showArrow={false}
            className={`
              w-full
            `}
            active={residentialType === residential}
          />
        ))
      }
    </div>
  )
}