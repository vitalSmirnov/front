import { Descriptions, List } from "antd"
import { getTicket } from "../api"
import { Ticket } from "../../../shared/entities/Ticket/Ticket"
import Image from "next/image"

interface TicketProps {
  ticketId: string
}
export const ConcreteTicket: React.FC<TicketProps> = async ({ ticketId }) => {
  const result: Ticket = await getTicket(ticketId)
  return (
    <div>
      <Descriptions>
        <Descriptions.Item label={"Название"}>{result.name}</Descriptions.Item>
        <Descriptions.Item label={"Причина"}>{result.reason}</Descriptions.Item>
        <Descriptions.Item label={"Статус"}>{result.status}</Descriptions.Item>
        <Descriptions.Item label={"Описание"}>{result.description}</Descriptions.Item>
      </Descriptions>
      <List bordered={false}>
        {result.prooves.map(item => {
          return (
            <List.Item key={item.id}>
              <Image
                src={item.path}
                alt={"Приложение"}
              />
              {item.name}
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}
