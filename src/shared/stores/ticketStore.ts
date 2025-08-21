import { createStore } from "zustand/vanilla"
import { Ticket } from "../entities/Ticket/Ticket"
import { AxiosInstance } from "../api"
import { StatusEnum } from "../entities/Ticket/StatusEnum"
import { GetTicketsPayload } from "../../entities/TicketTable/types"

export type TicketState = {
  ticket: Ticket | null
  tickets: Ticket[]
}

export type TicketActions = {
  setTicket: (ticket: Ticket) => void
  setTickets: (tickets: Ticket[]) => void
  approoveTicket: (ticketId: string) => Promise<Ticket>
  declineTicket: (ticketId: string) => Promise<Ticket>
  getTickets: (ticket: GetTicketsPayload) => Promise<Ticket[]>
}

export type TicketStore = TicketState & TicketActions

export const defaultInitState: TicketState = {
  ticket: null,
  tickets: [],
}

export const createTicketStore = (initState: TicketState = defaultInitState) => {
  return createStore<TicketStore>()(set => ({
    ...initState,
    setTicket: payload => set(() => ({ ticket: payload })),
    setTickets: payload => set(() => ({ tickets: payload })),
    approoveTicket: async payload => {
      try {
        const res = await AxiosInstance.post<Ticket>(`/tickets/${payload}/status`, {
          status: StatusEnum.APPROVED,
        })
        set(() => ({ ticket: res.data }))
        set(state => ({
          tickets: state.tickets.map(t => (t.id === res.data.id ? res.data : t)),
        }))
        return res.data
      } catch (error) {
        console.error("Error approving ticket:", error)
        throw error
      }
    },
    declineTicket: async payload => {
      try {
        const res = await AxiosInstance.post<Ticket>(`/tickets/${payload}/status`, {
          status: StatusEnum.REJECTED,
        })
        set(() => ({ ticket: res.data }))
        set(state => ({
          tickets: state.tickets.map(t => (t.id === res.data.id ? res.data : t)),
        }))
        return res.data
      } catch (error) {
        console.error("Error declining ticket:", error)
        throw error
      }
    },
    getTickets: async payload => {
      try {
        const res = await AxiosInstance.post<Ticket[]>(
          `/tickets`,
          {
            status: StatusEnum.REJECTED,
          },
          { params: payload }
        )
        set(() => ({ tickets: res.data }))
        return res.data
      } catch (error) {
        console.error("Error fetching tickets:", error)
        throw error
      }
    },
  }))
}
