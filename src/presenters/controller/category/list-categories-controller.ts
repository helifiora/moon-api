import { HttpRequest, HttpResponse } from '@/presenters/http'
import { Controller } from '../controller'

export class ListCategoriesController implements Controller {
  async handle (request: HttpRequest): Promise<HttpResponse> {
    const categories = [
      { id: 1, name: 'Love' },
      { id: 2, name: 'Work' }
    ]

    return {
      body: { categories },
      status: 200
    }
  }
}
