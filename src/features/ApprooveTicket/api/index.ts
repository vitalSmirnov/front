import { AxiosInstance } from "../../../shared/api"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { ApprooveTicketPayload } from "../types"

export const approoveTicket = async ({ ticketId }: ApprooveTicketPayload) => {
  return AxiosInstance.patch(`/tickets/${ticketId}/status`, {
    status: StatusEnum.APPROVED,
  })
}
