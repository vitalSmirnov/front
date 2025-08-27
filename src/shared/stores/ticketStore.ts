import { createStore } from "zustand/vanilla"
import { Ticket } from "../entities/Ticket/Ticket"
import { AxiosInstance } from "../api"
import { StatusEnum } from "../entities/Ticket/StatusEnum"
import { GetTicketsPayload, GetTicketsResponse } from "../../entities/TicketTable/types"
import { CreateTicketInfoPayload, CreateTicketInfoResponse } from "../../features/CreateTicket/types"
import { UpdateTicketInfoPayload, UpdateTicketInfoResponse } from "../../features/ProlongTicket/types"

export type TicketState = {
  ticket: Ticket | null
  tickets: Ticket[]
  total?: number
}

interface SetTicketsI {
  tickets: Ticket[]
  total: number
}

export type TicketActions = {
  setTicket: (ticket: Ticket) => void
  setTickets: (Payload: SetTicketsI) => void
  approoveTicket: (ticketId: string) => Promise<Ticket>
  declineTicket: (ticketId: string) => Promise<Ticket>
  getTickets: (ticket: GetTicketsPayload) => Promise<GetTicketsResponse>
  createTicket: (ticket: CreateTicketInfoPayload) => Promise<CreateTicketInfoResponse>
  updateTicket: (ticket: UpdateTicketInfoPayload) => Promise<UpdateTicketInfoResponse>
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
    setTickets: payload => set(() => ({ tickets: payload.tickets, total: payload.total })),
    approoveTicket: async ticketId => {
      try {
        const res = await AxiosInstance.patch<Ticket>(`/tickets/${ticketId}/status`, {
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
    declineTicket: async ticketId => {
      try {
        const res = await AxiosInstance.patch<Ticket>(`/tickets/${ticketId}/status`, {
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
        const res = await AxiosInstance.get<GetTicketsResponse>(`/tickets`, { params: payload })
        set(() => ({ tickets: res.data.tickets, total: res.data.total }))
        return res.data
      } catch (error) {
        console.error("Error fetching tickets:", error)
        throw error
      }
    },
    createTicket: async payload => {
      try {
        const res = await AxiosInstance.post<CreateTicketInfoResponse>(`/tickets`, {
          ...payload,
        })
        set(state => ({ tickets: [...state.tickets, res.data] }))
        return res.data
      } catch (error) {
        console.error("Error fetching tickets:", error)
        throw error
      }
    },
    updateTicket: async payload => {
      try {
        const res = await AxiosInstance.put<CreateTicketInfoResponse>(`/tickets/${payload.id}`, {
          ...payload.payload,
        })
        set(() => ({ ticket: res.data }))
        set(state => ({
          tickets: state.tickets.map(t => (t.id === res.data.id ? res.data : t)),
        }))
        return res.data
      } catch (error) {
        console.error("Error fetching tickets:", error)
        throw error
      }
    },
  }))
}
