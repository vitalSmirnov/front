import { Breadcrumb } from "antd"
import { RoutesEnum } from "../../../../shared/router/routesEnum"
import { ConcreteTicket } from "../../../../entities/Ticket/ui"

const breadcrumbItems = [
  {
    title: `Больничные`,
  },
  {
    title: "Заявки",
    href: RoutesEnum.TICKETS,
  },
]

export default async function TicketsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ConcreteTicket ticketId={params.id} />
    </>
  )
}
