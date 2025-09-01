export interface GetTablePayload {
  courseId?: string
  groupId?: string
  startDate?: Date
  endDate?: Date
}
export interface GetTableResponse extends File {}
