import { useTranslations } from 'next-intl'

/**
 * InfoCard component
 * 
 * @param {object} props - Props object
 * @param {str} props.svgPath - Path of the SVG icon
 * @param {str} props.title - Title of the card
 * @param {str} props.description - Description of the card
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