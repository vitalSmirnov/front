import { Suspense } from "react"
import { TopBarMenu } from "../../widgets/Sidebar/ui"
import { UserProfile } from "../../widgets/UserProfile/ui"

import { User } from "../../shared/entities/User/User"
import { UserStoreProvider } from "../../shared/providers/userProvider"

import { AxiosServerInstance } from "../../shared/api/server"
import { redirect } from "next/navigation"
import { RoutesEnum } from "../../shared/router/routesEnum"
import { TicketStoreProvider } from "../../shared/providers/ticketProvider"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let userInfo = {} as User

  try {
    const res = await AxiosServerInstance.get<User>(`/users/me/info`)
    userInfo = res.data
  } catch (error) {
    console.error("Произошла ошибка при запросе информации о пользователе:" + error)
    redirect(RoutesEnum.LOGIN)
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
        display: "grid",
        boxSizing: "border-box",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 9fr auto",
      }}
    >
      <UserStoreProvider initState={userInfo ? { user: userInfo } : undefined}>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            backgroundColor: "white",
            padding: "0 16px",
          }}
        >
          <TopBarMenu />
          <UserProfile />
        </div>
        <div style={{ padding: "32px", boxSizing: "border-box", height: "100%" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              margin: "0 auto",
              backgroundColor: "white",
              padding: "16px",
              borderRadius: "12px",
            }}
          >
            <TicketStoreProvider>
              <Suspense>{children}</Suspense>
            </TicketStoreProvider>
          </div>
        </div>
      </UserStoreProvider>
      <div
        style={{
          padding: "16px",
          color: "white",
          textAlign: "center",
        }}
      >
        Больничные ©{new Date().getFullYear()} ТГУ
      </div>
    </div>
  )
}
