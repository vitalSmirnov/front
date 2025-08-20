"use client"

import { Form, FormProps, Input } from "antd"

export const PasswordForm: React.FC<FormProps> = ({ ...props }) => {
  return (
    <>
      <Form
        {...props}
        layout='vertical'
      >
        <Form.Item
          name={"password"}
          label={"Пароль"}
          required
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите пароль",
              min: 6,
            },
          ]}
        >
          <Input
            minLength={6}
            type='password'
            placeholder='*********'
          />
        </Form.Item>
        <Form.Item
          label={"Повторите пароль"}
          dependencies={["password"]}
          name={"confirmPassword"}
          required
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error("Пароли не совпадают"))
              },
            }),
          ]}
        >
          <Input
          minLength={6}
            type='password'
            placeholder='*********'
          />
        </Form.Item>
      </Form>
    </>
  )
}
