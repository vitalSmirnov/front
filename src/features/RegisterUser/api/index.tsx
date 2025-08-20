import { AxiosInstance } from "../../../shared/api"
import { TokenResponse } from "../../LoginUser/types"
import {  RegisterCredentials } from "../types"


export const registerRequest = async (credentials: RegisterCredentials)=> {
  return AxiosInstance.post<TokenResponse | {error: string}>(`auth/register`, {
    ...credentials,
  })
}
