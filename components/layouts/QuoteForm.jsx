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


export default function QuoteForm() {

  // Temp state data
  const [selectedService, setSelectedService] = useState("company")

  const t = useTranslations('QuotePage.form')

  // Form state
  const [currentStep, setCurrentStep] = useState(0)
  const [stepsData, setStepsData] = useState([
    {
      "key": "selectService",
      "screen": <SelectService />,
      "isDone": false,
      "subscreens": [],
      "subscreensState": null,
    },
    {
      "key": "serviceInfo",
      "screen": null,
      "isDone": false,
      "subscreens": [
        {
          "key": "company",
          "screen": <CompanyInfo />,
        },
        {
          "key": "residential",
          "screen": <ResidentialInfo />,
        }
      ],
      "subscreensState": selectedService,
    },
    {
      "key": "contactInfo",
      "screen": <ContactInfo />,
      "isDone": false,
      "subscreens": [],
      "subscreensState": null,
    }
  ])

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

  // Monitor data
  useEffect(() => {
    console.log({ currentStep })
  }, [currentStep])

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
              console.log('Submit form')
            } else {
              setCurrentStep(currentStep + 1)
            }
          }}
          showArrow={false}
        />
      </div>
    </div>
  )
}