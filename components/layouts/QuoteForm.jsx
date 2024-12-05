"use client"

// Libs
import { useTranslations } from 'next-intl'

// Hooks
import { useState, useEffect } from 'react'

// Components
import Cta from '@/components/ui/Cta'

// Form screens
import Steps from '@/components/layouts/Steps'
import ContactInfo from '@/components/layouts/QuoteFormScreens/ContactInfo'
import SelectService from '@/components/layouts/QuoteFormScreens/SelectService'
import ServiceInfo from '@/components/layouts/QuoteFormScreens/ServiceInfo'


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
      <Steps
        stepsData={stepsData}
        currentStep={currentStep}
        setStep={setCurrentStep}
      />
    </div>
  )
}