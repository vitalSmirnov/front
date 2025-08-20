import axios from "axios"
import { getJwtTokenOnServer } from "../utils/getJwtTokenOnServer"

// Server-only Axios instance using absolute backend URL
const backendURL = process.env.NEXT_PUBLIC_API_REDIRECT_URL || process.env.API_URL || "http://localhost:3000/api"

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
