import Cta from '@/components/Cta'

/**
 * Info card for tabs component
 * 
 * @param {object} props - Props object
 * @param {string} props.title - Title of the card
 * @param {string} props.text - Text to display
 * @param {string} props.ctaText - CTA text
 * @param {function} props.tabChanging - Function to change tabs
 */
export default function TabCard({ title, text, ctaText, tabChanging }) {
  return (
    <div
      className={`
        tab-card
        max-w-5xl
        mx-auto
        my-14
        flex
        flex-col
        items-start
        justify-center
        ${tabChanging ? 'opacity-0' : 'opacity-100'}
        duration-500
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
        href="/cotizar"
        text={ctaText}
        className={`
          text-md
        `}
      />
    </div>
  )
}