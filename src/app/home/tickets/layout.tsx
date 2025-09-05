import { Suspense } from "react"
import LoadingPage from "../../loading"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import { getServerTicketList } from "../../../widgets/TicketList/api"
import { TicketStoreProvider } from "../../../shared/providers/ticketProvider"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  params: {
    startDate?: string
    endDate?: string
    userName?: string
    page?: string
    group?: string
    status?: StatusEnum
  }
  children: React.ReactNode
}>) {
  const { userName, startDate, endDate, page, group, status } = await params
  let initialData: { tickets: Ticket[]; total: number } = { tickets: [], total: 0 }
  try {
    const res = await getServerTicketList({
      userName: userName || undefined,
      startDate: startDate || undefined,
      endDate: endDate || undefined,
      group: group || undefined,
      status: status || undefined,
      limit: 100,
      offset: page ? Number(page) * 100 : undefined,
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
