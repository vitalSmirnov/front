import { NextRequest } from "next/server"
import { NextResponse } from "next/server"
// Note: middleware runs in edge runtime; read cookies directly from the request

export async function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const headers = request.headers

  const includedPaths = ["/login", "/register"]

  if (!includedPaths.includes(pathname)) {
    return NextResponse.next()
  }
  const token = request.cookies.get("accessToken")?.value

  const response = NextResponse.next({ headers })

  if (token) {
    return NextResponse.redirect(new URL(request.url))
  }

  return response
}
