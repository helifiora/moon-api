import { Express } from 'express'
import { categoryRoute } from './category-route'

const routes = [
  categoryRoute
]

export function setupRoutes (app: Express): void {
  for (const route of routes) {
    app.use(route.path, route.route)
  }
}
