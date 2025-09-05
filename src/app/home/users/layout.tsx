import { Suspense } from "react"
import LoadingPage from "../../loading"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>
}
