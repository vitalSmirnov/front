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
        title={`Профиль ${user!.name}`}
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
          {user!.role.map(role => (
            <AppTag
              key={role}
              variant={
                role === UserRoleEnum.ADMIN ? "primary" : role.includes(UserRoleEnum.PROFESSOR) ? "success" : "info"
              }
            >
              {RoleComparer[role]}
            </AppTag>
          ))}
        </Flex>
        <Descriptions
          column={2}
          style={{ marginTop: 16 }}
        >
          {user?.role.includes(UserRoleEnum.STUDENT) && (
            <>
              <DescriptionsItem label={"Курс"}>{user?.course?.identifier || ""}</DescriptionsItem>
              <DescriptionsItem label={"Группа"}>{user?.group?.identifier || ""}</DescriptionsItem>
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
