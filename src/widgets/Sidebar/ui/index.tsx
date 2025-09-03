"use client"

import { Menu } from "antd"
import { useUserStore } from "../../../shared/providers/userProvider"
import { UserRoleEnum } from "../../../shared/entities/RoleEnum/UserRoleEnum"
import { MenuItems } from "../types/items"

export const TopBarMenu = () => {
  const { user } = useUserStore(state => state)

  let MenuItemsRoles = user?.role.includes(UserRoleEnum.ADMIN) ? MenuItems : MenuItems.slice(0, 0)

  return (
    <Menu
      mode='horizontal'
      items={MenuItemsRoles}
    />
  )
}
