import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { User } from "../../../shared/entities/User/User"

export interface UserListPayload {
  userName?: string
  course?: string
  group?: string
  limit?: number
  offset?: number
  role?: UserRoleEnum[]
}
export interface UserListResponse {
  users: User[]
  total: number
}
