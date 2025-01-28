// Libs
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { getDocData } from '@/libs/docs'
import { usePathname } from 'next/navigation'

// Components
import Title from '@/components/ui/Title'
import Link from 'next/link'

// Css
import '@/css/globals.sass'
import '@/css/post-content.sass'


export default function PrivacyNotice() {

  // Get translations
  const t = useTranslations(`PrivacyNotice`)
  const tMeta = useTranslations(`Meta`)

  // Get md file
  const currentPage = usePathname()
  const currentLang = currentPage.split('/')[1]
  const docData = getDocData(currentLang, 'privacy-notice')

  return (
    <>
      <section
        className={`
          container
          mx-auto
          max-w-6xl
          text-justify
          post-content
        `}
      >

        {/* Title  */}
        <br />
        <br />
        <Title
          isH1={true}
        >
          {t('title')}
        </Title>

        {/* Initial text */}
        <p className='font-bold'>
          {t('initial-text.text-1')}
        </p>
        <p className='font-bold'>
          {t('initial-text.text-2.pre')}
          <Link
            href="/"
            target="_blank"
          >
            &nbsp;
            {t('initial-text.text-2.link')}
            &nbsp;
          </Link>
          {t('initial-text.text-2.post')}
        </p>

        {/* identity */}
        <Title>
          {t('identity.title')}
        </Title>
        <p>
          {t('identity.text')}
        </p>

        {/* data */}
        <Title>
          {t('data.title')}
        </Title>
        <p>
          {t('data.text-1')}
        </p>

        <h3>
          {t('data.list-1.subtitle')}
        </h3>

        <ol
          className={`
            list-none
          `}
        >
          <li>
            {t('data.list-1.items.a')}
          </li>
          <li>
            {t('data.list-1.items.b')}
          </li>
          <li>
            {t('data.list-1.items.c')}
          </li>
          <li>
            {t('data.list-1.items.d')}
          </li>
          <li>
            {t('data.list-1.items.e')}
          </li>
        </ol>

        <h3>
          {t('data.list-2.subtitle')}
        </h3>

        <ol
          className={`
            list-none
          `}
        >
          <li>
            {t('data.list-2.items.a')}
          </li>
          <li>
            {t('data.list-2.items.b')}
          </li>
        </ol>

        <p>
          {t('data.text-2')}
        </p>

        {/* purposes */}
        <Title>
          {t('purposes.title')}
        </Title>

        <h2>
          {t('purposes.clients.title')}
        </h2>

        <h3>
          {t('purposes.clients.primary.subtitle')}
        </h3>
        <ol>
          <li>{t('purposes.clients.primary.items.1')}</li>
          <li>{t('purposes.clients.primary.items.2')}</li>
          <li>{t('purposes.clients.primary.items.3')}</li>
          <li>{t('purposes.clients.primary.items.4')}</li>
          <li>{t('purposes.clients.primary.items.5')}</li>
          <li>{t('purposes.clients.primary.items.6')}</li>
          <li>{t('purposes.clients.primary.items.7')}</li>
          <li>{t('purposes.clients.primary.items.8')}</li>
          <li>{t('purposes.clients.primary.items.9')}</li>
          <li>{t('purposes.clients.primary.items.10')}</li>
          <li>{t('purposes.clients.primary.items.11')}</li>
          <li>{t('purposes.clients.primary.items.12')}</li>
          <li>{t('purposes.clients.primary.items.13')}</li>
          <li>{t('purposes.clients.primary.items.14')}</li>
          <li>{t('purposes.clients.primary.items.15')}</li>
        </ol>

        <h3>
          {t('purposes.clients.secondary.subtitle')}
        </h3>
        <ol>
          <li>{t('purposes.clients.secondary.items.1')}</li>
          <li>{t('purposes.clients.secondary.items.2')}</li>
          <li>{t('purposes.clients.secondary.items.3')}</li>
          <li>{t('purposes.clients.secondary.items.4')}</li>
        </ol>

        <h2>
          {t('purposes.users.title')}
        </h2>

        <h3>
          {t('purposes.users.primary.subtitle')}
        </h3>
        <ol>
          <li>{t('purposes.users.primary.items.1')}</li>
          <li>{t('purposes.users.primary.items.2')}</li>
          <li>{t('purposes.users.primary.items.3')}</li>
          <li>{t('purposes.users.primary.items.4')}</li>
          <li>{t('purposes.users.primary.items.5')}</li>
        </ol>

        <h3>
          {t('purposes.users.secondary.subtitle')}
        </h3>
        <ol>
          <li>{t('purposes.users.secondary.items.6')}</li>
        </ol>

        {/* Negation */}
        <Title>
          {t('negation.title')}
        </Title>
        <p>
          {t('negation.text.pre')}
          &nbsp;
          <Link 
            href={`mailto:${t('negation.text.email')}`}
            target="_blank"
          >
            {t('negation.text.email')}
          </Link>
          &nbsp;
          {t('negation.text.post')}
        </p>

        {/* Transfer */}
        <Title>
          {t('transfer.title')}
        </Title>
        <p>
          {t('transfer.text')}
        </p>
        <table>
          <tbody>
            <tr>
              <th>
                {t('transfer.table.heading.column-1')}
              </th>
              <th>
                {t('transfer.table.heading.column-2')}
              </th>
              <th>
                {t('transfer.table.heading.column-3')}
              </th>
            </tr>
            <tr>
              <td>
                {t('transfer.table.row-1.column-1')}
              </td>
              <td>
                {t('transfer.table.row-1.column-2')}
              </td>
              <td>
                {t('transfer.table.row-1.column-3')}
              </td>
            </tr>
            <tr>
              <td>
                {t('transfer.table.row-2.column-1')}
              </td>
              <td>
                {t('transfer.table.row-2.column-2')}
              </td>
              <td>
                {t('transfer.table.row-2.column-3')}
              </td>
            </tr>
          </tbody>
        </table>

      </section>
    </>
  )
}

export async function generateMetadata({ params }) {

  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Meta' })

  return {
    description: t('description.privacy-notice'),
  }
}