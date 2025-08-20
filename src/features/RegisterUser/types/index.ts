import { Course } from "../../../shared/entities/Course/course"
import { Group } from "../../../shared/entities/Group/group"

export interface RegisterCredentials extends Omit<FormCredentials, "confirmPassword"> {
}
export interface FormCredentials {
  login: string
  name: string
  course: number
  group: string
  password: string
  confirmPassword: string
}

export interface GroupWithoutUsers extends Omit<Group, "users" | "course"> {}
export interface CourseWithoutUsers extends Omit<Course, "users" | "groups" | "name"> {}
