'use client'

// Libs
import { useTranslations } from 'next-intl'

// Components
import Form from '@/components/layouts/templates/Form'

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


/**
 * Contact screen for quote form
 * @param {object} props Component props
 * @param {function} props.onSubmit Form submit handler
 */
export default function ContactInfo({ onSubmit }) {

  // Zustand data
  const { selectedService } = useQuoteFormStore((state) => state)

  const tInputs = useTranslations(`QuotePage.form.screens.contact.inputs.${selectedService}`)

  // Generate inputs data
  const inputsData = [
    {
      "name": "name",
      "type": "text",
      "required": true,
    },
    {
      "name": "email",
      "type": "email",
      "required": true,
    },
    {
      "name": "phone",
      "type": "tel",
      "required": true,
    }
  ]

  return (
    <div 
      className={`
        screens-form-wrapper
        w-full
        max-w-2xl
        mx-auto
      `}
    >
      <Form 
        inputsData={inputsData}
        onSubmit={onSubmit}
        tInputs={tInputs}
      />

    </div>
  )
}