/**
 * Card with svg icon, title and description
 * 
 * @param {object} props - Props object
 * @param {string} props.svgPath - Path of the SVG icon
 * @param {string} props.title - Title of the card
 * @param {string} props.description - Description of the card
 * @param {string} props.className - Additional classes
 * @param {string} props.svgClassName - Additional classes for the SVG icon
 * @returns 
 */
export default function InfoCard({ svgPath, title, description, className, svgClassName }) {

  return (
    <article
      className={`
        border-2
        card
        rounded-lg
        p-8
        duration-300
        ${className}
      `}
    >

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`          
          ${svgClassName}
        `}
      >
        <path d={svgPath} />
      </svg>


      <h3
        className={`
          text-xl
          font-bold
          my-4
          group-hover:text-2xl
          duration-700
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