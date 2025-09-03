import { UploadFile } from "antd"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"

export interface CreateTicketInfoPayload {
  endDate: Date
  startDate: Date
  name?: string
  reason?: ReasonEnum
  prooves: string[]
  description?: string
}
export interface CreateTicketInfoResponse extends Ticket {}

export interface CreateTicketInfoForm {
  prooves: {
    fileList: UploadFile[]
  }
  startDate: Date
  endDate: Date
  name: string
  reason: ReasonEnum
  description?: string
}
