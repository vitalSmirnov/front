import React from "react"
import { FilterForm } from "../../../features/FilterForm/ui"
import { TicketTable } from "../../../entities/TicketTable/ui"
import { GetTable } from "../../../features/CreateTicket copy/ui"

export default function TicketList() {
  return (
    <div>
      <FilterForm />
      <GetTable />
      <TicketTable />
    </div>
  )
}
