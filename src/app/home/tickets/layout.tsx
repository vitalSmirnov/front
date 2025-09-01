import { Suspense } from "react"
import LoadingPage from "../../loading"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import { getServerTicketList } from "../../../widgets/TicketList/api"
import { TicketStoreProvider } from "../../../shared/providers/ticketProvider"

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  params: { startDate?: string; endDate?: string; userName?: string; limit?: string; offset?: string }
  children: React.ReactNode
}>) {
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
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </TicketStoreProvider>
  )
}
