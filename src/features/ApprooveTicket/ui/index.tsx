"use client"

import { Button, Tooltip } from "antd"
import React from "react"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { CheckCircleOutlined } from "@ant-design/icons"
import useToken from "antd/es/theme/useToken"
interface ApprooveTicketProps {
  ticketId: string
}

export const ApprooveTicket: React.FC<ApprooveTicketProps> = ({ ticketId }) => {
  const [_, token] = useToken()
  const { approoveTicket } = useTicketStore(state => state)

  const handleApproove = async () => {
    await approoveTicket(ticketId)
      .then(() => {
        console.log("Заявка успешно одобрена")
      })
      .catch(error => {
        console.error("Ошибка при одобрении заявки:", error)
      })
  }

  return (
    <Tooltip
      title='Одобрить заявку'
      placement='top'
      color='#000000ff'
    >
      <Button
        style={{ color: token.colorSuccess, borderColor: token.colorSuccess }}
        onClick={handleApproove}
      >
        <CheckCircleOutlined />
      </Button>
    </Tooltip>
  )
}
