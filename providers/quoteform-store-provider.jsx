'use client'

import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { createQuoteFormStore } from '@/stores/quoteform-store'

export const QuoteFormContext = createContext(undefined)

export const QuoteFormStoreProvider = ({ children }) => {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = createQuoteFormStore()
  }

  return (
    <QuoteFormContext.Provider value={storeRef.current}>
      {children}
    </QuoteFormContext.Provider>
  )
}

export const useQuoteFormStore = (selector) => {
  const quoteFormContext = useContext(QuoteFormContext)

  if (!quoteFormContext) {
    throw new Error(`useQuoteForm must be used within QuoteFormProvider`)
  }

  return useStore(quoteFormContext, selector)
}
