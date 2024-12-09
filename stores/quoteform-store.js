// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export const defaultInitState = {
  selectedService: null,
  companyStep: "sector",
}

export const createQuoteFormStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    setSelectedService: (selectedService) => set({ selectedService }),
    setCompanyStep: (companyStep) => set({ companyStep }),
  }))
}
