import { redirect } from "next/navigation"
import { RoutesEnum } from "../shared/router/routesEnum"
import { getJwtTokenOnServer } from "../shared/utils/getJwtTokenOnServer"

export default async function RootPage() {
  const token = await getJwtTokenOnServer()

  if (!token) {
    redirect(RoutesEnum.LOGIN)
  }

  redirect(RoutesEnum.TICKETS)
}
