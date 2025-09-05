import { GetTicketsPayload } from "../../../entities/TicketTable/types"

export interface FilterFormProps extends Omit<GetTicketsPayload, "limit" | "offset"> {}
