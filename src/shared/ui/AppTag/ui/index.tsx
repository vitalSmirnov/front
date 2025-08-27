import { Tag, TagProps } from "antd"
import { PropsWithChildren } from "react"
import { useTagVariants } from "../types/useTagVariant"
import useToken from "antd/es/theme/useToken"

interface AppTagProps extends PropsWithChildren, TagProps {
  variant?: "primary" | "default" | "info" | "success" | "danger"
}

export const AppTag: React.FC<AppTagProps> = ({ children, variant = "default", ...props }) => {
  const [_, token] = useToken()
  return (
    <Tag
      {...props}
      style={useTagVariants(token)[variant]}
    >
      {children}
    </Tag>
  )
}
