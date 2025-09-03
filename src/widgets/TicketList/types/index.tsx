import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"

export interface GetTicketsPayload {
  status?: StatusEnum
  userName?: string
  startDate?: Date
  endDate?: Date
  limit?: number
  offset?: number
  group?: string
}
export interface GetTicketsResponse {
  tickets: Ticket[]
  total: number
}
