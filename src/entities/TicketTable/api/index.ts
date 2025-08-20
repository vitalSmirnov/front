import { AxiosInstance } from "../../../shared/api"
import { GetTicketsPayload, GetTicketsResponse } from "../types"

export const getTicketList = async (payload: GetTicketsPayload) => {
  return await AxiosInstance.get<GetTicketsResponse>(`/tickets`, {
    params: payload,
  })
}
