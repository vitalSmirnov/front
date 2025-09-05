import { Menu } from "antd"
import { MenuItems } from "../types/items"

export const TopBarMenu = () => {
  const menuItems = MenuItems
  return (
    <Menu
      style={{ width: "100%" }}
      mode='horizontal'
      items={MenuItems}
    />
  )
}
