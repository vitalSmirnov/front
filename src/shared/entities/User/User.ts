import { Group } from "../Group/group"
import { UserRoleEnum } from "../RoleEnum/UserRoleEnum"
import { Ticket } from "../Ticket/Ticket"

export interface User {
  id: string
  name: string
  group: Group
  tickets: Ticket[]
  role: UserRoleEnum[]
}
export interface UserWithMail extends User {
  login: string
}
