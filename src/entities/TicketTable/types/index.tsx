import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"

export interface GetTicketsPayload {
  userName?: string
  startDate?: string
  endDate?: string
  limit?: number
  group?: string
  offset?: number
  status?: StatusEnum
}
export interface GetTicketsResponse {
  tickets: Ticket[]
  total: number
}
