"use client"

import { Button, DatePicker, Form, Modal, Tooltip } from "antd"
import React, { useState } from "react"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import dayjs from "dayjs"

interface ProlongTicketProps {
  ticket: Omit<Ticket, "user">
}

export const ProlongTicket: React.FC<ProlongTicketProps> = ({ ticket }) => {
  const [form] = Form.useForm()
  const { updateTicket } = useTicketStore(state => state)
  const [open, setOpen] = useState<boolean>(false)

  const handleProlong = async (value: { endDate: Date }) => {
    updateTicket({
      payload: { reason: ticket.reason, description: ticket.description, name: ticket.name, endDate: value.endDate },
      id: ticket.id,
    })
      .then(() => {
        console.log("Заявка успешно продлена")
        setOpen(false)
        form.resetFields()
      })
      .catch(error => {
        console.error("Ошибка при отклонении заявки:", error)
      })
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        type='primary'
      >
        Продлить
      </Button>
      <Modal
        open={open}
        onOk={form.submit}
        okText='Продлить'
        cancelText='Отмена'
        onCancel={() => setOpen(false)}
        title='Продлить заявку до'
      >
        <Form
          layout='vertical'
          onFinish={handleProlong}
          form={form}
          initialValues={{ endDate: dayjs(ticket.endDate) }}
        >
          <Form.Item name={"endDate"}>
            <Form.Item
              name='endDate'
              rules={[{ required: true, message: "Пожалуйста, выберите дату окончания!" }]}
            >
              <DatePicker
                placeholder='Выберите дату'
                minDate={dayjs(ticket.endDate).add(1, "day")} // +1 day
              />
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
