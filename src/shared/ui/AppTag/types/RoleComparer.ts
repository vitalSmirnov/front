import { UserRoleEnum } from "../../../entities/RoleEnum/UserRoleEnum"

export const RoleComparer = {
  [UserRoleEnum.ADMIN]: "Администратор",
  [UserRoleEnum.STUDENT]: "Студент",
  [UserRoleEnum.PROFESSOR]: "Преподаватель",
}
