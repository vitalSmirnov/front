import { AxiosInstance } from "../../../shared/api"
import { AxiosServerInstance } from "../../../shared/api/server"
import { GetTicketsPayload, GetTicketsResponse } from "../types"

export const getServerTicketList = async (payload: GetTicketsPayload) => {
  return await AxiosServerInstance.get<GetTicketsResponse>("/tickets", { params: payload })
}

export const approoveTicket = async (id: string) => {
  return await AxiosInstance.post(`/tickets/${id}/approve`, {})
}
export const declineTicket = async (id: string) => {
  return await AxiosInstance.post(`/tickets/${id}/decline`, {})
}
