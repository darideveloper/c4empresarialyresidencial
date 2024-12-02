import Title from '@/components/ui/Title'
import DividerTriangle from "@/components/ui/ornaments/DividerTriangle"

/**
 * 3 cards template layout
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
        py-28 md:py-40 lg:py-48 xl:py-60
        -mt-10 md:mt-10 xl:-mt-20
        text-white
        ${className}
      `}
    >

      {/* Divider */}
      <DividerTriangle
        className={`
          fill-white
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
          fill-white
          bottom-[-1px]
        `}
      />
    </section>
  )
}