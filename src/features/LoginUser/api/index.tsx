import { AxiosInstance } from "../../../shared/api"
import { LoginCredentials, TokenResponse } from "../types"

export const loginRequest = async (credentials: LoginCredentials) => {
  return await AxiosInstance.post<TokenResponse | { error: string }>(`/auth/login`, { ...credentials })
}
