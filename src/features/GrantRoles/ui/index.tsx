"use client"

import { Button, Flex, Form, Modal, Tooltip } from "antd"
import React, { useState } from "react"
import { EditOutlined } from "@ant-design/icons"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { useUserProfileStore } from "../../../shared/providers/userProfileProvider"
import { toast } from "react-toastify"
interface GrantRolesControlsProps {
  userId: string
  roles: UserRoleEnum[]
}

export const GrantRolesControls: React.FC<GrantRolesControlsProps> = ({ userId, roles }) => {
  const { revokeRole, grantRole } = useUserProfileStore(state => state)
  const allRoles = Object.values(UserRoleEnum)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [includedRoles, setIncludedRoles] = useState<UserRoleEnum[]>(roles)
  const [excludedRoles, setExcludedRoles] = useState<UserRoleEnum[]>([
    ...allRoles.filter(role => !roles.includes(role)),
  ])

  const handlerOpenModal = () => {
    setIsModalOpen(true)
  }

  const revokeRoles = async (role: UserRoleEnum) => {
    revokeRole(userId, role)
      .catch(e => {
        console.error(e)
        toast.error("Ошибка при снятии роли")
      })
      .then(() => {
        setIncludedRoles(prev => prev.filter(r => r !== role))
        setExcludedRoles(prev => [...prev, role])
      })
  }

  const assignRoles = async (role: UserRoleEnum) => {
    grantRole(userId, role)
      .catch(e => {
        console.error(e)
        toast.error("Ошибка при назначении роли")
      })
      .then(() => {
        setExcludedRoles(prev => prev.filter(r => r !== role))
        setIncludedRoles(prev => [...prev, role])
      })
  }

  return (
    <div style={{ marginLeft: "auto" }}>
      <Tooltip title='Назначить или убрать роль'>
        <Button
          type='primary'
          onClick={handlerOpenModal}
        >
          <EditOutlined />
        </Button>
      </Tooltip>
      <Modal
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        title='Назначить или убрать роль'
        open={isModalOpen}
      >
        <Flex gap={8}>
          {includedRoles.map(role => (
            <Tooltip
              key={role + "_included"}
              title='Установленная роль'
            >
              <Button
                type='primary'
                onClick={() => revokeRoles(role)}
              >
                {role}
              </Button>
            </Tooltip>
          ))}
          {excludedRoles.map(role => (
            <Tooltip
              key={role + "_excluded"}
              title='Отсутствующая роль'
            >
              <Button onClick={() => assignRoles(role)}>{role}</Button>
            </Tooltip>
          ))}
        </Flex>
      </Modal>
    </div>
  )
}
