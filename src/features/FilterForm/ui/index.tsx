"use client"

import { useForm } from "antd/es/form/Form"
import { DatePicker, Flex, Form, Input, Select, Typography } from "antd"
import { setParams, toIso } from "../utils"
import { useSearchParams } from "next/navigation"
import dayjs from "dayjs"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { GetTicketsPayload } from "../../../entities/TicketTable/types"
import { CheckCircleTwoTone, Loading3QuartersOutlined, CloseCircleTwoTone } from "@ant-design/icons"
import useToken from "antd/es/theme/useToken"
import { SuggestGroupSelect } from "../../SuggestGroups/ui"
import { SuggestUsersSelect } from "../../SuggestUsers/ui"
import { useTicketStore } from "../../../shared/providers/ticketProvider"

const { Text } = Typography

export function FilterForm() {
  const [_, token] = useToken()
  const { user } = useUserStore(state => state)
  const { getTickets, setTickets } = useTicketStore(state => state)
  const p = useSearchParams()
  const [form] = useForm<Omit<GetTicketsPayload, "limit" | "offset">>()
  const searchParams = useSearchParams()

  const handleChange = (_: any, allValues: any) => {
    setParams({
      ...allValues,
      startDate: toIso(allValues?.startDate),
      endDate: toIso(allValues?.endDate),
    })
    getTickets({
      ...allValues,
      startDate: toIso(allValues?.startDate),
      endDate: toIso(allValues?.endDate),
      limit: 100,
      offset: searchParams.get("page") ? 100 * (Number(searchParams.get("page")) - 1) : 0,
    })
      .then(data => {
        setTickets(data)
      })
      .catch(error => {
        console.error("Error fetching tickets:", error)
      })
  }

  const isAdmin = user!.role.includes(UserRoleEnum.ADMIN) || user!.role.includes(UserRoleEnum.PROFESSOR)

  return (
    <Form
      layout='vertical'
      form={form}
      onValuesChange={handleChange}
      initialValues={{
        userName: p.get("userName") || undefined,
        startDate: p.get("startDate") ? dayjs(p.get("startDate")!) : undefined,
        endDate: p.get("endDate") ? dayjs(p.get("endDate")!) : undefined,
        status: p.get("status") ? dayjs(p.get("status")!) : "Все",
      }}
    >
      <Flex
        align='center'
        gap={16}
        wrap='wrap'
      >
        {isAdmin && (
          <>
            <Form.Item
              name='userName'
              label='ФИО'
            >
              <SuggestUsersSelect placeholder='ФИО' />
            </Form.Item>
            <Form.Item
              name='group'
              label='Группа'
            >
              <SuggestGroupSelect />
            </Form.Item>
          </>
        )}
        <Form.Item
          name='startDate'
          label='Начало'
        >
          <DatePicker placeholder='Начало' />
        </Form.Item>
        <Form.Item
          name='endDate'
          label='Конец'
        >
          <DatePicker placeholder='Конец' />
        </Form.Item>
        <Form.Item
          name='status'
          label='Статус'
        >
          <Select
            style={{ minWidth: 200 }}
            options={[
              { label: "Все", value: undefined },
              {
                label: (
                  <Text style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Loading3QuartersOutlined />
                    На рассмотрении
                  </Text>
                ),
                value: StatusEnum.PENDING,
              },
              {
                label: (
                  <Text style={{ color: token.colorSuccess, display: "flex", alignItems: "center", gap: 4 }}>
                    <CheckCircleTwoTone twoToneColor={token.colorSuccess} />
                    Одобрено
                  </Text>
                ),
                value: StatusEnum.APPROVED,
              },
              {
                label: (
                  <Text style={{ color: token.colorError, display: "flex", alignItems: "center", gap: 4 }}>
                    <CloseCircleTwoTone twoToneColor={token.colorError} />
                    Отклонено
                  </Text>
                ),
                value: StatusEnum.REJECTED,
              },
            ]}
          />
        </Form.Item>
      </Flex>
    </Form>
  )
}
