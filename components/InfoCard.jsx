import { useTranslations } from 'next-intl'

/**
 * Card with svg icon, title and description
 * 
 * @param {object} props - Props object
 * @param {string} props.svgPath - Path of the SVG icon
 * @param {string} props.title - Title of the card
 * @param {string} props.description - Description of the card
 * @returns 
 */
export default function InfoCard({ svgPath, title, description }) {

  const t = useTranslations('HomePage.WhyUs')

  return (
    <article
      className={`
        card
        border-2
        border-white hover:border-blue
        rounded-lg
        p-8
        group
        hover:bg-blue
        duration-700
        hover:scale-105
      `}
    >

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`
          fill-current
          w-20 h-20
          mx-auto
          group-hover:scale-50
          duration-500
        `}
      >
        <path d={svgPath} />
      </svg>


      <h3
        className={`
          text-xl
          font-bold
          my-4
          group-hover:text-3xl
          duration-300
        `}
      >
        {title}
      </h3>

      <p>
        {description}
      </p>
    </article>
  )
}