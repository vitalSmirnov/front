import { User } from "../User/User"

export interface Group {
  id: string
  identifier: string
  course: number
  users: User[]
}
