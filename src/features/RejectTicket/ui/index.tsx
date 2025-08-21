"use client"

import { Button, Tooltip } from "antd"
import React from "react"
import { rejectTicket } from "../api"

interface RejectTicketProps {
  ticketId: string
}

export const RejectTicket: React.FC<RejectTicketProps> = ({ ticketId }) => {
  const handleApproove = async () => {
    await rejectTicket({ ticketId })
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
      color='#f6ffed'
    >
      <Button
        danger
        onClick={handleApproove}
      >
        Отклонить
      </Button>
    </Tooltip>
  )
}
