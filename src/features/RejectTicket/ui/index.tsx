"use client"

import { Button, Tooltip } from "antd"
import React from "react"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { StopOutlined } from "@ant-design/icons"

interface RejectTicketProps {
  ticketId: string
}

export const RejectTicket: React.FC<RejectTicketProps> = ({ ticketId }) => {
  const { declineTicket } = useTicketStore(state => state)
  const handleApproove = async () => {
    await declineTicket(ticketId)
      .then(() => {
        console.log("Заявка успешно отклонена")
      })
      .catch(error => {
        console.error("Ошибка при отклонении заявки:", error)
      })
  }

  return (
    <Tooltip
      title='Отклонить заявку'
      placement='top'
      color='#000000ff'
    >
      <Button
        ghost
        danger
        onClick={handleApproove}
      >
        <StopOutlined />
      </Button>
    </Tooltip>
  )
}
