import { Prove } from "../Prove/Prove"
import { User } from "../User/User"
import { ReasonEnum } from "./ReasonEnum"
import { StatusEnum } from "./StatusEnum"

export interface Ticket {
  id: string
  name: string
  description: string
  startDate: Date
  endDate: Date
  reason: ReasonEnum
  status: StatusEnum
  prooves: Prove[]
  user: Omit<User, "tickets">
}
