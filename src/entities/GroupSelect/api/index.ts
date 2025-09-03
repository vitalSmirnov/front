import { AxiosInstance } from "../../../shared/api"
import { GroupsPayload, GroupsResponse } from "../types"

export const getGroups = async (credentials: GroupsPayload): Promise<GroupsResponse> => {
  return AxiosInstance.get(`/groups`, { params: { ...credentials } })
}
