"use client"

import { Button, DatePicker, Form, FormProps, Input, Select } from "antd"
import React, { PropsWithChildren } from "react"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import Router from "next/router"
import { translateReason } from "../../../entities/TicketTable/utils"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"

interface TicketFormProps extends Omit<FormProps, "children">, PropsWithChildren {
  abortText?: string
  submitText?: string
  abortLink?: string
}

const reasonOptions = Object.values(ReasonEnum).map(r => ({ label: translateReason[r], value: r }))

export const TicketForm: React.FC<TicketFormProps> = ({
  children,
  abortLink = RoutesEnum.TICKETS,
  abortText = "Отмена",
  submitText = "Создать заявку",
  ...props
}) => {
  return (
    <div style={{ boxSizing: "border-box", height: "100%" }}>
      <Form
        layout='vertical'
        {...props}
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
        {children}
        {/* <Form.Item
          name='prooves'
          label='Подтверждения'
        >
          <Upload action='/api/upload'>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item> */}
        <Form.Item style={{ marginTop: "auto" }}>
          <Button
            htmlType='submit'
            type='primary'
          >
            {submitText}
          </Button>
          <Button onClick={() => Router.push(abortLink)}>{abortText}</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
