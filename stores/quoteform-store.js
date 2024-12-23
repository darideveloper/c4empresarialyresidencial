// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export const defaultInitState = {
  selectedService: "",
  companySector: "",
  companyEmployees: "",
  features: [],
  residentialType: "",
  branches: 1,
  hasWifi: true,
  users: [],
  rooms: 1,
  monitoring: []
}

export const createQuoteFormStore = (initState = defaultInitState) => {
  return createStore()((set, get) => ({
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
    setResidentialType: (residentialType) => set({ residentialType }),
    getFormData: () => {
      const state = get()
      return {
        selectedService: state.selectedService,
        companySector: state.companySector,
        companyEmployees: state.companyEmployees,
        features: state.features,
        residentialType: state.residentialType,
      }
    },
    setBranches: (branches) => set({ branches }),
    setHasWifi: (hasWifi) => set({ hasWifi }),
    addUser: (user) => set((state) => ({
      users: [...state.users, user],
    })),
    removeUser: (user) => set((state) => ({
      users: state.users.filter((u) => u !== user),
    })),
    setRooms: (rooms) => set({ rooms }),
    addMonitoring: (monitoring) => set((state) => ({
      monitoring: [...state.monitoring, monitoring],
    })),
    removeMonitoring: (monitoring) => set((state) => ({
      monitoring: state.monitoring.filter((m) => m !== monitoring),
    })),
  }))
}
