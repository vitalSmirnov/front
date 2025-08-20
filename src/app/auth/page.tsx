import { redirect } from "next/navigation"
import { getJwtTokenOnServer } from "../../shared/utils/getJwtTokenOnServer"
import { RoutesEnum } from "../../shared/router/routesEnum"

export default async function AuthRedirectPage() {
  const token = await getJwtTokenOnServer()

  if (!token) {
    redirect(RoutesEnum.LOGIN)
  }

  redirect(RoutesEnum.HOME)
}
