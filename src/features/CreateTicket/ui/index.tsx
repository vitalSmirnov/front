"use client"

import { Button, DatePicker, Form, Input, Select, Upload } from "antd"
import React from "react"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { CreateTicketInfoPayload } from "../types"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import { translateReason } from "../../../entities/TicketTable/utils"

const reasonOptions = Object.values(ReasonEnum).map(r => ({ label: translateReason[r], value: r }))

export const CreateTicket: React.FC = () => {
  const router = useRouter()
  const { createTicket } = useTicketStore(state => state)
  const [form] = Form.useForm()

  const onFinish = async (values: CreateTicketInfoPayload) => {
    createTicket(values)
      .then(() => {
        router.push(RoutesEnum.TICKETS)
        form.resetFields()
      })
      .catch(error => {
        console.error("Error creating ticket:", error)
        // Handle error appropriately, e.g., show a notification
      })
  }
  return (
    <div>
      <Form
        layout='vertical'
        onFinish={onFinish}
        form={form}
        initialValues={{
          name: "",
          startDate: new Date(),
          reason: ReasonEnum.SICKDAY,
          description: "",
        }}
      >
        <Form.Item
          name='name'
          label='Название'
          rules={[{ required: true, message: "Пожалуйста, введите название заявки!" }]}
        >
          <Input placeholder='Введите название заявки' />
        </Form.Item>
        <Form.Item
          name='startDate'
          label='Дата начала'
          rules={[{ required: true, message: "Пожалуйста, выберите дату начала!" }]}
        >
          <DatePicker type='date' />
        </Form.Item>
        <Form.Item
          name='endDate'
          label='Дата окончания'
          rules={[{ required: true, message: "Пожалуйста, выберите дату окончания!" }]}
        >
          <DatePicker type='date' />
        </Form.Item>
        <Form.Item
          name='reason'
          label='Причина'
          rules={[{ required: true, message: "Пожалуйста, выберите причину заявки!" }]}
        >
          <Select options={reasonOptions} />
        </Form.Item>
        <Form.Item
          name='description'
          label='Описание'
        >
          <Input.TextArea
            placeholder='Введите описание заявки'
            rows={4}
          />
        </Form.Item>
        <Form.Item
          name='prooves'
          label='Подтверждения'
        >
          <Upload action='/api/upload' />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType='submit'
            type='primary'
          >
            Создать заявку
          </Button>
          <Button onClick={() => router.push(RoutesEnum.TICKETS)}>Отмена</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
