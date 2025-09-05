import { toast } from "react-toastify"

import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { UserList } from "../../../widgets/UserList/ui"
import { getServerUsersList } from "../../../widgets/UserList/api"
import { UserListResponse } from "../../../widgets/UserList/types"

export default async function UsersPage(params: {
  userName?: string
  group?: string
  roles?: UserRoleEnum[]
  limit?: string
  offset?: string
}) {
  let initialData = {} as UserListResponse
  try {
    const res = await getServerUsersList({
      ...params,
      userName: params.userName || undefined,
      group: params.group ? params.group : undefined,
      limit: params.limit ? Number(params.limit) : undefined,
      offset: params.offset ? Number(params.offset) : undefined,
    })
    initialData = res.data
  } catch (error) {
    toast.error("Ошибка при загрузке пользователей")
    console.error("Ошибка при запросе серверного компонента с тикетами :", error)
  }
  return (
    <UserList
      users={initialData.users}
      total={initialData.total}
    />
  )
}
