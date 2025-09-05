export interface GetUsersPayload {}
export interface GetUsersResponse {
  data: {
    users: {
      id: string
      name: string
    }[]
    total: number
  }
}
