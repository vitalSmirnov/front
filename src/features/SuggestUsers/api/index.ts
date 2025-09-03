import { AxiosInstance } from "../../../shared/api"
import { GetUsersPayload, GetUsersResponse } from "../types"

export async function suggestUsers(): Promise<GetUsersResponse> {
  return await AxiosInstance.get<GetUsersPayload, GetUsersResponse>("/users/existing")
}
