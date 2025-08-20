import { cookies } from "next/headers"

export async function getJwtTokenOnServer() {
  if (typeof window !== "undefined") return undefined

  const cookieStore = await cookies()
  return cookieStore.get("accessToken")?.value
}
