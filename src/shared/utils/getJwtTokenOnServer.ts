import { cookies } from "next/headers"

export async function getJwtTokenOnServer(tokenName: string = "accessToken") {
  if (typeof window !== "undefined") return undefined

  const cookieStore = await cookies()
  return cookieStore.get(tokenName)?.value
}
