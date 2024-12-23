// Libs and hooks
import { useTranslations } from 'next-intl'

// Components
import Button from '@/components/ui/Button'
import InputCounter from '@/components/ui/InputCounter'
import Subtitle from '@/components/ui/Subtitle'

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function CompanyDetails() {

  const { branches, setBranches } = useQuoteFormStore(
    (state) => state,
  )

  const t = useTranslations('QuotePage.form.screens.companyDetails')

  return (
    <div>

      {/* Branches */}
      <Subtitle>{t('branches.question')}</Subtitle>
      <div
        className={`
          flex
          justify-center
          items-center
        `}
      >
        <InputCounter 
          minValue={1}
          value={branches}
          setValue={setBranches}
        />
      </div>
    </div>
  )
}