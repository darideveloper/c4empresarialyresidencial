"use client"

// Libs
import { useTranslations } from 'next-intl'

// Hooks
import { useState, useEffect } from 'react'

// Components
import Button from "@/components/ui/Button"
import Title from "@/components/ui/Title"

// Form screens
import Steps from '@/components/layouts/Steps'
import ContactInfo from '@/components/layouts/quote-form/ContactInfo'
import SelectService from '@/components/layouts/quote-form/SelectService'
import CompanyInfo from '@/components/layouts/quote-form/CompanyInfo'
import ResidentialInfo from '@/components/layouts/quote-form/ResidentialInfo'

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function QuoteForm() {

  // Zustand data
  const { 
    // Data
    selectedService,

    // Hooks
    setSelectedService
  } = useQuoteFormStore((state) => state)

  const t = useTranslations('QuotePage.form')

  // Form state
  const [currentStep, setCurrentStep] = useState(0)
  const stepsData = [
    {
      "key": "selectService",
      "screen": <SelectService />,
      "subscreens": [],
      "subscreensState": null,
      "requiredFields": [selectedService],
    },
    {
      "key": "serviceInfo",
      "screen": null,
      "subscreens": [
        {
          "key": "company",
          "screen": <CompanyInfo />,
          "requiredFields": [],
        },
        {
          "key": "residential",
          "screen": <ResidentialInfo />,
          "requiredFields": [],
        }
      ],
      "subscreensState": selectedService,
    },
    {
      "key": "contactInfo",
      "screen": <ContactInfo />,
      "subscreens": [],
      "subscreensState": null,
      "requiredFields": [],
    }
  ]
  const [screenReady, setScreenReady] = useState(false)

  // Calculate current screen data
  const currentStepData = stepsData[currentStep]
  let currentStepTitle = ""
  if (currentStepData.screen) {
    currentStepTitle = t(`screens.${currentStepData.key}.title`)
  } else {
    const subScreenState = currentStepData.subscreensState
    currentStepTitle = t(`screens.${currentStepData.key}.${subScreenState}.title`)
  }
  const isLastStep = currentStep === stepsData.length - 1
  
  // Validate required fields to enable next button
  const requiredFields = currentStepData.requiredFields
  useEffect(() => {
    // Validate all required fields are not null
    const notNull = requiredFields.every(field => field !== null)
    if (notNull) {
      setScreenReady(true)
    }
  }, requiredFields)

  
  return (
    <div
      className={`
        steps-form
      `}
    >
      {/* Steps selector */}
      <Steps
        stepsData={stepsData}
        currentStep={currentStep}
        setStep={setCurrentStep}
      />

      <div
        className={`
          screen-wrapper
          container
          mx-auto
          px-2
          my-8
        `}
      >
        <Title>
          {currentStepTitle}
        </Title>
        {/* Render current screen or subscreen */}
        {
          currentStepData.screen || currentStepData.subscreens.map((subscreen, index) => (
            subscreen.state === selectedService && subscreen.screen
          ))
        }
      </div>

      <div
        className={`
          buttons
          w-full
          flex
          justify-center
          items-center
          gap-4
        `}
      >
        <Button
          text={t('buttons.back')}
          className="bg-gray text-white"
          onClick={() => setCurrentStep(currentStep - 1)}
          showArrow={false}
          disabled={currentStep === 0}
        />
        <Button
          text={isLastStep ? t('buttons.submit') : t('buttons.next')}
          className="bg-blue text-white"
          onClick={() => {
            if (isLastStep) {
              // TODO: Submit form
              console.log('Submit form')
            } else {
              setCurrentStep(currentStep + 1)
            }
          }}
          showArrow={false}
          disabled={!screenReady}
        />
      </div>
    </div>
  )
}