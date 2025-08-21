import { Suspense } from "react"

import { Metadata } from "next"
import LoadingPage from "../../../loading"
import { TicketStoreProvider } from "../../../../shared/providers/ticketProvider"

export const metadata: Metadata = {
  title: "Больничный",
  description: "Больничный пользователя",
}

export default async function ConcreteTicketLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <TicketStoreProvider>{children}</TicketStoreProvider>
    </Suspense>
  )
}
