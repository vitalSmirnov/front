import { Button, Flex, Form, FormProps } from "antd"
import FormItem from "antd/es/form/FormItem"
import { PropsWithChildren } from "react"

interface FormLayoutProps<T> extends Omit<FormProps<T>, "children">, PropsWithChildren {
  formId: string
  successText?: string
  secondaryText?: string
  secondaryAction?: () => void
}

export function FormLayout<T>({
  children,
  formId,
  successText = "Сохранить",
  secondaryAction,
  secondaryText = "Отмена",
  ...props
}: FormLayoutProps<T>) {
  return (
    <Form
      layout='vertical'
      id={formId}
      {...props}
    >
      {children}
      <Flex>
        <FormItem>
          <Button
            type='primary'
            form={formId}
            htmlType='submit'
          >
            {successText}
          </Button>
        </FormItem>
        <FormItem>
          <Button
            color='default'
            onClick={secondaryAction}
          >
            {secondaryText}
          </Button>
        </FormItem>
      </Flex>
    </Form>
  )
}
