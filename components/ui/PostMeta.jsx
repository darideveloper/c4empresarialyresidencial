import { useTranslations } from 'next-intl'

/**
 * Post visible metadata for blog page and post details
 * 
 * @param {object} props - Props object
 * @param {string} props.date - Post date
 * @param {string} props.lang - Post language
 * @param {string} props.author - Post author
 * @returns 
 */
export default function PostMeta({ date, lang='', author='' }) {

  // Translations
  const t = useTranslations('Blog.Posts')
  const tMeta = useTranslations('Meta')
  if (!author) author = tMeta('title')

  return (
    <p
      className={`
        opacity-50
        my-0
        mt-2
      `}
    >
      <time
        className={`
          date
        `}
        dateTime={date}
      >
        {date}
      </time>
      &nbsp;
      {t('by')}
      &nbsp;
      <span
        className={`
          author
          font-bold
        `}
      >
        {author}
      </span>
      &nbsp;
      {
        lang
        &&
        <span
          className={`
            lang
          `}
        > 
          ({
            lang === 'en'
            ? 'English'
            : 'Español'
          })
        </span>
      }
    </p>
  )
}