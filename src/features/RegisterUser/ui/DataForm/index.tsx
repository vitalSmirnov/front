"use client"

import { Form, FormProps } from "antd"
import { GroupSelect } from "../../../../entities/GroupSelect/ui"
import { CourseSelect } from "../../../../entities/CourseSelect/ui"
import { useEffect } from "react"

export const DataUserForm: React.FC<FormProps> = ({ ...props }) => {
  const courseId = Form.useWatch("course", props.form) as string

  useEffect(() => {
    props.form!.setFieldsValue({ groups: undefined }) 
  }, [courseId])


  return (
    <>
      <Form
        {...props}
        layout='vertical'
      >
        <Form.Item
          label={"Курс"}
          name='course'
          required
        >
          <CourseSelect />
        </Form.Item>
        <Form.Item
          label={"Группа"}
          name='groups'
          required
        >
          <GroupSelect courseId={courseId} />
        </Form.Item>
      </Form>
    </>
  )
}
