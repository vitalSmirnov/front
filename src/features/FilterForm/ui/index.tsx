"use client"

import { useForm } from "antd/es/form/Form"
import { Button, DatePicker, Flex, Form, Input } from "antd"
import { setParams, toIso } from "../utils"
import { useSearchParams } from "next/navigation"
import dayjs from "dayjs"
import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { RightOutlined } from "@ant-design/icons"

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
        <Button
          type='link'
          icon={<RightOutlined />}
        >
          <Link href={RoutesEnum.CREATE_TICKET}>Создать заявку</Link>
        </Button>
      </Flex>
    </Form>
  )
}
