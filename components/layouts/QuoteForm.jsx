"use client"

// Libs
import { useTranslations } from 'next-intl'

// Hooks
import { useState, useEffect } from 'react'

// Components
import Button from "@/components/ui/Button"

// Form screens
import Steps from '@/components/layouts/Steps'
import ContactInfo from '@/components/layouts/quote-form/ContactInfo'
import SelectService from '@/components/layouts/quote-form/SelectService'
import ServiceInfo from '@/components/layouts/quote-form/ServiceInfo'


export default function QuoteForm() {

  const t = useTranslations('QuotePage.form')

  // Form state
  const [currentStep, setCurrentStep] = useState(1)
  const [stepsData, setStepsData] = useState([
    {
      "key": "selectService",
      "title": t('screens.selectService.title'),
      "screen": <SelectService />,
      "isDone": false
    },
    {
      "key": "serviceInfo",
      "title": t('screens.serviceInfo.title'),
      "screen": <ServiceInfo />,
      "isDone": false
    },
    { 
      "key": "contactInfo",
      "title": t('screens.contactInfo.title'),
      "screen": <ContactInfo />,
      "isDone": false
    }
  ])
  const currentStepData = stepsData[currentStep]
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

      {/* Render current screen */}
      {
        currentStepData.screen
      }

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