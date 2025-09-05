import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { HeartOutlined, TeamOutlined } from "@ant-design/icons"

export const MenuItems = [
  {
    key: "tickets",
    label: <Link href={RoutesEnum.TICKETS}>Больничные</Link>,
    icon: <HeartOutlined />,
  },
  {
    key: "users",
    label: <Link href={RoutesEnum.USERS}>Пользователи</Link>,
    icon: <TeamOutlined />,
  },
]
