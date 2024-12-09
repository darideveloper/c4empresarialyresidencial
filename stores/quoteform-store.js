// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export const defaultInitState = {
  selectedService: null,
  companySector: null,
  companyEmployees: null,
}

export const createQuoteFormStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    setSelectedService: (selectedService) => set({ selectedService }),
    setCompanySector: (companySector) => set({ companySector }),
    setCompanyEmployees: (companyEmployees) => set({ companyEmployees }),
  }))
}
