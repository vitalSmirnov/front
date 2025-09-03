"use client"

import { Button, Popconfirm } from "antd"
import React from "react"
import { LogoutOutlined } from "@ant-design/icons"
import { logout } from "../api"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { toast } from "react-toastify"

export const LogoutButton = () => {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setLoading(true)
    logout()
      .then(() => {
        router.push(RoutesEnum.LOGIN)
      })
      .catch(error => {
        toast.error("Ошибка при выходе: " + error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Popconfirm
      okText='Да'
      cancelText='Нет'
      title='Выйти из аккаунта?'
      onConfirm={handleLogout}
    >
      <Button
        danger
        icon={<LogoutOutlined />}
        loading={loading}
      >
        Выйти
      </Button>
    </Popconfirm>
  )
}
