import { FilterUsersFormProps } from "../types"

export function setParams({ userName, group, course, role }: FilterUsersFormProps) {
  const params = new URLSearchParams()
  if (userName) params.set("userName", userName)
  if (group) params.set("group", group)
  if (role) {
    const roleParam = Array.isArray(role) ? role.join(",") : String(role)
    params.set("role", roleParam)
  }
  if (course) params.set("course", course)

  const query = params.toString()
  const url = new URL(window.location.href)
  url.search = query // empty string clears the query
  window.history.replaceState(null, "", url.toString())
}
