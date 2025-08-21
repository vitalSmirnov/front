"use client"
import { Empty, Flex, Grid, List, Typography } from "antd"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import Image from "next/image"
import { TicketControls } from "../../../widgets/TicketControls/ui"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { useEffect } from "react"
import { AppTag } from "../../../shared/ui/AppTag/ui"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { translateReason, translateStatus } from "../../TicketTable/utils"
import { SectionContainer } from "../../../shared/ui/SectionContainer"
import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { AppLink } from "../../../shared/ui/AppLink"
const { Title, Paragraph, Text } = Typography

interface TicketProps {
  fetchedTicket: Ticket
}
export const ConcreteTicket: React.FC<TicketProps> = ({ fetchedTicket }) => {
  const { ticket, setTicket } = useTicketStore(state => state)

  useEffect(() => {
    setTicket(fetchedTicket)
  }, [fetchedTicket])

  if (!ticket) {
    return <Empty description={"Тикет не найден"} />
  }

  return (
    <div>
      <Flex
        gap={16}
        align={"center"}
        style={{
          padding: "16px",
        }}
      >
        <Title level={2}>{ticket.name}</Title>
        <AppTag
          variant={
            ticket.status === StatusEnum.PENDING
              ? "default"
              : ticket.status === StatusEnum.APPROVED
                ? "success"
                : "danger"
          }
        >
          {translateStatus[ticket.status]}
        </AppTag>
        <div style={{ marginLeft: "auto" }}>
          <TicketControls />
        </div>
      </Flex>
      <Flex
        gap={16}
        wrap={"wrap"}
      >
        <SectionContainer>
          <Title level={4}>Пользователь</Title>
          <Flex
            gap={8}
            align={"center"}
          >
            <AppLink href={RoutesEnum.TICKETS + `?userName=${ticket.user.name}`}>{ticket.user.name}</AppLink>
            <AppTag
              variant='primary'
              style={{ marginLeft: "8px" }}
            >
              <AppLink href={RoutesEnum.TICKETS + `?course=${ticket.user.course.id}`}>
                {ticket.user.course.name}
              </AppLink>
            </AppTag>
            <AppTag
              variant='primary'
              style={{ marginLeft: "8px" }}
            >
              <AppLink href={RoutesEnum.TICKETS + `?group=${ticket.user.group.id}`}>
                {ticket.user.group.identifier + ` Группа`}
              </AppLink>
            </AppTag>
          </Flex>
        </SectionContainer>

        <SectionContainer>
          <Text strong>Причина</Text>
          <Paragraph>{translateReason[ticket.reason]}</Paragraph>
        </SectionContainer>
        <SectionContainer>
          <Text strong>Описание</Text>
          <Paragraph>{ticket.description}</Paragraph>
        </SectionContainer>

        <SectionContainer>
          <Text strong>Подтверждения</Text>
          <List bordered={false}>
            {ticket.prooves.length ? (
              ticket.prooves.map(item => {
                return (
                  <List.Item key={item.id}>
                    <Image
                      src={item.path}
                      alt={"Приложение"}
                    />
                    {item.name}
                  </List.Item>
                )
              })
            ) : (
              <Empty description={"Подтверждения ещё не добавлены"} />
            )}
          </List>
        </SectionContainer>
      </Flex>
    </div>
  )
}
