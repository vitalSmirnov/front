import { GlobalToken } from "antd"

export const useTagVariants = (token: GlobalToken) => {
  return {
    ["primary"]: {
      color: token.colorPrimary,
      fontWeight: 600,
      backgroundColor: "transparent",
      borderColor: token.colorPrimary,
      border: "2px solid",
    },
    ["default"]: {
      color: token.colorFillSecondary,
      fontWeight: 600,
      backgroundColor: "transparent",
      borderColor: token.colorFillSecondary,
      border: "2px solid",
    },
    ["info"]: {
      color: token.colorInfo,
      fontWeight: 600,
      backgroundColor: "transparent",
      borderColor: token.colorInfo,
      border: "2px solid",
    },
    ["success"]: {
      color: token.colorSuccess,
      fontWeight: 600,
      backgroundColor: "transparent",
      borderColor: token.colorSuccess,
    },
    ["danger"]: {
      color: token.colorError,
      fontWeight: 600,
      backgroundColor: "transparent",
      borderColor: token.colorError,
    },
  }
}
