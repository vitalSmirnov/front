"use client"
import { Empty } from "antd"
import Link from "next/link"
import { RoutesEnum } from "../shared/router/routesEnum"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <Empty description={"Произошла неизвестная ошибка, попробуйте позже"} />
        <p>{error.message}</p>
        <Link href={RoutesEnum.TICKETS}>На главную</Link>
      </body>
    </html>
  )
}
