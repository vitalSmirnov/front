"use client"

import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { createUserProfileStore, UserProfileState, UserProfileStore } from "../stores/userProfileStore"

export type UserStoreProfileApi = ReturnType<typeof createUserProfileStore>

export const UserStoreProfileContext = createContext<UserStoreProfileApi | undefined>(undefined)

export interface UserStoreProviderProps {
  children: ReactNode
  initState?: UserProfileState
}

export const UserStoreProfileProvider = ({ children, initState }: UserStoreProviderProps) => {
  const storeRef = useRef<UserStoreProfileApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createUserProfileStore(initState)
  }

  return <UserStoreProfileContext.Provider value={storeRef.current}>{children}</UserStoreProfileContext.Provider>
}

export const useUserProfileStore = <T,>(selector: (store: UserProfileStore) => T): T => {
  const userStoreProfileContext = useContext(UserStoreProfileContext)

  if (!userStoreProfileContext) {
    throw new Error(`useUserStore must be used within UserStoreProvider`)
  }

  return useStore(userStoreProfileContext, selector)
}
