import TicketList from "../../../widgets/TicketList/ui"

export default async function TicketsPage(params: {
  userName?: string
  startDate?: string
  endDate?: string
  limit?: string
  offset?: string
}) {
  return <TicketList searchParams={params} />
}
