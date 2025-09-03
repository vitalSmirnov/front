import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"

export interface CreateTicketInfoPayload {
  endDate: Date
  startDate: Date
  name?: string
  reason?: ReasonEnum
  prooves?: string[]
  description: string
}
export interface CreateTicketInfoResponse extends Ticket {}
