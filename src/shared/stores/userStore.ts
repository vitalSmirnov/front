import { createStore } from "zustand/vanilla"
import { User } from "../entities/User/User"

export type UserState = {
  user: User | null
}

export type UserActions = {
  setUser: (user: User) => void
}

export type UserStore = UserState & UserActions

export const defaultInitState: UserState = {
  user: null,
}

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(set => ({
    ...initState,
    setUser: payload => set(() => ({ user: payload })),
  }))
}
