// libs
import { getTranslations } from 'next-intl/server'

// Sections
import QuoteForm from '@/components/layouts/QuoteForm'

// zustand
import { QuoteFormStoreProvider } from '@/providers/quoteform-store-provider'

export default function QuotePage() {
  return (
    <>
      <QuoteFormStoreProvider>
        <QuoteForm />
      </QuoteFormStoreProvider>
    </>
  )
}


export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  return {
    description: t('description.quote'),
  }
}