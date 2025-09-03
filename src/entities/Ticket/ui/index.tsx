"use client"
import { Button, Empty, Flex, List, Tooltip, Typography } from "antd"
import { TicketControls } from "../../../widgets/TicketControls/ui"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { AppTag } from "../../../shared/ui/AppTag/ui"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { translateReason, translateStatus } from "../../TicketTable/utils"
import { SectionContainer } from "../../../shared/ui/SectionContainer"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { AppLink } from "../../../shared/ui/AppLink"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { EditOutlined } from "@ant-design/icons"
import dayjs from "dayjs"
import Link from "next/link"
import { AppImage } from "../../../shared/ui/Image"
import { useUserStore } from "../../../shared/providers/userProvider"
import { notFound } from "next/navigation"
const { Title, Paragraph, Text } = Typography

export const ConcreteTicket: React.FC = () => {
  const { ticket } = useTicketStore(state => state)
  const { user } = useUserStore(state => state)

  const isAbleToEdit = user!.role.includes(UserRoleEnum.ADMIN) || user?.id === ticket?.user.id

  if (!ticket) {
    return notFound()
  }

  return (
    <div style={{ display: "grid", gridTemplateRows: "auto 1fr", height: "100%" }}>
      <Flex
        gap={16}
        align={"center"}
        style={{
          padding: "16px",
        }}
      >
        <Title
          style={{ margin: 0 }}
          level={2}
        >
          {ticket.name}
        </Title>
        <Flex
          gap={6}
          align={"center"}
          style={{ margin: "0 auto" }}
        >
          <Text strong>С</Text>
          <AppTag color='gray'>{dayjs(ticket.startDate).format("DD-MM-YYYY")}</AppTag>
          <Text strong>По</Text>
          <AppTag color='gray'>{dayjs(ticket.endDate).format("DD-MM-YYYY")}</AppTag>
        </Flex>
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
        {isAbleToEdit && (
          <Tooltip title='Редактировать'>
            <Button type='link'>
              <Link href={RoutesEnum.TICKETS + `/${ticket.id}/edit`}>
                <EditOutlined />
              </Link>
            </Button>
          </Tooltip>
        )}
      </Flex>
      <Flex
        style={{ height: "100%" }}
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
            {ticket.user.role.includes(UserRoleEnum.ADMIN) && ticket.user.course && (
              <AppTag
                variant='primary'
                style={{ marginLeft: "8px" }}
              >
                <AppLink href={RoutesEnum.TICKETS + `?course=${ticket.user.course.id}`}>
                  {ticket.user.course.name}
                </AppLink>
              </AppTag>
            )}
            {ticket.user.role.includes(UserRoleEnum.ADMIN) && ticket.user.group && (
              <AppTag
                variant='primary'
                style={{ marginLeft: "8px" }}
              >
                <AppLink href={RoutesEnum.TICKETS + `?group=${ticket.user.group.id}`}>
                  {ticket.user.group.identifier + ` Группа`}
                </AppLink>
              </AppTag>
            )}
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
                  <List.Item
                    key={item.id}
                    style={{ display: "flex", flexDirection: "column", gap: "8px" }}
                  >
                    <AppImage
                      width={100}
                      height={100}
                      key={item.id}
                      path={item.path}
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
        {user!.role.includes(UserRoleEnum.ADMIN) && <TicketControls ticket={ticket} />}
      </Flex>
    </div>
  )
}
