import React, { PropsWithChildren } from "react"
interface SectionContainerProps extends PropsWithChildren {}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return (
    <section
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "12px 16px",
        backgroundColor: "#f0f2f5",
        borderRadius: "16px",
      }}
    >
      {children}
    </section>
  )
}
