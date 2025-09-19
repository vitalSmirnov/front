import { AxiosResponse } from "axios"
import { AxiosInstance } from "../../../shared/api"
import { CoursePayload, CourseResponse } from "../types"

export const getCourse = async (credentials: CoursePayload): Promise<AxiosResponse<CourseResponse>> => {
  return await AxiosInstance.get(`/course`, { params: credentials })
}
