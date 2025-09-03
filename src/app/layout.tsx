import type { Metadata } from "next"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import "./globals.css"
import { ConfigProvider } from "antd"
import { appTheme } from "../shared"

import "@ant-design/v5-patch-for-react-19"
import { ToastContainer } from "react-toastify"

export const metadata: Metadata = {
  title: "Больничные",
  description: "СИстема больничных в ТГУ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ConfigProvider theme={appTheme}>
      <html lang='en'>
        <body>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
        <ToastContainer />
      </html>
    </ConfigProvider>
  )
}
