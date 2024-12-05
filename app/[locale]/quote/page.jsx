// libs
import { getTranslations } from 'next-intl/server'

export default function QuotePage() {
  return (
    <>
      <p>quote page</p>
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