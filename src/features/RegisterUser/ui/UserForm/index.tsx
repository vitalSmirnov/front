import FormItem from "antd/es/form/FormItem"

import { Form, FormProps, Input } from "antd"

export const UserForm: React.FC<FormProps> = ({ ...props }) => {
  return (
    <>
      <Form
        {...props}
        layout='vertical'
      >
        <FormItem
          label={"Логин"}
          name='login'
          required
        >
          <Input
            type='email'
            placeholder='username@gmail.com'
          />
        </FormItem>
        <FormItem
          label={"ФИО"}
          name='name'
          required
        >
          <Input
            type='text'
            placeholder='Иванов Иван Иванович'
          />
        </FormItem>
      </Form>
    </>
  )
}
