import { createStore } from "zustand/vanilla"
import { User } from "../entities/User/User"
import { AxiosInstance } from "../api"
import { GetUsersPayload, GetUsersResponse } from "../../features/SuggestUsers/types"
import { UserListPayload, UserListResponse } from "../../widgets/UserList/types"
import { AxiosResponse } from "axios"

export type UserState = {
  user: User | null
  users: User[] | []
}

export type UserActions = {
  setUser: (user: User) => void
  setUsers: (user: User[]) => void
  getUsers: (payload: UserListPayload) => Promise<UserListResponse>
}

export type UserStore = UserState & UserActions

export const defaultInitState: UserState = {
  user: null,
  users: [],
}

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(set => ({
    ...initState,
    setUser: payload => set(() => ({ user: payload })),
    setUsers: payload => set(() => ({ users: payload })),
    getUsers: async payload => {
      try {
        const res = await AxiosInstance.get<UserListPayload, AxiosResponse<UserListResponse>>(`/users`, {
          params: payload,
        })
        set(() => ({ users: res.data.users || [] }))
        return res.data
      } catch (error) {
        console.error("Error fetching users", error)
        throw error
      }
    },
  }))
}
