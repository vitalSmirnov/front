import { notFound } from "next/navigation"
import { ConcreteTicket } from "../../../../entities/Ticket/ui"
import { AxiosServerInstance } from "../../../../shared/api/server"
import { Ticket } from "../../../../shared/entities/Ticket/Ticket"

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

  return (
    <>
      <ConcreteTicket fetchedTicket={result} />
    </>
  )
}
