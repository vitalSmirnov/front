import { Course } from "../Course/course"
import { Group } from "../Group/group"
import { UserRoleEnum } from "../RoleEnum/UserRoleEnum"
import { Ticket } from "../Ticket/Ticket"

export interface User {
  id: string
  name: string
  course: Course
  group: Group
  tickets: Ticket[]
  role: UserRoleEnum[]
}
export interface UserWithMail extends User {
  login: string
}
