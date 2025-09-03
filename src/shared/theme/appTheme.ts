import type { ThemeConfig } from "antd"

export const appTheme: ThemeConfig = {
  token: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: 16,
    colorPrimary: "#4880FF",
    colorBgBase: "#f2f2f2",
    colorFillSecondary: "#8e8e8eff",
    colorError: "#FF7A30",
    colorSuccess: "#00BFA5",
    colorInfo: "#e7d336ff",
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
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0,
      margin: 0,
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
      colorPrimaryBg: "white",

      defaultBg: "white",
      defaultActiveBg: "white",
      defaultColor: "#000000",
      defaultBorderColor: "#000000",
      defaultActiveBorderColor: "#000000",

      colorErrorBg: "white",
    },
    DatePicker: {
      controlHeight: 40,
      colorBgContainer: "white",
    },
    Select: {
      controlHeight: 40,
      colorBgContainer: "white",
    },
  },
}
