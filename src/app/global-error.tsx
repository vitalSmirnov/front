"use client"
import { Empty } from "antd"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <Empty />
      </body>
    </html>
  )
}
