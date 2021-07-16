import { HttpRequest, HttpResponse } from '@/presenters/http'
import { Controller } from '../controller'

export class FindCategoryByIdController implements Controller {
  async handle (request: HttpRequest): Promise<HttpResponse> {
    const id = parseInt(request.params.id) || 0

    const categories = [
      { id: 1, name: 'Love' },
      { id: 2, name: 'Work' }
    ]

    const category = categories.find(c => c.id === id)
    return { body: { category }, status: 200 }
  }
}
