import { GlobalToken } from "antd"

export const useTagVariants = (token: GlobalToken) => {
  return {
    ["primary"]: { color: token.colorPrimary },
    ["default"]: { color: token.colorBgBase },
    ["info"]: { color: token.colorInfo },
    ["success"]: { color: token.colorSuccess },
    ["danger"]: { color: token.colorError },
  }
}
