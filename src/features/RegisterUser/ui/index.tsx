"use client"

import { useState } from "react"
import { Button, Form } from "antd"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { FormCredentials, RegisterCredentials } from "../types"
import { registerRequest } from "../api"
import { LeftOutlined } from "@ant-design/icons"
import { UserForm } from "./UserForm"
import { PasswordForm } from "./PasswordForm"
import { DataUserForm } from "./DataForm"

const steps = ["userForm", "dataForm", "passwordForm"] as const
type StepName = (typeof steps)[number]

export const RegisterUserUI = () => {
  const [form] = Form.useForm<FormCredentials>()
  const [step, setStep] = useState<StepName>("userForm")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const goBack = () => {
    const idx = steps.indexOf(step)
    if (idx > 0) setStep(steps[idx - 1])
  }

  const handleFinish = async (finishedName: string) => {
    await form.validateFields()
    if (finishedName === "passwordForm") {
      const allValues: RegisterCredentials = form.getFieldsValue(true)
        setLoading(true)
        registerRequest(allValues).then(res => {
            router.push(RoutesEnum.HOME)
        }). catch(e => {
          console.log('Ошибка регистрации', e)
        }).finally(() => {
          setLoading(false)
        })
    } else {
      const idx = steps.indexOf(finishedName as StepName)
      setStep(steps[idx + 1])
      form.setFieldsValue(form.getFieldsValue(true))
    }
  }

  const submitCurrent = () => {
    form.submit()

  }

  return (
    <>
      <Form.Provider
        onFormFinish={name => {
          handleFinish(name as string)
        }}
      >
        {step !== "userForm" && (
          <Button
            onClick={goBack}
            icon={<LeftOutlined />}
          />
        )}

        {step === "userForm" && (
          <UserForm
            form={form}
            name='userForm'
          />
        )}
        {step === "dataForm" && (
          <DataUserForm
            form={form}
            name='dataForm'
          />
        )}
        {step === "passwordForm" && (
          <PasswordForm
            form={form}
            name='passwordForm'
          />
        )}

        <Button
          type='primary'
          block
          loading={loading}
          onClick={submitCurrent}
        >
          {step === "passwordForm" ? "Зарегистрироваться" : "Далее"}
        </Button>
      </Form.Provider>
    </>
  )
}
