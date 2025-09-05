import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"

export const translateStatus = {
  [StatusEnum.APPROVED]: "Одобрено",
  [StatusEnum.REJECTED]: "Отменено",
  [StatusEnum.PENDING]: "В ожидании",
}
export const translateReason = {
  [ReasonEnum.COMPETITION]: "Соревнования",
  [ReasonEnum.FAMILY]: "Семейные обстоятельства",
  [ReasonEnum.SICKDAY]: "Больничный",
}
