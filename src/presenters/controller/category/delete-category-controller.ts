import { Controller } from '@/presenters/controller/controller'
import { HttpRequest, HttpResponse, Http } from '@/presenters/http'

export class DeleteCategoryController implements Controller {
  async handle (request: HttpRequest): Promise<HttpResponse> {
    return Http.ok({ message: 'Deleted' })
  }
}
