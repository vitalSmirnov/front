import { Button, DatePicker, Form, FormProps, Input, Select } from "antd"
import React, { PropsWithChildren } from "react"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { translateReason } from "../../../entities/TicketTable/utils"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import Link from "next/link"
import { SelectDates } from "../../../features/SelectDates/ui"

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
        <SelectDates form={props.form!} />
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
        <Form.Item style={{ marginTop: "auto" }}>
          <Button
            htmlType='submit'
            type='primary'
          >
            {submitText}
          </Button>
          <Button>
            <Link href={abortLink}>{abortText}</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
