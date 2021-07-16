import { Request } from 'express'
import { HttpRequest } from '@/presenters/http'

export function adaptRequest (req: Request): HttpRequest {
  return {
    body: req.body || {},
    query: req.query || {},
    params: req.params || {}
  }
}
