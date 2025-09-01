"use client"

import { Button, Tooltip } from "antd"
import React, { useState } from "react"
import { TableOutlined } from "@ant-design/icons"
import { exportTableFile } from "../api"
import useToken from "antd/es/theme/useToken"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"

export const GetTable: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const { user } = useUserStore(state => state)
  const [_, token] = useToken()

  if (!user!.role.includes(UserRoleEnum.ADMIN)) return <></>

  const handleDownload = async () => {
    setLoading(true)
    try {
      const response: any = await exportTableFile({})
      if (response?.error) throw new Error(response.error)

      const disposition = response?.headers?.["content-disposition"] || ""
      let filename = "file"
      const match = /filename\*?=(?:UTF-8''|")?([^\";]+)/i.exec(disposition)
      if (match?.[1]) {
        filename = decodeURIComponent(match[1].replace(/["']/g, ""))
      }

      const data = response?.data
      let blob: Blob
      if (data instanceof Blob) {
        blob = data
      } else if (data instanceof ArrayBuffer) {
        blob = new Blob([data], { type: response?.headers?.["content-type"] || "application/octet-stream" })
      } else if (data && typeof data === "string") {
        blob = new Blob([data], { type: response?.headers?.["content-type"] || "text/plain;charset=utf-8" })
      } else {
        blob = new Blob([JSON.stringify(data ?? {})], { type: "application/json" })
      }

      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (e: any) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Tooltip title='Download table file'>
      <Button
        style={{ color: token.colorSuccess, borderColor: token.colorSuccess }}
        onClick={handleDownload}
        disabled={loading}
        loading={loading}
      >
        <TableOutlined />
      </Button>
    </Tooltip>
  )
}
