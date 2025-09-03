"use client"

import { Empty, Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import React, { useEffect, useState } from "react"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import { useSearchParams } from "next/navigation"
import { AppTag } from "../../../shared/ui/AppTag/ui"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { Prove } from "../../../shared/entities/Prove/Prove"
import Image from "next/image"
import { RightOutlined, SmileOutlined } from "@ant-design/icons"
import dayjs from "dayjs"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import Link from "next/link"
import { translateReason, translateStatus } from "../utils"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { ApprooveTicket } from "../../../features/ApprooveTicket/ui"
import { RejectTicket } from "../../../features/RejectTicket/ui"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { AppImage } from "../../../shared/ui/Image"

const columns: ColumnsType<Ticket> = [
  {
    title: "Студент",
    dataIndex: ["user", "name"],
    key: "user",
    render: (_, record) => <Link href={`/home/users/${record.user.id}`}>{record.user.name}</Link>,
  },
  { title: "Название", dataIndex: "name", key: "name" },
  {
    title: "С даты",
    dataIndex: "startDate",
    key: "dateFrom",
    render: (text: string) => dayjs(text).format("DD.MM.YYYY"),
  },
  {
    title: "По дату",
    dataIndex: "endDate",
    key: "dateTo",
    render: (text: string) => dayjs(text).format("DD.MM.YYYY"),
  },
  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
    render: (text: StatusEnum) => (
      <AppTag variant={text === StatusEnum.PENDING ? "default" : text === StatusEnum.APPROVED ? "success" : "danger"}>
        {translateStatus[text]}
      </AppTag>
    ),
  },
  {
    title: "Причина",
    dataIndex: "reason",
    key: "reason",
    render: (text: ReasonEnum) => <AppTag variant='info'>{translateReason[text]}</AppTag>,
  },
  {
    title: "Подтверждения",
    dataIndex: "prooves",
    key: "prooves",
    render: (prooves: Prove[]) => (
      <>
        {prooves.length ? (
          prooves.map(item => (
            <AppImage
              key={item.id}
              path={item.path}
            />
          ))
        ) : (
          <Empty
            styles={{ image: { height: "10px" } }}
            image={<SmileOutlined />}
            description={"Нет подтверждений"}
          />
        )}
      </>
    ),
  },
  {
    title: "Действия",
    key: "actions",
    render: (_: any, { id, status }: Ticket) => {
      return (
        <>
          {status !== StatusEnum.APPROVED && <ApprooveTicket ticketId={id} />}
          {status !== StatusEnum.REJECTED && <RejectTicket ticketId={id} />}
        </>
      )
    },
  },
  {
    key: "Transfer",
    render: (_: any, { id }: Ticket) => {
      return (
        <Link href={RoutesEnum.TICKETS + "/" + id}>
          Перейти <RightOutlined />
        </Link>
      )
    },
  },
]

export const TicketTable: React.FC = () => {
  const { tickets, total, getTickets, setTickets } = useTicketStore(state => state)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const searchParams = useSearchParams()

  const fetchTickets = async () => {
    setIsLoading(true)
    getTickets({
      userName: searchParams.get("userName") || undefined,
      startDate: searchParams.get("startDate") || undefined,
      group: searchParams.get("group") || undefined,
      endDate: searchParams.get("endDate") || undefined,
      status: (searchParams.get("status") as StatusEnum) || undefined,
      limit: 100,
      offset: searchParams.get("page") ? 100 * (Number(searchParams.get("page")) - 1) : 0,
    })
      .then(data => {
        setTickets(data)
      })
      .catch(error => {
        console.error("Error fetching tickets:", error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  useEffect(() => {
    fetchTickets()
  }, [searchParams])

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={tickets}
      rowKey='id'
      pagination={{
        total: tickets.length,
        onChange(page, _) {
          const newParams = new URLSearchParams(searchParams.toString())
          newParams.set("page", String(page))
        },
      }}
    />
  )
}
