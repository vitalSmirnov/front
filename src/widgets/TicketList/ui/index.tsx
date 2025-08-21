import { getServerTicketList } from "../api"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import React from "react"
import { FilterForm } from "../../../features/FilterForm/ui"
import { TicketTable } from "../../../entities/TicketTable/ui"

export default async function TicketList({
  searchParams,
}: {
  searchParams: { userName?: string; startDate?: string; endDate?: string; limit?: string; offset?: string }
}) {
  let initialData: { tickets: Ticket[]; total: number } = { tickets: [], total: 0 }
  const { userName, startDate, endDate, limit, offset } = searchParams || {}

  try {
    initialData = await getServerTicketList({
      ...searchParams,
      userName: userName || undefined,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
    }).then(response => response.data)
  } catch (error) {
    console.error("Ошибка при запросе серверного компонента с тикетами :", error)
  }

  return (
    <div>
      <FilterForm />
      <TicketTable data={initialData} />
    </div>
  )
}
