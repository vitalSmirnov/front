"use client"

import { Button, Form, Tooltip, Typography, Upload } from "antd"
import React from "react"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { UpdateTicketInfoPayload } from "../../ProlongTicket/types"
import dayjs from "dayjs"
import { UploadOutlined } from "@ant-design/icons"
import { TicketForm } from "../../../processes/TicketForm/ui"

const { Title, Text } = Typography

export const EditTicket: React.FC = () => {
  const router = useRouter()
  const { ticket, updateTicket } = useTicketStore(state => state)
  const [form] = Form.useForm()

  const onFinish = async (values: UpdateTicketInfoPayload) => {
    updateTicket(values)
      .then(() => {
        router.push(RoutesEnum.TICKETS)
        form.resetFields()
      })
      .catch(error => {
        console.error("Error creating ticket:", error)
      })
  }

  return (
    <>
      <Tooltip
        color='white'
        title={
          <Text>
            ID заявки: <Text copyable>{ticket?.id}</Text>
          </Text>
        }
      >
        <Title
          level={2}
          style={{ marginBottom: 24 }}
        >
          {`Редактирование заявки: ${ticket?.name}`}
        </Title>
      </Tooltip>
      <TicketForm
        abortText='Отмена'
        abortLink={RoutesEnum.TICKETS + `/${ticket?.id}`}
        submitText='Редактировать заявку'
        name='edit-ticket-form'
        layout='vertical'
        onFinish={onFinish}
        form={form}
        initialValues={{
          ...ticket,
          startDate: ticket ? dayjs(ticket.startDate) : undefined,
          endDate: ticket ? dayjs(ticket.endDate) : undefined,
        }}
      >
        <Form.Item
          name='prooves'
          label='Подтверждения'
          help='Можно загрузить несколько файлов в форматах jpg, png, pdf'
        >
          <Upload
            action='/api/upload'
            accept='image/*,.pdf'
            multiple
          >
            <Button icon={<UploadOutlined />}>Загрузить подтверждения</Button>
          </Upload>
        </Form.Item>
      </TicketForm>
    </>
  )
}
