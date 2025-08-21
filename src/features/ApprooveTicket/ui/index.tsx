"use client"

import { Button, Tooltip } from "antd"
import React from "react"
import { approoveTicket } from "../api"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
interface ApprooveTicketProps {
  ticketId: string
}

export const ApprooveTicket: React.FC<ApprooveTicketProps> = ({ ticketId }) => {
  const {} = useTicketStore(state => state)

  const handleApproove = async () => {
    await approoveTicket({ ticketId })
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
      color='#f6ffed'
    >
      <Button onClick={handleApproove}>Одобрить</Button>
    </Tooltip>
  )
}
