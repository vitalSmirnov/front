import { notFound } from "next/navigation"
import { ConcreteTicket } from "../../../../entities/Ticket/ui"
import { AxiosServerInstance } from "../../../../shared/api/server"
import { Ticket } from "../../../../shared/entities/Ticket/Ticket"
import { TicketStoreProvider } from "../../../../shared/providers/ticketProvider"

export default async function TicketsPage({ params }: { params: { id: string } }) {
  let result: Ticket | undefined = undefined
  const { id } = await params

  try {
    const res = await AxiosServerInstance.get<Ticket>(`/tickets/${id}`)
    result = res.data
  } catch (error) {
    console.error("Ошибка при запросе тикета :", error)
  }

  if (!result) {
    notFound()
  }

  console.log("Server ticket data:", result)

  return (
    <TicketStoreProvider initState={{ ticket: result, total: 0, tickets: [] }}>
      <ConcreteTicket />
    </TicketStoreProvider>
  )
}
