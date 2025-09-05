import { Suspense } from "react"

import { Metadata } from "next"
import LoadingPage from "../../../loading"
import { AxiosServerInstance } from "../../../../shared/api/server"
import { notFound } from "next/navigation"
import { AxiosResponse } from "axios"
import { UserWithMail } from "../../../../shared/entities/User/User"
import { UserStoreProfileProvider } from "../../../../shared/providers/userProfileProvider"

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
  let result: UserWithMail | undefined = undefined
  const { id } = await params

  try {
    const res = await AxiosServerInstance.get<{}, AxiosResponse<UserWithMail>>(`/users/${id}`)
    result = res.data
  } catch (error) {
    console.error("Ошибка при запросе тикета :", error)
  }

  if (!result) {
    notFound()
  }
  return (
    <UserStoreProfileProvider initState={{ profile: result }}>
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </UserStoreProfileProvider>
  )
}
