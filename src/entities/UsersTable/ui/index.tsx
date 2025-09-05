"use client"

import { Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import React from "react"
import { useSearchParams } from "next/navigation"
import { AppTag } from "../../../shared/ui/AppTag/ui"
import { RightOutlined } from "@ant-design/icons"
import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { User } from "../../../shared/entities/User/User"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { RoleComparer } from "../../../shared/ui/AppTag/types/RoleComparer"

const columns: ColumnsType<User> = [
  {
    title: "Студент",
    dataIndex: "name",
    key: "user",
    render: (_, record) => (
      <Link href={`${RoutesEnum.USERS}/${record.id}`}>
        {record.name} <RightOutlined />
      </Link>
    ),
  },
  { title: "Курс", dataIndex: ["course", "identifier"], key: "course" },
  { title: "Группа", dataIndex: ["group", "identifier"], key: "group" },
  {
    title: "Роль",
    dataIndex: "role",
    key: "role",
    render: (_: any, { role }: User) => {
      return (
        <>
          {role.map(role => (
            <AppTag
              key={role}
              variant={
                role === UserRoleEnum.ADMIN ? "primary" : role.includes(UserRoleEnum.PROFESSOR) ? "success" : "info"
              }
            >
              {RoleComparer[role]}
            </AppTag>
          ))}
        </>
      )
    },
  },

  {
    title: "кол-во заявок",
    dataIndex: "tickets",
    key: "tickets",
    render: (_: any, { tickets, name }: User) => {
      console.log("UsersTable render with users:", { tickets, name })
      return <Link href={`${RoutesEnum.TICKETS}?userName=${name}`}>{tickets.length}</Link>
    },
  },
]

export const UsersTable: React.FC = () => {
  const { users } = useUserStore(state => state)
  const searchParams = useSearchParams()

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey='id'
      pagination={{
        total: users.length,
        onChange(page, _) {
          const newParams = new URLSearchParams(searchParams.toString())
          newParams.set("page", String(page))
        },
      }}
    />
  )
}
