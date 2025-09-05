import { createStore } from "zustand/vanilla"
import { UserWithMail } from "../entities/User/User"
import { AxiosInstance } from "../api"
import { AxiosResponse } from "axios"
import { UserRoleEnum } from "../entities/RoleEnum/UserRoleEnum"

export type UserProfileState = {
  profile: UserWithMail | null
}

export type UserProfileActions = {
  getUserProfile: (id: string) => Promise<UserWithMail>
  grantRole: (id: string, role: UserRoleEnum) => Promise<UserWithMail>
  revokeRole: (id: string, role: UserRoleEnum) => Promise<UserWithMail>
}

export type UserProfileStore = UserProfileState & UserProfileActions

export const defaultInitState: UserProfileState = {
  profile: null,
}

export const createUserProfileStore = (initState: UserProfileState = defaultInitState) => {
  return createStore<UserProfileStore>()(set => ({
    ...initState,
    getUserProfile: async payload => {
      try {
        const res = await AxiosInstance.get<{}, AxiosResponse<UserWithMail>>(`/users/${payload}`)
        set(() => ({ profile: res.data }))
        return res.data
      } catch (error) {
        console.error("Error fetching user profile", error)
        throw error
      }
    },
    revokeRole: async (id, role) => {
      try {
        const res = await AxiosInstance.patch<{ id: string; role: UserRoleEnum }, AxiosResponse<UserWithMail>>(
          `/users/${id}/role/reject`,
          { role }
        )
        set(() => ({ profile: res.data }))
        return res.data
      } catch (error) {
        console.error("Error fetching user profile", error)
        throw error
      }
    },
    grantRole: async (id, role) => {
      try {
        const res = await AxiosInstance.patch<{ id: string; role: UserRoleEnum }, AxiosResponse<UserWithMail>>(
          `/users/${id}/role/grant`,
          { role }
        )
        set(() => ({ profile: res.data }))
        return res.data
      } catch (error) {
        console.error("Error fetching user profile", error)
        throw error
      }
    },
  }))
}
