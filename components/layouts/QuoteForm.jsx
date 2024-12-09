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
import ResidentialInfo from '@/components/layouts/quote-form/ResidentialInfo'
import CompanySector from '@/components/layouts/quote-form/CompanySector'
import CompanyEmployees from '@/components/layouts/quote-form/CompanyEmployees'
import CompanyFeature from '@/components/layouts/quote-form/CompanyFeature'


// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function QuoteForm() {

  // Zustand data
  const { 
    // Data
    selectedService,
    companyStep,

    // Hooks
    setSelectedService
  } = useQuoteFormStore((state) => state)

  const formSates = {
    selectedService,
    companyStep
  }

  // Translations
  const t = useTranslations('QuotePage.form')

  // Screens data
  const startScreen = {
    "key": "selectService",
    "screen": <SelectService />,
    "requiredFields": ["selectedService"],
  }
  const endScreen = {
    "key": "contactInfo",
    "screen": <ContactInfo />,
    "requiredFields": ["selectedService"],
  }
  const companyScreens = [
    {
      "key": "companySector",
      "screen": <CompanySector />,
      "requiredFields": ["selectedService"],
    },
    {
      "key": "companyEmployees",
      "screen": <CompanyEmployees />,
      "requiredFields": ["selectedService"],
    },
    {
      "key": "companyFeature",
      "screen": <CompanyFeature />,
      "requiredFields": ["selectedService"],
    }
  ]
  const residentialScreens = [
    {
      "key": "residential",
      "screen": <ResidentialInfo />,
      "requiredFields": ["selectedService"],
    }
  ]

  // Form state
  const [currentStep, setCurrentStep] = useState(0)
  const [screensData, setScreensData] = useState([startScreen, endScreen])   
  const [screenReady, setScreenReady] = useState(false)
  const [currentScreenData, setCurrentScreenData] = useState(screensData[currentStep])

  // Calculate current screen data
  let screenTitle = t(`screens.${currentScreenData.key}.title`)
  const isLastStep = currentStep === screensData.length - 1
  
  // Validate required fields to enable next button
  useEffect(() => {
    // Validate all required fields are not null
    let requiredFieldsNames = currentScreenData.requiredFields
    let requiredFields = requiredFieldsNames.map(field => formSates[field])
    const notNull = requiredFields.every(field => field !== null)
    if (notNull) {
      setScreenReady(true)
    }
  }, [selectedService])

  // Update current screen data
  useEffect(() => {
    setCurrentScreenData(screensData[currentStep])
  }, [currentStep])

  // Update screens flow 
  useEffect(() => {
    // Validate all required fields are not null
    if (selectedService === 'company') {
      setScreensData([startScreen, ...companyScreens, endScreen])
    } else if (selectedService === 'residential') {
      setScreensData([startScreen, ...residentialScreens, endScreen])
    }
  }, [selectedService])

  
  return (
    <div
      className={`
        steps-form
      `}
    >
      {/* Steps selector */}
      <Steps
        screensData={screensData}
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
        <Title
          className={`
            max-w-2xl
            mx-auto
            mb-6
          `}
        >
          {screenTitle}
        </Title>
        <p
          className={`
            text-center
            max-w-2xl
            mx-auto
            mb-12
          `}
        >
          {t(`screens.${currentScreenData.key}.description`)}
        </p>
        {/* Render current screen or subscreen */}
        {
          currentScreenData.screen
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