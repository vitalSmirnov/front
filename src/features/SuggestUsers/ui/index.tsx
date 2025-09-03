"use client"

import { SelectProps } from "antd"
import React, { useEffect, useState } from "react"
import { SuggestionInput } from "../../../shared/ui/SuggestionInput"
import { suggestUsers } from "../api"
interface SuggestUsersSelectProps extends SelectProps {}

export const SuggestUsersSelect: React.FC<SuggestUsersSelectProps> = ({ ...props }) => {
  const [options, setOptions] = useState<SelectProps["options"]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchOptions = async () => {
    setLoading(true)
    suggestUsers()
      .then(res => {
        console.log(res)
        const newOptions = res.data.users.map(user => ({
          label: user.name,
          value: user.name,
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

  console.log("Пользователи", options)

  return (
    <SuggestionInput
      {...props}
      loading={loading}
      placeholder={"Пользователь"}
      options={options}
    />
  )
}
