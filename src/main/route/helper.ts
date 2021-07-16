import { Router } from 'express'

export function createRoute (path: string, route: Router) {
  return { path, route }
}
