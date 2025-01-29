
// Libs
import { useTranslations } from 'next-intl'

// Components
import Button from "@/components/ui/Button"

/**
 * Next and Back buttons for step forms
 * 
 * @param {object} props
 * @param {boolean} props.backDisabled
 * @param {function} props.handleGoBack
 * @param {boolean} props.nextDisabled
 * @param {function} props.handleGoNext
 * @param {string} props.nextText
 * @returns 
 */
export default function NextBackButtons({
  backDisabled,
  handleGoBack,
  nextDisabled,
  handleGoNext,
  nextText
}) {
  const t = useTranslations('QuotePage.form')

  const style = `
    bg-blue 
    text-white
    !px-16
    !my-16
  `

  return (
    <div
      className={`
        buttons
        w-full
        flex
        flex-col sm:flex-row
        justify-center
        items-center
        gap-0 sm:gap-4
      `}
    >
      <Button
        text={t('buttons.back')}
        className={`
          ${style}  
          !mb-2 sm:!mb-16 
        `}
        onClick={handleGoBack}
        showArrow={false}
        disabled={backDisabled}
      />
      <Button
        text={nextText}
        className={`
          ${style}
          !mt-2 sm:!mt-16
        `}
        onClick={handleGoNext}
        showArrow={false}
        disabled={nextDisabled}
      />
    </div>
  )
}