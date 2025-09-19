"use client"

import { Menu } from "antd"
import { MenuItems } from "../types/items"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"

export const TopBarMenu = () => {
  const { user } = useUserStore(s => s)
  const menuItems =
    !user!.role.includes(UserRoleEnum.ADMIN) && !user!.role.includes(UserRoleEnum.PROFESSOR)
      ? MenuItems.slice(0, 1)
      : MenuItems
  return (
    <Menu
      style={{ width: "100%" }}
      mode='horizontal'
      items={menuItems}
    />
  )
}
