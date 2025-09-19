import { Course } from "../Course/course"
import { User } from "../User/User"

export interface Group {
  id: string
  identifier: string
  course: Course
  users: User[]
}
