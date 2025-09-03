"use client"

import { Button, Form, Typography, Upload, UploadFile } from "antd"
import React, { useState } from "react"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { CreateTicketInfoForm } from "../types"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { ReasonEnum } from "../../../shared/entities/Ticket/ReasonEnum"
import dayjs from "dayjs"
import { UploadOutlined } from "@ant-design/icons"
import { TicketForm } from "../../../processes/TicketForm/ui"

const { Title } = Typography

export const CreateTicket: React.FC = () => {
  const router = useRouter()
  const { createTicket } = useTicketStore(state => state)
  const [form] = Form.useForm<CreateTicketInfoForm>()

  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleUploadChange = ({ fileList: newList }: { fileList: UploadFile[] }) => {
    setFileList(newList)
    form.setFieldsValue({ prooves: { fileList: newList } })
  }

  const onFinish = async (values: CreateTicketInfoForm) => {
    const prooves = values.prooves?.fileList || []

    const proovesPaths: string[] = prooves.map(file => {
      return file?.response?.file?.path ?? []
    })

    createTicket({ ...values, prooves: proovesPaths || [] })
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
      <Title
        level={2}
        style={{ marginBottom: 24 }}
      >
        {`Создание заявки`}
      </Title>

      <TicketForm
        name='create-ticket-form'
        onFinish={onFinish}
        form={form}
        initialValues={{
          name: "",
          startDate: dayjs(),
          reason: ReasonEnum.SICKDAY,
          description: "",
        }}
      >
        <Form.Item
          name='prooves'
          label='Подтверждения'
          help='Можно загрузить до 5 файлов в форматах jpg, png, pdf'
          getValueFromEvent={(e: any) => ({ fileList: e?.fileList })}
        >
          <Upload
            action={"/api/media/upload"}
            method='POST'
            listType='picture'
            accept='image/png, image/jpeg, application/pdf'
            fileList={fileList}
            onChange={handleUploadChange}
            multiple
          >
            <Button icon={<UploadOutlined />}>Загрузить подтверждения</Button>
          </Upload>
        </Form.Item>
      </TicketForm>
    </>
  )
}
