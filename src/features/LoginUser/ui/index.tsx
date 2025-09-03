"use client"

import { useState } from "react"
import { useForm } from "antd/es/form/Form"
import { Button, Flex, Form, Input, message } from "antd"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { LoginCredentials } from "../types"
import { loginRequest } from "../api"
import { toast } from "react-toastify"
import useToken from "antd/es/theme/useToken"

export const LoginUserUI = () => {
  const [_, token] = useToken()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isError, setError] = useState<string | null>(null)

  const [form] = useForm<LoginCredentials>()

  const router = useRouter()

  const SignInHandler = () => {
    router.push(RoutesEnum.REGISTRATION)
  }

  const successAction = async (payload: LoginCredentials) => {
    setLoading(true)
    loginRequest(payload)
      .then(() => {
        router.push(RoutesEnum.HOME)
      })
      .catch(error => {
        toast.error(error.response?.data?.error || "Ошибка при входе в систему")
        setError(error.response?.data?.error || "Ошибка при входе в систему")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Form
      form={form}
      name='loginForm'
      layout='vertical'
      validateMessages={{ required: "Пожалуйста, введите ваш ${label}!" }}
      onFinish={successAction}
      onFieldsChange={() => {
        setError(null)
      }}
    >
      <Form.Item
        label={"Логин"}
        name={"login"}
        tooltip='Используйте вашу почту в качестве логина'
        rules={[
          { required: true, message: "Пожалуйста, введите ваш логин" },
          { message: "Некорректный формат почты", type: "email" },
        ]}
        required
        validateTrigger='onBlur'
      >
        <Input placeholder='username@gmail.com' />
      </Form.Item>
      <Form.Item
        label={"Пароль"}
        name={"password"}
        rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
        required
        validateTrigger='onBlur'
      >
        <Input.Password placeholder='*********' />
      </Form.Item>
      <Form.Item>
        <Flex gap='16px'>
          <Button
            block
            onClick={SignInHandler}
          >
            Регистрация
          </Button>
          <Button
            block
            loading={isLoading}
            disabled={isError !== null}
            type='primary'
            htmlType='submit'
          >
            Войти
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  )
}
