import dayjs from "dayjs"
import { GetTicketsPayload } from "../../../widgets/TicketList/types"

export function setParams({ userName, startDate, endDate, status }: Omit<GetTicketsPayload, "limit" | "offset">) {
  const params = new URLSearchParams()
  if (userName) params.set("userName", userName)
  if (startDate) params.set("startDate", startDate.toString())
  if (endDate) params.set("endDate", endDate.toString())
  if (status) params.set("status", status)
  const query = params.toString()
  const url = new URL(window.location.href)
  url.search = query // empty string clears the query
  window.history.replaceState(null, "", url.toString())
}

export const toIso = (d?: string) => (d ? dayjs(d).toDate().toISOString() : undefined)
