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
import CompanyFeatures from '@/components/layouts/quote-form/CompanyFeatures'


// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function QuoteForm() {

  // Zustand data
  const { 
    selectedService,
    companySector,
    companyEmployees,
    companyFeatures,
  } = useQuoteFormStore((state) => state)

  const formSates = {
    selectedService,
    companySector,
    companyEmployees,
    companyFeatures,
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
      "requiredFields": ["companySector"],
    },
    {
      "key": "companyEmployees",
      "screen": <CompanyEmployees />,
      "requiredFields": ["companyEmployees"],
    },
    {
      "key": "companyFeatures",
      "screen": <CompanyFeatures />,
      "requiredFields": ["companyFeatures"],
    }
  ]
  const residentialScreens = [
    {
      "key": "residential",
      "screen": <ResidentialInfo />,
      "requiredFields": [],
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
    const validFields = requiredFields.every((field) => {
      if (field === null) {
        return false
      } else if (Array.isArray(field) && field.length === 0) {
        return false
      } else {
        return true
      }
    })

    if (validFields) {
      setScreenReady(true)
    } else {
      setScreenReady(false)
    }
    
  }, [
    currentScreenData,
    selectedService,
    companySector,
    companyEmployees,
    companyFeatures,
  ])

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

  // Move to specific step / screen
  async function handleGoStep(steepNumber) {

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    // Start transition
    const screenWrapper = document.querySelector('.screen-wrapper')
    screenWrapper.classList.add('transition-form')
    await sleep(500)

    // Go to specific step
    setCurrentStep(steepNumber)

    // Scroll to top
    await sleep(100)
    window.scrollTo(0, 0)
    
    // End transition
    await sleep(500)
    screenWrapper.classList.remove('transition-form')

  }

  
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
          onClick={() => {handleGoStep(currentStep - 1)}}
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
              // Move to next step
              handleGoStep(currentStep + 1)
            }
          }}
          showArrow={false}
          disabled={!screenReady}
        />
      </div>
    </div>
  )
}