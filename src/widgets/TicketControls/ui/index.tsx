"use client"

import React, { useLayoutEffect } from "react"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { ApprooveTicket } from "../../../features/ApprooveTicket/ui"
import { RejectTicket } from "../../../features/RejectTicket/ui"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { Flex } from "antd"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"

export const TicketControls: React.FC = () => {
  const { user } = useUserStore(state => state)
  const { ticket } = useTicketStore(state => state)

  console.log("TicketControls", ticket)

  if (!user || user.role !== UserRoleEnum.ADMIN) {
    return <></>
  }

  return (
    <Flex gap={16}>
      {ticket?.status !== StatusEnum.APPROVED && <ApprooveTicket ticketId={ticket!.id} />}
      {ticket?.status !== StatusEnum.REJECTED && <RejectTicket ticketId={ticket!.id} />}
    </Flex>
  )
}
