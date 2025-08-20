import type { ThemeConfig } from "antd"

export const appTheme: ThemeConfig = {
  token: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: 16,
    colorPrimary: "#4880FF",
    colorBgBase: "#f2f2f2",
    colorError: "#FF7A30",
    colorSuccess: "#00BFA5",
    colorInfo: "#FCEF91",
    colorLink: "#4880FF",
  },
  components: {
    Form: {
      fontWeightStrong: 500,
    },
    Layout: {
      colorBgLayout: "#f2f2f2",
    },
    Input: {
      controlHeight: 40,
      colorBgContainer: "white",
      hoverBorderColor: "black",
      activeBorderColor: "black",
      activeShadow: "0 0 0 1px rgba(72, 128, 255, 0.2)",
    },
    Table: {
      colorBgContainer: "#fbfafaff",
    },
    Button: {
      controlHeight: 40,
      fontSize: 16,
      fontWeight: 600,
      paddingInline: "16px",
      colorSuccess: "#00BFA5",
      colorError: "#FF7A30",
      colorPrimary: "#000000",
      colorText: "#f2f2f2",

      colorPrimaryActive: "#000000",
      colorPrimaryHover: "rgba(39, 39, 39, 1)",
      colorPrimaryBg: "#f2f2f2",

      defaultBg: "white",
      defaultActiveBg: "#f2f2f2",
      defaultColor: "#000000",
      defaultBorderColor: "#000000",
      defaultActiveBorderColor: "#000000",
    },
  },
}
