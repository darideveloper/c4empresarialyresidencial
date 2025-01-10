/**
 * Post visible metadata for blog page and post details
 * 
 * @param {object} props - Props object
 * @param {string} props.date - Post date
 * @param {string} props.lang - Post language
 * @returns 
 */
export default function PostMeta({ date, lang='', author='C4 Team' }) {
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
      &nbsp;by&nbsp;
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