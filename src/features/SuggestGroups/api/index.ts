import { AxiosInstance } from "../../../shared/api"
import { GetGroupPayload, GetGroupResponse } from "../types"

export async function suggestGroups(): Promise<GetGroupResponse[]> {
  return await AxiosInstance.get<GetGroupPayload, GetGroupResponse[]>("/groups")
}
