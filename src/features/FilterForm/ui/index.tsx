"use client"

import { useForm } from "antd/es/form/Form"
import { Button, DatePicker, Flex, Form, Input, Select } from "antd"
import { setParams, toIso } from "../utils"
import { useSearchParams } from "next/navigation"
import dayjs from "dayjs"
import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { RightOutlined } from "@ant-design/icons"
import { StatusEnum } from "../../../shared/entities/Ticket/StatusEnum"

export function FilterForm() {
  const p = useSearchParams()
  const [form] = useForm()

  const handleChange = (_: any, allValues: any) => {
    setParams({
      ...allValues,
      startDate: toIso(allValues?.startDate),
      endDate: toIso(allValues?.endDate),
    })
  }

  return (
    <Form
      layout='vertical'
      form={form}
      onValuesChange={handleChange}
      initialValues={{
        userName: p.get("userName") || "",
        startDate: p.get("startDate") ? dayjs(p.get("startDate")!) : undefined,
        endDate: p.get("endDate") ? dayjs(p.get("endDate")!) : undefined,
        status: p.get("status") ? dayjs(p.get("status")!) : undefined,
      }}
    >
      <Flex
        align='center'
        gap={16}
        wrap='wrap'
      >
        <Form.Item
          name='userName'
          label='ФИО'
        >
          <Input placeholder='ФИО' />
        </Form.Item>
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
            options={[
              { label: "Все", value: "" },
              { label: "Ожидает", value: StatusEnum.PENDING },
              { label: "Одобрено", value: StatusEnum.APPROVED },
              { label: "Отклонено", value: StatusEnum.REJECTED },
            ]}
          />
        </Form.Item>
      </Flex>
    </Form>
  )
}
