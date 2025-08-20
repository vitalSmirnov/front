import { Ticket } from "../../../shared/entities/Ticket/Ticket"

export interface GetTicketsPayload {
  userName?: string
  startDate?: string
  endDate?: string
  limit?: number
  offset?: number
}
export interface GetTicketsResponse {
  tickets: Ticket[]
  total: number
}
