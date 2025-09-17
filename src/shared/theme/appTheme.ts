import type { ThemeConfig } from "antd"

export const appTheme: ThemeConfig = {
  token: {
    colorPrimary: "#4880FF",

    colorBgBase: "#f2f2f2",
    colorBgContainer: "#FFFFFF",
    colorBgElevated: "#FFFFFF",
    colorBgLayout: "#000000",
    colorFillSecondary: "#8e8e8eff",
    colorError: "#FF7A30",
    colorSuccess: "#00BFA5",
    colorInfo: "#e7d336ff",
    colorLink: "#4880FF",
    colorTextBase: "#000000",
    colorText: "#000000",
    colorTextLightSolid: "#FFFFFF",
    colorBorder: "#d9d9d9",
    borderRadius: 8,
    controlHeight: 40,
    controlOutline: "rgba(72, 128, 255, 0.1)",
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 16,
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
      colorErrorBgActive: "#ff7a30",
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
    Spin: {
      colorPrimary: "white",
    },
  },
}
