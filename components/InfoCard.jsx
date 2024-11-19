/**
 * Card with svg icon, title and description
 * 
 * @param {object} props - Props object
 * @param {string} props.svgPath - Path of the SVG icon
 * @param {string} props.title - Title of the card
 * @param {string} props.description - Description of the card
 * @param {string} props.className - Additional classes
 * @param {string} props.svgClassName - Additional classes for the SVG icon
 * @param {number} props.aosDelay - Delay for AOS animation. Default is 0
 * @returns 
 */
export default function InfoCard({
  svgPath,
  title,
  description,
  className,
  svgClassName,
  aosDelay = 0
}) {

  console.log({aosDelay})

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
      data-aos="zoom-in"
      data-aos-delay={aosDelay}
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
        data-aos="fade-up"
        data-aos-delay={aosDelay + 300}
      >
        {title}
      </h3>

      <p
        data-aos="fade-up"
        data-aos-delay={aosDelay + 500}
      >
        {description}
      </p>
    </article>
  )
}