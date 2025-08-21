"use client"

import Link from "next/link"
import React, { PropsWithChildren } from "react"
import { ArrowRightOutlined, RightOutlined, RightSquareOutlined } from "@ant-design/icons"
interface AppLinkProps extends PropsWithChildren {
  href: string
  withImage?: boolean
}

export const AppLink: React.FC<AppLinkProps> = ({ withImage = true, children, ...props }) => {
  return (
    <Link
      {...props}
      style={{ display: "flex", alignItems: "center", gap: 6, color: "blue" }}
    >
      {children}
      {withImage && <ArrowRightOutlined style={{ rotate: "-45deg" }} />}
    </Link>
  )
}
