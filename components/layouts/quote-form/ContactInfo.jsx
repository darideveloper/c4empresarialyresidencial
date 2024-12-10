'use client'

import Form from '@/components/layouts/templates/Form'

/**
 * Contact screen for quote form
 * @param {object} props Component props
 * @param {function} props.onSubmit Form submit handler
 */
export default function ContactInfo({ onSubmit }) {

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
        form-wrapper
        w-full
        max-w-2xl
        mx-auto
      `}
    >
      <Form 
        inputsData={inputsData}
        onSubmit={onSubmit}
      />

    </div>
  )
}