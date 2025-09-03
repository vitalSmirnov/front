import { Menu } from "antd"
import { MenuItems } from "../types/items"

export const TopBarMenu = () => {
  return (
    <Menu
      style={{ width: "100%" }}
      mode='horizontal'
      items={MenuItems}
    />
  )
}
