import { AxiosInstance } from "../../../shared/api"

export const logout = async () => {
  return await AxiosInstance.post(`/auth/logout`)
}
