import axios from "axios"

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
        const refreshRes = await axios.post(
          `/auth/refresh`,
          {},
          {
            withCredentials: true,
          }
        )
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
