"use client"

import { Select, SelectProps } from "antd"
import React, { useDeferredValue, useEffect, useState } from "react"
import { GroupsResponse } from "../types"
import { getGroups } from "../api"

interface GroupSelectProps extends SelectProps {
  courseId?: string
}

export const GroupSelect: React.FC<GroupSelectProps> = ({ courseId, ...props }) => {
  const [data, setData] = useState<{ id: string; identifier: string }[]>([])
  const [identifier, setIdentifier] = useState<string>()
  const defferedIdentifier = useDeferredValue(identifier)
  const [filters, setFilters] = useState<{ offset: number; limit: number }>({
    limit: 100,
    offset: 0,
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchGroups = async () => {
    setIsLoading(true)
    getGroups({
      limit: filters.limit,
      offset: filters.offset,
      identifier: defferedIdentifier,
      courseId: courseId,
    })
      .then(response => {
        setData(response.data)
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
  }, [defferedIdentifier, courseId])

  return (
    <Select
      {...props}
      loading={isLoading}
      showSearch
      searchValue={identifier}
      onSearch={setIdentifier}
      options={data.map(group => ({
        label: group.identifier,
        value: group.id,
      }))}
    />
  )
}
