"use client"

import React from "react"
import { UserWithMail } from "../../../shared/entities/User/User"
import { Descriptions, Flex, List, Tooltip, Typography } from "antd"
import { AppTag } from "../../../shared/ui/AppTag/ui"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { RoleComparer } from "../../../shared/ui/AppTag/types/RoleComparer"
import { SectionContainer } from "../../../shared/ui/SectionContainer"
import { AppLink } from "../../../shared/ui/AppLink"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { translateStatus } from "../../UsersTable/utils"
import { translateReason } from "../../TicketTable/utils"
import { useUserStore } from "../../../shared/providers/userProvider"
import { useUserProfileStore } from "../../../shared/providers/userProfileProvider"
import { GrantRolesControls } from "../../../features/GrantRoles/ui"

const { Title, Text } = Typography

export const ConcreteUser = () => {
  const { user: currentUser } = useUserStore(state => state)
  const { profile } = useUserProfileStore(state => state)
  return (
    <div style={{ display: "grid", gridTemplateRows: "auto 1fr", height: "100%" }}>
      <Flex
        gap={16}
        align={"center"}
      >
        <Title
          style={{ margin: 0 }}
          level={2}
        >
          <Tooltip title={`Перейти к заявкам пользователя`}>
            <AppLink href={RoutesEnum.TICKETS + `?userName=${profile!.name}`}>{profile!.name}</AppLink>
          </Tooltip>
        </Title>
        <AppTag variant='default'>
          <Text copyable>{profile!.login}</Text>
        </AppTag>
      </Flex>
      <Flex
        style={{ height: "100%" }}
        gap={16}
      >
        <div style={{ width: "100%" }}>
          <Title
            style={{ margin: 0 }}
            level={2}
          >
            Информация
          </Title>
          <Flex
            gap={8}
            wrap
            align={"center"}
          >
            <SectionContainer>
              <Flex gap={8}>
                <div>
                  <Title level={5}>Роли</Title>
                  {profile!.role.map(role => (
                    <AppTag
                      variant={
                        role === UserRoleEnum.STUDENT ? "default" : role === UserRoleEnum.ADMIN ? "success" : "danger"
                      }
                    >
                      {RoleComparer[role]}
                    </AppTag>
                  ))}
                </div>
                {currentUser!.role.includes(UserRoleEnum.ADMIN) && (
                  <GrantRolesControls
                    userId={profile!.id}
                    roles={profile!.role}
                  />
                )}
              </Flex>
            </SectionContainer>
            <SectionContainer>
              <Title level={5}>Обучение</Title>
              {profile!.role.includes(UserRoleEnum.ADMIN) && profile!.course && (
                <AppTag
                  variant='primary'
                  style={{ marginLeft: "8px" }}
                >
                  <AppLink href={RoutesEnum.TICKETS + `?course=${profile!.course.id}`}>{profile!.course.name}</AppLink>
                </AppTag>
              )}
              {profile!.role.includes(UserRoleEnum.ADMIN) && profile!.group && (
                <AppTag
                  variant='primary'
                  style={{ marginLeft: "8px" }}
                >
                  <AppLink href={RoutesEnum.TICKETS + `?group=${profile!.group.id}`}>
                    {profile!.group.identifier + ` Группа`}
                  </AppLink>
                </AppTag>
              )}
              {profile!.role.includes(UserRoleEnum.STUDENT) && (
                <>
                  <AppTag variant='info'>Курс: {profile!.course.name}</AppTag>
                  <AppTag variant='info'>Группа: {profile!.group.identifier}</AppTag>
                </>
              )}
            </SectionContainer>
          </Flex>
        </div>
        <div style={{ width: "100%" }}>
          <Title
            style={{ margin: 0 }}
            level={2}
          >
            Последние заявки
          </Title>
          <Flex
            align='center'
            justify='center'
          >
            <List
              dataSource={profile!.tickets}
              renderItem={item => {
                return (
                  <List.Item key={item.id}>
                    <Descriptions>
                      <Descriptions.Item label='Имя'>{item.name}</Descriptions.Item>
                      <Descriptions.Item label='Описание'>{item.name}</Descriptions.Item>
                      <Descriptions.Item label='С'>{item.name}</Descriptions.Item>
                      <Descriptions.Item label='По'>{item.name}</Descriptions.Item>
                      <Descriptions.Item label='Статус'>{translateStatus[item.status]}</Descriptions.Item>
                      <Descriptions.Item label='Причина'>{translateReason[item.reason]}</Descriptions.Item>
                    </Descriptions>
                  </List.Item>
                )
              }}
            />
          </Flex>
        </div>
      </Flex>
    </div>
  )
}
