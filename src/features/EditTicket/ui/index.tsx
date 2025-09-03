"use client"

import { Button, Form, Tooltip, Typography, Upload } from "antd"
import React, { useEffect, useState } from "react"
import { useTicketStore } from "../../../shared/providers/ticketProvider"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import dayjs from "dayjs"
import { UploadOutlined } from "@ant-design/icons"
import { TicketForm } from "../../../processes/TicketForm/ui"
import { UpdateTicketInfoForm } from "../types"
import type { UploadFile } from "antd/es/upload/interface"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"

const mediaPath = process.env.NEXT_PUBLIC_MEDIA_URL
const { Title, Text } = Typography

export const EditTicket: React.FC = () => {
  const router = useRouter()
  const { ticket, updateTicket } = useTicketStore(state => state)
  const { user } = useUserStore(state => state)

  const [form] = Form.useForm<UpdateTicketInfoForm>()

  const [fileList, setFileList] = useState<UploadFile[]>([])

  useEffect(() => {
    if (!ticket) return

    const initialFiles: UploadFile[] = (ticket.prooves ?? []).map((p, idx) => ({
      uid: `uploaded-${idx}-${p.path}`,
      name: p.path.split("/").pop() ?? `file-${idx}`,
      status: "done",
      url: `${mediaPath}${p.path}`,
      originPath: p.path,
    }))

    setFileList(initialFiles)
  }, [ticket, form])

  const handleUploadChange = ({ fileList: newList }: { fileList: UploadFile[] }) => {
    setFileList(newList)
    form.setFieldsValue({ prooves: { fileList: newList } })
  }

  const onFinish = async (values: UpdateTicketInfoForm) => {
    const proovesPaths =
      values.prooves?.fileList?.map(file => {
        // prefer server response path (new uploads), fallback to file.url (existing)
        // @ts-ignore
        return file.response?.file?.path ?? file.url ?? file.thumbUrl
      }) ?? []

    updateTicket({
      id: ticket!.id,
      payload: { ...values, prooves: proovesPaths },
    })
      .then(() => {
        router.push(RoutesEnum.TICKETS + `/${ticket!.id}`)
        form.resetFields()
        setFileList([])
      })
      .catch(error => {
        console.error("Error creating ticket:", error)
      })
  }

  if (user!.id !== ticket!.user.id && !user!.role.includes(UserRoleEnum.ADMIN)) {
    router.push(RoutesEnum.TICKETS + `/${ticket!.id}`)
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
        abortLink={RoutesEnum.TICKETS + `/${ticket!.id}`}
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
