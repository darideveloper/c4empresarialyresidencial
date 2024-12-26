'use client'

// Libs
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'

// Components
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'



/**
   * Submit data to dashboard api and show a success/error message
   * 
   * @param {Object} data Form data
   * @param {string} endpoint Endpoint to send data to
   * @param {Object} tAlerts Translations object with alerts data
   */
export async function sendDataApi(data, endpoint, tAlerts) {

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
      title: tAlerts('success.title'),
      text: tAlerts('success.text'),
      icon: 'success',
      confirmButtonText: tAlerts('success.confirmButtonText'),
    })
  } else {
    console.error({ response })
    Swal.fire({
      title: tAlerts('error.title'),
      text: tAlerts('error.text'),
      icon: 'error',
      confirmButtonText: tAlerts('error.confirmButtonText'),
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
 * @param {Object} props.t - Translations object with inputs data
 */
export default function Form({ inputsData, onSubmit, submitText = "", tInputs }) {

  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   console.log({ loading })
  // }, [loading])

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
        submitText &&
        <Button
          text={submitText}
        />
      }
    </form>
  )
}