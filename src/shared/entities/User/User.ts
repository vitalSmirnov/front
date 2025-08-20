import { UserRoleEnum } from "../RoleEnum/UserRoleEnum"
import { Ticket } from "../Ticket/Ticket"

export interface User {
  id: string
  name: string
  course: number
  group: string
  tickets: Ticket[]
  role: UserRoleEnum
}
