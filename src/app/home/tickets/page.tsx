import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import { TicketStoreProvider } from "../../../shared/providers/ticketProvider"
import { getServerTicketList } from "../../../widgets/TicketList/api"
import TicketList from "../../../widgets/TicketList/ui"

export default async function TicketsPage(params: {
  userName?: string
  startDate?: string
  endDate?: string
  limit?: string
  offset?: string
}) {
  let initialData: { tickets: Ticket[]; total: number } = { tickets: [], total: 0 }
  try {
    const res = await getServerTicketList({
      ...params,
      userName: params.userName || undefined,
      startDate: params.startDate ? new Date(params.startDate) : undefined,
      endDate: params.endDate ? new Date(params.endDate) : undefined,
      limit: params.limit ? Number(params.limit) : undefined,
      offset: params.offset ? Number(params.offset) : undefined,
    })
    initialData = res.data
  } catch (error) {
    console.error("Ошибка при запросе серверного компонента с тикетами :", error)
  }
  return (
    <TicketStoreProvider initState={{ tickets: initialData.tickets, total: initialData.total, ticket: null }}>
      <TicketList />
    </TicketStoreProvider>
  )
}
