import { Ticket } from "../../../shared/entities/Ticket/Ticket"

export interface GetTicketsPayload {
  userName?: string
  startDate?: Date
  endDate?: Date
  limit?: number
  offset?: number
}
export interface GetTicketsResponse {
  tickets: Ticket[]
  total: number
}
