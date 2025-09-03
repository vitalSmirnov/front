import { Prove } from "../../../shared/entities/Prove/Prove"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"

export interface UpdateTicketInfoPayload {
  id: string
  payload: {
    endDate?: Date
    name?: string
    reason?: ReasonEnum
    prooves?: string[]
    description?: string
  }
}
export interface UpdateTicketInfoResponse extends Ticket {}
