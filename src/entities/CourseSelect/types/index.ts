import { SelectProps } from "antd"
import { Course } from "../../../shared/entities/Course/course"

export interface CourseSelectProps extends SelectProps {
  groupId?: string
}

export interface CoursePayload {
  limit?: number
  offset?: number
  group?: string
}
export interface CourseResponse {
  courses: Course[]
  total: number
}
