'use client'

import { useForm } from "react-hook-form"
import { useTranslations } from 'next-intl'

import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

import Swal from 'sweetalert2'


/**
   * Submit data to dashboard api and show a success/error message
   * 
   * @param {Object} data Form data
   * @param {string} endpoint Endpoint to send data to
   * @param {Object} t Translations object
   */
export async function sendDataApi(data, endpoint, tContact) {

  // Send data to server side endpoint
  const response = await fetch(`/api/dashboard/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    Swal.fire({
      title: tContact('messages.success.title'),
      text: tContact('messages.success.text'),
      icon: 'success',
      confirmButtonText: tContact('messages.success.confirmButtonText'),
    })
  } else {
    console.error({ response })
    Swal.fire({
      title: tContact('messages.error.title'),
      text: tContact('messages.error.text'),
      icon: 'error',
      confirmButtonText: tContact('messages.error.confirmButtonText'),
    })
  }
}

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