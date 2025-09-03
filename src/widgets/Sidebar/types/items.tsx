import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { HeartOutlined } from "@ant-design/icons"

export const MenuItems = [
  {
    key: "tickets",
    label: <Link href={RoutesEnum.TICKETS}>Больничные</Link>,
    icon: <HeartOutlined />,
  },
]
