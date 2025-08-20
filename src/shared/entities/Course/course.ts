import { Group } from "../Group/group"
import { User } from "../User/User"

export interface Course {
  id: string
  name: string
  identifier: number
  groups: Group[]
  users: User[]
}
