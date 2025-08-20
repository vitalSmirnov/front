"use client"
import { Avatar, Button, Descriptions, Drawer, Flex, Typography } from "antd"
import DescriptionsItem from "antd/es/descriptions/Item"
import { useUserStore } from "../../../shared/providers/userProvider"
import { AppTag } from "../../../shared/ui/AppTag/ui"
import { RoleComparer } from "../../../shared/ui/AppTag/types/RoleComparer"
import { useState } from "react"

import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
const { Text } = Typography

export const UserProfile = () => {
  const { user } = useUserStore(state => state)
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  console.log("user", user)

  return (
    <>
      <Avatar
        style={{ cursor: "pointer" }}
        size={"large"}
        onClick={showDrawer}
        src={null}
      />
      <Drawer
        title='Профиль'
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <Flex
          wrap
          justify='center'
          align='center'
          gap={16}
        >
          <Text>{user!.name}</Text>
          <AppTag
            variant={
              user!.role === UserRoleEnum.ADMIN ? "primary" : user?.role === UserRoleEnum.PROFESSOR ? "success" : "info"
            }
          >
            {RoleComparer[user!.role]}
          </AppTag>
        </Flex>
        <Descriptions
          column={2}
          style={{ marginTop: 16 }}
        >
          {user?.role === UserRoleEnum.STUDENT && (
            <>
              <DescriptionsItem label={"Курс"}>{user!.course}</DescriptionsItem>
              <DescriptionsItem label={"Группа"}>{user!.group}</DescriptionsItem>
            </>
          )}

          <DescriptionsItem label={"Отгулов всего"}>{user!.tickets.length}</DescriptionsItem>
          <DescriptionsItem label={"Активные отгулы"}>
            {user!.tickets.filter(i => i.status === StatusEnum.PENDING).length}
          </DescriptionsItem>
        </Descriptions>
      </Drawer>
    </>
  )
}
