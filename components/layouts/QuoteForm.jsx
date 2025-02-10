"use client"

// Libs
import { useTranslations } from 'next-intl'

// Hooks
import { useState, useEffect } from 'react'

// Components
import Title from "@/components/ui/Title"
import NextBackButtons from "@/components/layouts/NextBackButtons"

// Form screens
import Steps from '@/components/layouts/Steps'
import ContactInfo from '@/components/layouts/quote-form/ContactInfo'
import SelectService from '@/components/layouts/quote-form/SelectService'
import ResidentialType from '@/components/layouts/quote-form/ResidentialType'
import CompanySector from '@/components/layouts/quote-form/CompanySector'
import CompanyEmployees from '@/components/layouts/quote-form/CompanyEmployees'
import Features from '@/components/layouts/quote-form/Features'
import CompanyDetails from '@/components/layouts/quote-form/CompanyDetails'
import ResidentialDetails from '@/components/layouts/quote-form/ResidentialDetails'

// Methods
import { sendDataApi } from '@/libs/form'

// zustand
import { useQuoteFormStore } from '@/providers/quoteform-store-provider'


export default function QuoteForm() {

  // Translations
  const t = useTranslations('QuotePage.form')
  const tAlerts = useTranslations('QuotePage.form.screens.contact.messages')

  // Zustand data
  const {
    // states
    selectedService,
    companySector,
    companyEmployees,
    features,
    residentialType,
    branches,
    hasWifi,
    users,
    rooms,
    monitoring,
    hasCameras,

    // actions
    getFormData,
  } = useQuoteFormStore((state) => state)

  // Data
  // Object with all form states
  const formSates = {
    selectedService,
    companySector,
    companyEmployees,
    features,
    residentialType,
    branches,
    hasWifi,
    rooms,
    users,
    monitoring,
    hasCameras,
  }

  // Screens data
  const startScreens = [
    {
      "key": "selectService",
      "screen": <SelectService />,
      "requiredFields": ["selectedService"],
      "show_btns_top": true,
    }
  ]
  const endScreens = [
    {
      "key": "features",
      "screen": <Features />,
      "requiredFields": ["features"],
      "show_btns_top": true,
    },
    {
      "key": "contactInfo",
      "screen": <ContactInfo onSubmit={onSubmit} />,
      "requiredFields": ["selectedService"],
      "show_btns_top": false,
    },
  ]
  const companyScreens = [
    {
      "key": "companySector",
      "screen": <CompanySector />,
      "requiredFields": ["companySector"],
      "show_btns_top": true,
    },
    {
      "key": "companyEmployees",
      "screen": <CompanyEmployees />,
      "requiredFields": ["companyEmployees"],
      "show_btns_top": false,
    },
    {
      "key": "companyDetails",
      "screen": <CompanyDetails />,
      "requiredFields": ["branches", "hasWifi", "users", "hasCameras"],
      "show_btns_top": false,
    },
  ]
  const residentialScreens = [
    {
      "key": "residentialType",
      "screen": <ResidentialType />,
      "requiredFields": ["residentialType"],
      "show_btns_top": false,
    },
    {
      "key": "residentialDetails",
      "screen": <ResidentialDetails />,
      "requiredFields": ["rooms", "hasWifi", "monitoring", "hasCameras"],
      "show_btns_top": false,
    },
  ]

  // Form state
  const [currentStep, setCurrentStep] = useState(0)
  const [screensData, setScreensData] = useState([...startScreens, ...endScreens])
  const [screenReady, setScreenReady] = useState(false)
  const [currentScreenData, setCurrentScreenData] = useState(screensData[currentStep])

  // Calculate current screen data
  let screenTitle = t(`screens.${currentScreenData.key}.title`)
  const isLastStep = currentStep === screensData.length - 1
  const nextText = isLastStep ? t('buttons.submit') : t('buttons.next')

  // Funtion hanlders
  // Submit function to handle react form
  async function onSubmit(data) {

    // Set default value to empty fields
    const defaultValues = {
      companySector: "n/a",
      companyEmployees: "n/a",
      residentialType: "n/a",
    }
    const formData = getFormData()
    for (const key in defaultValues) {
      if (formData[key] === "") {
        formData[key] = defaultValues[key]
      }
    }


    // Add states to data
    let fullData = {
      ...data,
      ...formData,
    }

    await sendDataApi(fullData, 'quote', tAlerts)
  }

  // Move to specific step / screen with transition
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

  // Move to previous step
  function handleGoBack() {
    handleGoStep(currentStep - 1)
  }

  // Move to next step
  function handleGoNext() {
    if (isLastStep) {
      // Submit react form to activate validation
      const form = document.querySelector('.screens-form-wrapper form')
      form.requestSubmit()
    } else {
      // Move to next step
      handleGoStep(currentStep + 1)
    }
  }

  // Event handlers
  // Validate required fields to enable next button
  useEffect(() => {
    // Validate all required fields are not null
    let requiredFieldsNames = currentScreenData.requiredFields
    let requiredFields = requiredFieldsNames.map(field => formSates[field])
    const validFields = requiredFields.every((field) => {
      if (field === "") {
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
    features,
    residentialType,
    branches,
    hasWifi,
    users,
    rooms,
    monitoring,
    hasCameras,
  ])

  // Update current screen data
  useEffect(() => {
    setCurrentScreenData(screensData[currentStep])
  }, [currentStep])

  // Update screens flow 
  useEffect(() => {
    // Set dynamic screens flow
    if (selectedService === 'company') {
      setScreensData([...startScreens, ...companyScreens, ...endScreens])
    } else if (selectedService === 'residential') {
      setScreensData([...startScreens, ...residentialScreens, ...endScreens])
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
        setStep={handleGoStep}
      />

      <div
        className={`
          screen-wrapper
          container
          mx-auto
          px-2
          mt-8
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
          `}
        >
          {t(`screens.${currentScreenData.key}.description`)}
        </p>

        {/* Top Buttons */}
        {
          currentScreenData.show_btns_top ?
          <NextBackButtons
            backDisabled={currentStep === 0}
            handleGoBack={handleGoBack}
            nextDisabled={!screenReady}
            handleGoNext={handleGoNext}
            nextText={nextText}
          />
          :
          <div 
            className={`
              separator
              mt-12
            `}
          />
        }

        {/* Render current screen or subscreen */}
        {
          currentScreenData.screen
        }
      </div>

      {/* Buttons */}
      <NextBackButtons
        backDisabled={currentStep === 0}
        handleGoBack={handleGoBack}
        nextDisabled={!screenReady}
        handleGoNext={handleGoNext}
        nextText={nextText}
      />
    </div>
  )
}