"use client"

import { Select, SelectProps } from "antd"
import React from "react"
interface SuggestionInputProps extends SelectProps {}

export const SuggestionInput: React.FC<SuggestionInputProps> = ({ ...props }) => {
  console.log(props.options)
  return (
    <Select
      {...props}
      showSearch
      allowClear
    />
  )
}
