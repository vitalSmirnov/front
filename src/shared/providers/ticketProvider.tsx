"use client"

import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"
import { createTicketStore, TicketState, TicketStore } from "../stores/ticketStore"

export type TicketStoreApi = ReturnType<typeof createTicketStore>

export const TicketStoreContext = createContext<TicketStoreApi | undefined>(undefined)

export interface TicketStoreProviderProps {
  children: ReactNode
  initState?: TicketState
}

export const TicketStoreProvider = ({ children, initState }: TicketStoreProviderProps) => {
  const storeRef = useRef<TicketStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createTicketStore(initState)
  }

  return <TicketStoreContext.Provider value={storeRef.current}>{children}</TicketStoreContext.Provider>
}

export const useTicketStore = <T,>(selector: (store: TicketStore) => T): T => {
  const ticketStoreContext = useContext(TicketStoreContext)

  if (!ticketStoreContext) {
    throw new Error(`useTicketStore must be used within TicketStoreProvider`)
  }

  return useStore(ticketStoreContext, selector)
}
