import { AxiosInstance } from "../../../shared/api"
import { GetTablePayload, GetTableResponse } from "../types"

export const exportTableFile = async (params: GetTablePayload) => {
  return AxiosInstance.get<GetTableResponse | { error: string }>(`excel/export/table`, {
    params: params,
    responseType: "blob",
  })
}
