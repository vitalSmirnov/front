"use client"

import FormItem from "antd/es/form/FormItem"
import { useState } from "react"
import { useForm } from "antd/es/form/Form"
import { Button, Flex, Form, Input, message } from "antd"
import { useRouter } from "next/navigation"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { LoginCredentials } from "../types"
import { loginRequest } from "../api"

export const LoginUserUI = () => {
  const [isLoading, setLoading] = useState<boolean>(false)

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
        console.error("Login error:", error)
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
      onFinish={successAction}
    >
      <FormItem
        label={"Логин"}
        name={"login"}
        rules={[{ message: "Пожалуйста, введите ваш логин" }]}
        required
      >
        <Input placeholder='username@gmail.com' />
      </FormItem>
      <FormItem
        label={"Пароль"}
        name={"password"}
        rules={[{ message: "Пожалуйста, введите пароль" }]}
        required
      >
        <Input
          type='password'
          placeholder='*********'
        />
      </FormItem>
      <FormItem>
        <Flex gap='16px'>
          <Button
            block
            color='default'
            onClick={SignInHandler}
          >
            Регистрация
          </Button>
          <Button
            block
            loading={isLoading}
            disabled={isLoading}
            type='primary'
            htmlType='submit'
            form='loginForm'
          >
            Войти
          </Button>
        </Flex>
      </FormItem>
    </Form>
  )
}
