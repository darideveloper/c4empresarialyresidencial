'use client'

import { useForm } from "react-hook-form"
import { useTranslations } from 'next-intl'

import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

import Swal from 'sweetalert2'


/**
 * Base form with dynamic inputs
 * @param {Object} props 
 * @param {Array} props.inputsData - Array of objects with input data
 * @param {string} props.inputsData.name - Name of the input
 * @param {string} props.inputsData.type - Type of the input.
 * @param {boolean} props.inputsData.required - If the input is required
 * @param {string} props.onSubmit - Function to handle form submit
 * @param {string} props.submitText - Text for the submit button. If empty, the button won't render
 */
export default function Form({ inputsData, onSubmit, submitText = "" }) {

  const t = useTranslations('General.Contact')

  // Form state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  // Generate inputs data
  for (const inputData of inputsData) {
    inputData.register = register
    inputData.errors = errors
    inputData.label = t(`form.inputs.${inputData.name}.label`)
    inputData.placeholder = t(`form.inputs.${inputData.name}.placeholder`)
    inputData.errorMessage = t(`form.inputs.${inputData.name}.errorMessage`)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`
        w-10/12
        mx-auto
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
        submitText &&
        <Button
          text={t('form.submit')}
        />
      }
    </form>
  )
}