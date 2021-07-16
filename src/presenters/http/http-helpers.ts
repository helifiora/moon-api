import { HttpResponse } from '@/presenters/http/http-response'

export function ok (body: object): HttpResponse {
  return { body, status: 200 }
}
