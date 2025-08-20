import { Spin } from "antd"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Войти",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          padding: "24px",
          backgroundColor: "white",
          borderRadius: "16px",
          minWidth: "400px",
        }}
      >
        <h1 style={{ marginBottom: "24px" }}>Войти</h1>
        <Suspense fallback={<Spin />}>{children}</Suspense>{" "}
      </div>
    </div>
  )
}
