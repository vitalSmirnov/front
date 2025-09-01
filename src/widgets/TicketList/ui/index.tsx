import React from "react"
import { FilterForm } from "../../../features/FilterForm/ui"
import { TicketTable } from "../../../entities/TicketTable/ui"
import { GetTable } from "../../../features/GetTable/ui"
import { Button, Flex } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"

export default function TicketList() {
  return (
    <div>
      <Flex
        align='center'
        gap={16}
      >
        <FilterForm />
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
          <Button icon={<PlusOutlined />}>
            <Link href={RoutesEnum.CREATE_TICKET}>Создать заявку</Link>
          </Button>
          <GetTable />
        </div>
      </Flex>
      <TicketTable />
    </div>
  )
}
