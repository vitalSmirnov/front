import { AxiosInstance } from "../../../shared/api"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { RejectTicketPayload } from "../types"

export const rejectTicket = async ({ ticketId }: RejectTicketPayload) => {
  return AxiosInstance.patch(`/tickets/${ticketId}/status`, {
    status: StatusEnum.REJECTED,
  })
}
