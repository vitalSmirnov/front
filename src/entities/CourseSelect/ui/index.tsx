"use client"

import { Select, SelectProps } from "antd"
import React, { useDeferredValue, useEffect, useState } from "react"
import { CourseResponse } from "../types"
import { getCourse } from "../api"

export const CourseSelect: React.FC<SelectProps> = ({ ...props }) => {
  const [data, setData] = useState<CourseResponse[]>([])
  const [identifier, setIdentifier] = useState<string | undefined>(undefined)
  const [filters, setFilters] = useState<{ offset: number; limit: number }>({
    limit: 100,
    offset: 0,
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchGroups = async () => {
    setIsLoading(true)
    getCourse({
      limit: filters.limit,
      offset: filters.offset,
      identifier: identifier,
    })
      .then(response => {
        setData(response)
      })
      .catch(error => {
        console.error("Error fetching groups:", error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchGroups()
  }, [identifier, filters])

  return (
    <Select
      loading={isLoading}
      {...props}
      showSearch
      onSearch={setIdentifier}
      options={data.map(group => ({
        label: group.identifier,
        value: group.id,
      }))}
    />
  )
}
