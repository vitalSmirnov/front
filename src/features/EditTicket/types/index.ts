import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"

export interface UploadedFile {
  message: string
  file: {
    path: string
    originalName: string
    size: string
  }
}
export interface FileList {
  response: UploadedFile
}
export interface UpdateTicketInfoForm {
  prooves: {
    fileList: FileList[]
  }
  endDate: Date
  name: string
  reason: ReasonEnum
  description?: string
}
