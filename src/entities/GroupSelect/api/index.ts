import { AxiosResponse } from "axios"
import { AxiosInstance } from "../../../shared/api"
import { GroupsPayload, GroupsResponse } from "../types"

export const getGroups = async (credentials: GroupsPayload): Promise<AxiosResponse<GroupsResponse>> => {
  return await AxiosInstance.get(`/groups`, { params: { ...credentials } })
}
