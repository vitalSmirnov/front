"use client"

import { DatePicker, Form, FormInstance, FormItemProps } from "antd"
import React from "react"

interface SelectDatesProps extends FormItemProps {
  form: FormInstance
}

export const SelectDates: React.FC<SelectDatesProps> = ({ form, ...props }) => {
  const endDate = Form.useWatch(["endDate"], form)
  const startDate = Form.useWatch(["startDate"], form)

  return (
    <div
      {...props}
      style={{ display: "flex", gap: 16 }}
    >
      <Form.Item
        name='startDate'
        label='Начало'
      >
        <DatePicker
          disabledDate={endDate ? current => current.isAfter(endDate, "day") : undefined}
          placeholder='Начало'
        />
      </Form.Item>
      <Form.Item
        name='endDate'
        label='Конец'
      >
        <DatePicker
          disabledDate={startDate ? current => current.isBefore(startDate, "day") : undefined}
          placeholder='Конец'
        />
      </Form.Item>
    </div>
  )
}
