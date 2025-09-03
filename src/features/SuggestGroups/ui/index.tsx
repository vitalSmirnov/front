"use client"

import { SelectProps } from "antd"
import React, { useEffect, useState } from "react"
import { SuggestionInput } from "../../../shared/ui/SuggestionInput"
import { getGroups } from "../../../entities/GroupSelect/api"
interface SuggestGroupSelectProps extends SelectProps {}

export const SuggestGroupSelect: React.FC<SuggestGroupSelectProps> = ({ ...props }) => {
  const [options, setOptions] = useState<SelectProps["options"]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchOptions = async () => {
    setLoading(true)
    getGroups({})
      .then(res => {
        const newOptions = res.data.map(group => ({
          label: group.identifier,
          value: group.id,
        }))
        setOptions(newOptions)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchOptions()
  }, [])

  console.log("ГРуппы", options)

  return (
    <SuggestionInput
      {...props}
      loading={loading}
      placeholder={"Группы"}
      options={options}
    />
  )
}
