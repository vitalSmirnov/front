import { AxiosInstance } from "../../../shared/api"

export const getTicket = async (ticketId: string) => {
  return await AxiosInstance.get(`/tickets/${ticketId}`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error("Error fetching tickets:", error)
      return error
    })
}
