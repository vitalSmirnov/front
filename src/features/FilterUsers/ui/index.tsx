"use client"

import { useForm } from "antd/es/form/Form"
import { Flex, Form, Select, Typography } from "antd"
import { setParams } from "../utils"
import { useSearchParams } from "next/navigation"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { BankOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons"
import useToken from "antd/es/theme/useToken"
import { SuggestUsersSelect } from "../../SuggestUsers/ui"
import { SuggestGroupSelect } from "../../SuggestGroups/ui"
import { FilterUsersFormProps } from "../types"

const { Text } = Typography

export function FilterUsers() {
  const [_, token] = useToken()
  const { getUsers, setUsers } = useUserStore(state => state)
  const p = useSearchParams()
  const [form] = useForm<FilterUsersFormProps>()
  const searchParams = useSearchParams()

  const handleChange = (_: any, allValues: FilterUsersFormProps) => {
    setParams({
      ...allValues,
    })
    getUsers({
      ...allValues,
      limit: 100,
      offset: searchParams.get("page") ? 100 * (Number(searchParams.get("page")) - 1) : 0,
    })
      .then(data => {
        setUsers(data.users)
      })
      .catch(error => {
        console.error("Error fetching tickets:", error)
      })
  }

  return (
    <Form
      layout='vertical'
      form={form}
      onValuesChange={handleChange}
      initialValues={{
        userName: p.get("userName") || undefined,
        group: p.get("group") || undefined,
        status: p.get("role") || "Все",
      }}
    >
      <Flex
        align='center'
        gap={16}
        wrap='wrap'
      >
        <Form.Item
          name='userName'
          label='ФИО'
        >
          <SuggestUsersSelect placeholder='ФИО' />
        </Form.Item>
        <Form.Item
          name='group'
          label='Группа'
        >
          <SuggestGroupSelect />
        </Form.Item>

        <Form.Item
          name='role'
          label='Роль'
        >
          <Select
            mode='multiple'
            style={{ minWidth: 200 }}
            options={[
              { label: "Все", value: undefined },
              {
                label: (
                  <Text style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <BankOutlined />
                    Деканат
                  </Text>
                ),
                value: UserRoleEnum.ADMIN,
              },
              {
                label: (
                  <Text style={{ color: token.colorSuccess, display: "flex", alignItems: "center", gap: 4 }}>
                    <TeamOutlined />
                    Профессор
                  </Text>
                ),
                value: UserRoleEnum.PROFESSOR,
              },
              {
                label: (
                  <Text style={{ color: token.colorError, display: "flex", alignItems: "center", gap: 4 }}>
                    <UserOutlined />
                    Студент
                  </Text>
                ),
                value: UserRoleEnum.STUDENT,
              },
            ]}
          />
        </Form.Item>
      </Flex>
    </Form>
  )
}
