import Title from '@/components/Title'
import DividerTriangle from "@/components/ornaments/DividerTriangle"

/**
 * 3 cards layout
 * 
 * @param {object} props - Component props
 * @param {string} props.title - Title of the section
 * @param {React.ReactNode} props.children - InfoCards components to display
 */
export default function CardsGrid({ title, className, children }) {
  return (
    <section
      id="why-us"
      className={`
        why-us
        relative
        bg-blue
        pt-28 md:pt-40 lg:pt-48 xl:pt-60
        -mt-10 md:mt-10 xl:-mt-20
        pb-0
        text-white
        ${className}
      `}
    >

      {/* Divider */}
      <DividerTriangle
        className={`
          fill-white
          absolute
          top-0
          -scale-x-100
        `}
      />

      <div
        className={`
          container
          mx-auto
        `}
      >

        <Title>
          {title}
        </Title>

        <section
          className={`
            cards
            grid
            grid-cols-1 lg:grid-cols-3
            text-center
            gap-12
          `}
        >
          {children}
        </section>
      </div>

      {/* Divider */}
      <DividerTriangle
        className={`
          -scale-y-100
          mt-20
          fill-white
        `}
      />
    </section>
  )
}