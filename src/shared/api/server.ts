import axios from "axios"
import { getJwtTokenOnServer } from "../utils/getJwtTokenOnServer"
import { toast } from "react-toastify"

// Server-only Axios instance using absolute backend URL
const backendURL = process.env.NEXT_PUBLIC_API_REDIRECT_URL || "http://localhost:3000/api"

export const AxiosServerInstance = axios.create({
  baseURL: backendURL,
  withCredentials: true,
})

AxiosServerInstance.interceptors.request.use(async config => {
  // Read JWT from cookies on the server
  const token = await getJwtTokenOnServer()
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`

  return config
})

AxiosServerInstance.interceptors.response.use(
  response => {
    return response
  },
  async (error: any) => {
    console.error("Axios error:", error)
    const originalRequest = error.config
    if (
      error.response?.status === 401 &&
      !originalRequest.url?.includes("/auth/login") &&
      !originalRequest.url?.includes("/auth/refresh") &&
      !originalRequest.url?.includes("/auth/register") &&
      !originalRequest._retry
    ) {
      const refreshToken = getJwtTokenOnServer("refreshToken")
      originalRequest._retry = true
      try {
        // Call refresh without body; let server read refresh token from HttpOnly cookie
        const refreshRes = await axios.post(`${backendURL}/auth/refresh`, { refreshToken })
        const newToken = refreshRes.data.accessToken

        // ensure headers before mutation
        if (!originalRequest.headers) originalRequest.headers = {}
        originalRequest.headers.Authorization = `Bearer ${newToken}`

        return AxiosServerInstance(originalRequest)
      } catch (refreshError) {
        toast.error("Сессия истекла, пожалуйста, войдите снова.")
        console.error("Failed to refresh token", refreshError)
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)
