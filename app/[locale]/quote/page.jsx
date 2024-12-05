// libs
import { getTranslations } from 'next-intl/server'

// Sections
import QuoteForm from '@/components/layouts/QuoteForm'

export default function QuotePage() {
  return (
    <>
      <QuoteForm />
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