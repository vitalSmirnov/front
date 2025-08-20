import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { authMiddleware } from "./src/shared/middlewares/authMiddleware"

export function middleware(request: NextRequest) {
  const authResponse = authMiddleware(request)
  if (authResponse) return authResponse

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
