// Libs
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getDocData } from '@/libs/docs'


// Components
import Title from '@/components/ui/Title'

// Css
import '@/css/globals.sass'
import '@/css/post-content.sass'


export default async function PrivacyNotice({ params }) {

  const { locale } = await params
  const docData = await getDocData(locale, 'privacy-notice')

  return (
    <section
      className={`
        container
        max-w-6xl
        mx-auto
      `}
    >
      <Title
        isH1={true}
        className={`
          mt-16
        `}
      >
        {docData.title}
      </Title>
      <div
        dangerouslySetInnerHTML={{ __html: docData.contentHtml }}
        className={`
          post-content
        `}
      >
      </div>
    </section>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  return {
    description: t('description.privacy-notice'),
  }
}