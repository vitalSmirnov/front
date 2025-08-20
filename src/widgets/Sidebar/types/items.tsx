import Link from "next/link"
import { RoutesEnum } from "../../../shared/router/routesEnum"
import { HeartOutlined, FileAddOutlined } from "@ant-design/icons"

export const MenuItems = [
  {
    key: "tickets",
    label: <Link href={RoutesEnum.TICKETS}>Больничные</Link>,
    icon: <HeartOutlined />,
  },
  {
    key: "requests",
    label: <Link href={RoutesEnum.REQUESTS}>Заявки</Link>,
    icon: <FileAddOutlined />,
  },
]
