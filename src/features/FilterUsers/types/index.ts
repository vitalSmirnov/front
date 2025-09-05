import { UserListPayload } from "../../../widgets/UserList/types"

export interface FilterUsersFormProps extends Omit<UserListPayload, "limit" | "offset"> {}
