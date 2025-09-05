import { AxiosInstance } from "../../../shared/api"
import { AxiosServerInstance } from "../../../shared/api/server"
import { UserListPayload, UserListResponse } from "../types"

export async function getUsersList(payload: UserListPayload): Promise<UserListResponse> {
  return await AxiosInstance.get<UserListPayload, UserListResponse>("/users", { params: payload })
}

export const getServerUsersList = async (payload: UserListPayload) => {
  return await AxiosServerInstance.get<UserListResponse>("/users", { params: payload })
}
