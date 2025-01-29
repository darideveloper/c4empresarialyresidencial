'use client'

// Libs
import Swal from 'sweetalert2'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

// Components
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'


/**
 * Base form with dynamic inputs
 * @param {Object} props 
 * @param {Array} props.inputsData - Array of objects with input data
 * @param {string} props.inputsData.name - Name of the input
 * @param {string} props.inputsData.type - Type of the input.
 * @param {boolean} props.inputsData.required - If the input is required
 * @param {string} props.onSubmit - Function to handle form submit
 * @param {string} props.submitText - Text for the submit button. If empty, the button won't render
 * @param {Object} props.t - Translations object with inputs data
 */
export default function Form({ inputsData, onSubmit, submitText = "", tInputs, showPrivacy = true }) {

  // Translations
  const tPrivacy = useTranslations('General.Contact.form.inputs.privacy')
  const privacyLink = (
    <p>
      {tPrivacy('label.pre')} &nbsp;
      <Link 
        href="/privacy"
        className={`
          text-blue
        `}
        target="_blank"
      >
        {tPrivacy('label.link')}
      </Link>
    </p>
  )
  
  // States
  const [loading, setLoading] = useState(false)

  // Form state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  // Generate inputs data
  for (const inputData of inputsData) {
    inputData.register = register
    inputData.errors = errors
    inputData.label = tInputs(`${inputData.name}.label`)
    inputData.placeholder = tInputs(`${inputData.name}.placeholder`)
    inputData.errorMessage = tInputs(`${inputData.name}.errorMessage`)
  }

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        // Submit data and reset form
        setLoading(true)
        await onSubmit(data)
        reset()
        setLoading(false)
      })}
      className={`
        w-10/12
        mx-auto
        duration-300
        ${loading ? 'opacity-30': 'opacity-100'}
      `}
    >

      {/* Render inputs */}
      {
        inputsData.map((inputData, index) => (
          <Input
            key={index}
            index={index}
            {...inputData}
          />
        ))
      }

      {
        showPrivacy &&
        <Input
          type="checkbox"
          name="privacy"
          label={privacyLink}
          required={true}
          register={register}
          errors={errors}
          errorMessage={tPrivacy('errorMessage')}
          data-aos="fade-up"
          data-aos-delay={2500}
        />
      }

      {
        submitText &&
        <Button
          text={submitText}
        />
      }
    </form>
  )
}