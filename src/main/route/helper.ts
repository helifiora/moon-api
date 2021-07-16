import { Router } from 'express'

interface RouteApp {
  path: string
  route: Router
}

export function createRoute (path: string, route: Router): RouteApp {
  return { path, route }
}
