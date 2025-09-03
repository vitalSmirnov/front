export interface GroupsPayload {
  limit?: number
  offset?: number
  courseId?: string
  identifier?: string
}
export interface GroupsResponse {
  data: {
    id: string
    identifier: string
  }[]
}
