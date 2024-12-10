// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export const defaultInitState = {
  selectedService: null,
  companySector: null,
  companyEmployees: null,
  features: [],
  contactData: [],
}

export const createQuoteFormStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    setSelectedService: (selectedService) => set({ selectedService }),
    setCompanySector: (companySector) => set({ companySector }),
    setCompanyEmployees: (companyEmployees) => set({ companyEmployees }),
    addFeature: (feature) => set((state) => ({
      features: [...state.features, feature],
    })),
    removeFeature: (feature) => set((state) => ({
      features: state.features.filter((f) => f !== feature),
    })),
  }))
}
