import { Suspense } from "react"

import { Metadata } from "next"
import LoadingPage from "../../../loading"
import { TicketStoreProvider } from "../../../../shared/providers/ticketProvider"
import { Ticket } from "../../../../shared/entities/Ticket/Ticket"
import { AxiosServerInstance } from "../../../../shared/api/server"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Больничный",
  description: "Больничный пользователя",
}

export default async function ConcreteTicketLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { id: string }
}>) {
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
    <TicketStoreProvider initState={{ ticket: result, total: 0, tickets: [] }}>
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </TicketStoreProvider>
  )
}
