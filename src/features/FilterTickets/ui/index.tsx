"use client"

import { useForm } from "antd/es/form/Form"
import { Flex, Form, Select, Typography } from "antd"
import { setParams, toIso } from "../utils"
import { useSearchParams } from "next/navigation"
import dayjs from "dayjs"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { CheckCircleTwoTone, Loading3QuartersOutlined, CloseCircleTwoTone } from "@ant-design/icons"
import useToken from "antd/es/theme/useToken"
import { SuggestGroupSelect } from "../../SuggestGroups/ui"
import { SuggestUsersSelect } from "../../SuggestUsers/ui"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { FilterFormProps } from "../types"
import { SelectDates } from "../../SelectDates/ui"
import { useEffect, useState } from "react"
import { useDebounce } from "../../../shared/hooks/useDebounce"

const { Text } = Typography

export function FilterForm() {
  const [_, token] = useToken()
  const [form] = useForm<FilterFormProps>()
  const [formParams, setFormParams] = useState<FilterFormProps>()
  const { user } = useUserStore(state => state)
  const { getTickets, setTickets } = useTicketStore(state => state)
  const p = useSearchParams()
  const searchParams = useSearchParams()
  const debouncedParams = useDebounce(formParams, 500)

  const handleChange = (_: any, allValues: FilterFormProps) => {
    setFormParams(allValues)
  }

  useEffect(() => {
    setParams({
      ...debouncedParams,
      startDate: toIso(debouncedParams?.startDate),
      endDate: toIso(debouncedParams?.endDate),
    })
    getTickets({
      ...debouncedParams,
      startDate: toIso(debouncedParams?.startDate),
      endDate: toIso(debouncedParams?.endDate),
      limit: 100,
      offset: searchParams.get("page") ? 100 * (Number(searchParams.get("page")) - 1) : 0,
    })
      .then(data => {
        setTickets(data)
      })
      .catch(error => {
        console.error("Error fetching tickets:", error)
      })
  }, [debouncedParams])

  const isAdmin = user!.role.includes(UserRoleEnum.ADMIN) || user!.role.includes(UserRoleEnum.PROFESSOR)

  return (
    <Form
      layout='vertical'
      form={form}
      onValuesChange={handleChange}
      initialValues={{
        userName: p.get("userName") || "",
        startDate: p.get("startDate") ? dayjs(p.get("startDate")!) : "",
        endDate: p.get("endDate") ? dayjs(p.get("endDate")!) : "",
        status: p.get("status") ? p.get("status")! : "",
      }}
    >
      <Flex
        align='center'
        gap={16}
        wrap='wrap'
      >
        {isAdmin ? (
          <>
            <Form.Item
              style={{ minWidth: 300 }}
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
        ) : (
          <></>
        )}
        <SelectDates form={form} />
        <Form.Item
          name='status'
          label='Статус'
        >
          <Select
            allowClear
            style={{ minWidth: 200 }}
            options={[
              { label: "Все", value: "" },
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
