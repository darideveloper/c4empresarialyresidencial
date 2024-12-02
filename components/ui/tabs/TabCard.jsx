import Cta from '@/components/ui/Cta'

/**
 * Info card for tabs component
 * 
 * @param {object} props - Props object
 * @param {string} props.title - Title of the card
 * @param {string} props.text - Text to display
 * @param {string} props.ctaText - CTA text
 * @param {function} props.tabChanging - Function to change tabs
 * @param {string} props.className - Additional classes
 */
export default function TabCard({ title, text, ctaText, tabChanging, className }) {
  return (
    <div
      className={`
        tab-card
        max-w-5xl
        mx-auto
        my-14
        flex
        flex-col
        items-center md:items-start
        justify-center
        ${tabChanging ? 'opacity-0' : 'opacity-100'}
        duration-500
        text-center md:text-left
        ${className}
      `}
    >
      <h3
        className={`
          text-2xl
          mb-6
        `}
      >
        {title}
      </h3>
      <p>
        {text}
      </p>
      <Cta
        href="/quote"
        text={ctaText}
        className={`
          text-md
        `}
      />
    </div>
  )
}