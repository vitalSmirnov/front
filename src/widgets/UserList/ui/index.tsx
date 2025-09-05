"use client"

import React, { useEffect } from "react"
import { User } from "../../../shared/entities/User/User"
import { UsersTable } from "../../../entities/UsersTable/ui"
import { FilterUsers } from "../../../features/FilterUsers/ui"
import { useUserStore } from "../../../shared/providers/userProvider"

interface UserListProps {
  users: User[] | []
  total: number
}

export const UserList: React.FC<UserListProps> = ({ users, total }) => {
  const { setUsers } = useUserStore(state => state)

  useEffect(() => {
    setUsers(users)
  }, [users])

  return (
    <div>
      <FilterUsers />
      <UsersTable />
    </div>
  )
}
