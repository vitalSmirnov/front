"use client"

import { Select } from "antd"
import React, { useEffect, useState } from "react"
import { getCourse } from "../api"
import { Course } from "../../../shared/entities/Course/course"
import { CourseSelectProps } from "../types"

export const CourseSelect: React.FC<CourseSelectProps> = ({ groupId, ...props }) => {
  const [data, setData] = useState<Course[]>([])
  const [identifier, setIdentifier] = useState<string | undefined>(groupId)
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
      group: identifier,
    })
      .then(response => {
        setData(response.data.courses)
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
        label: group.name,
        value: group.id,
      }))}
    />
  )
}
