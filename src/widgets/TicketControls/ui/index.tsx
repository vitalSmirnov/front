"use client"

import React from "react"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { ApprooveTicket } from "../../../features/ApprooveTicket/ui"
import { RejectTicket } from "../../../features/RejectTicket/ui"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { Flex } from "antd"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { ProlongTicket } from "../../../features/ProlongTicket/ui"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"

interface TicketControlsProps {
  ticket: Ticket
}

export const TicketControls: React.FC<TicketControlsProps> = ({ ticket }) => {
  const { user } = useUserStore(state => state)

  return (
    <Flex
      gap={16}
      style={{ width: "100%" }}
      justify='center'
    >
      {ticket?.status === StatusEnum.PENDING && user!.id === ticket.user.id && <ProlongTicket ticket={ticket!} />}
      {ticket?.status !== StatusEnum.APPROVED && <ApprooveTicket ticketId={ticket!.id} />}
      {ticket?.status !== StatusEnum.REJECTED && <RejectTicket ticketId={ticket!.id} />}
    </Flex>
  )
}
