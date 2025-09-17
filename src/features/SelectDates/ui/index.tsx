"use client"

import { DatePicker, Form, FormInstance } from "antd"
import React from "react"

interface SelectDatesProps {
  form: FormInstance
}

export const SelectDates: React.FC<SelectDatesProps> = ({ form }) => {
  const endDate = Form.useWatch(["endDate"], form)
  const startDate = Form.useWatch(["startDate"], form)

  return (
    <>
      <Form.Item
        {...form}
        name='startDate'
        label='Начало'
      >
        <DatePicker
          disabledDate={endDate ? current => current.isAfter(endDate, "day") : undefined}
          placeholder='Начало'
        />
      </Form.Item>
      <Form.Item
        {...form}
        name='endDate'
        label='Конец'
      >
        <DatePicker
          disabledDate={startDate ? current => current.isBefore(startDate, "day") : undefined}
          placeholder='Конец'
        />
      </Form.Item>
    </>
  )
}
