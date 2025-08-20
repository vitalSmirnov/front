import axios from "axios"

// Read a cookie value by name (browser-only)
const getCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.split("; ").find(row => row.startsWith(`${name}=`))
  const value = match?.split("=")[1]
  return value ? decodeURIComponent(value) : undefined
}

export const AxiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
})
AxiosInstance.interceptors.request.use(
  async config => {
    if (config.headers) config.headers["Content-Type"] = "application/json"

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

AxiosInstance.interceptors.response.use(
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
      originalRequest._retry = true
      try {
        // Call refresh without body; let server read refresh token from HttpOnly cookie
        const refreshRes = await axios.post(`/auth/refresh`, undefined, {
          withCredentials: true,
        })
        const newToken = refreshRes.data.accessToken

        if (typeof sessionStorage !== "undefined") {
          sessionStorage.setItem("accessToken", newToken)
        }

        // ensure headers before mutation
        if (!originalRequest.headers) originalRequest.headers = {}
        originalRequest.headers.Authorization = `Bearer ${newToken}`

        return AxiosInstance(originalRequest)
      } catch (refreshError) {
        console.error("Failed to refresh token", refreshError)
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)
