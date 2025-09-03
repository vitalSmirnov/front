import { Suspense } from "react"
import LoadingPage from "../../loading"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import { getServerTicketList } from "../../../widgets/TicketList/api"
import { TicketStoreProvider } from "../../../shared/providers/ticketProvider"

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  params: { startDate?: string; endDate?: string; userName?: string; page?: string }
  children: React.ReactNode
}>) {
  const { userName, startDate, endDate, page } = await params
  let initialData: { tickets: Ticket[]; total: number } = { tickets: [], total: 0 }
  try {
    const res = await getServerTicketList({
      userName: userName || undefined,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
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
