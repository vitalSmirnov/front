"use client"

import { Button, Empty, Flex, Table, Tooltip } from "antd"
import type { ColumnsType } from "antd/es/table"
import React, { useEffect } from "react"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import { getTicketList } from "../api"
import { useSearchParams } from "next/navigation"
import { AppTag } from "../../../shared/ui/AppTag/ui"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { Prove } from "../../../shared/entities/Prove/Prove"
import Image from "next/image"
import { CheckCircleOutlined, DeleteOutlined, SmileOutlined } from "@ant-design/icons"
import { GetTicketsResponse } from "../types"
import dayjs from "dayjs"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import { User } from "../../../shared/entities/User/User"
import Link from "next/link"
import { translateReason, translateStatus } from "../utils"

interface TicketTableProps {
  data: GetTicketsResponse
}

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
            <Image
              key={item.id}
              src={item.path}
              alt='attachment'
              width={50}
              height={50}
              style={{ objectFit: "cover" }}
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
    render: (_: any, { id }: Ticket) => {
      return (
        <Flex
          justify='center'
          gap={"12px"}
        >
          <Tooltip title='Быстрое подтверждение'>
            <Button
              onClick={() => console.log(`Approve ticket with id: ${id}`)}
              type='primary'
              size='small'
            >
              <CheckCircleOutlined />
            </Button>
          </Tooltip>
          <Tooltip title='Быстрое отклонение'>
            <Button
              onClick={() => console.log(`Approve ticket with id: ${id}`)}
              color='danger'
              type='primary'
              size='small'
            >
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </Flex>
      )
    },
  },
]

export const TicketTable: React.FC<TicketTableProps> = ({ data }) => {
  const [dataSource, setDataSource] = React.useState<Ticket[]>(data.tickets || [])
  console.log("TicketTable dataSource", dataSource)
  const [isLoading, setIsLoading] = React.useState(false)

  const searchParams = useSearchParams()

  const fetchTickets = async () => {
    setIsLoading(true)
    getTicketList({
      userName: searchParams.get("userName") || undefined,
      startDate: searchParams.get("startDate") || undefined,
      endDate: searchParams.get("endDate") || undefined,
      limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : 100,
      offset: searchParams.get("offset") ? Number(searchParams.get("offset")) : 0,
    })
      .then(response => {
        setDataSource(response.data.tickets)
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
  }, [
    searchParams.get("userName"),
    searchParams.get("limit"),
    searchParams.get("offset"),
    searchParams.get("endDate"),
    searchParams.get("startDate"),
  ])

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={dataSource}
      rowKey='id'
      pagination={false}
    />
  )
}
