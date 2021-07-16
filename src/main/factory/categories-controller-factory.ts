import { ControllerFac, ControllerType } from '@/main/factory/helpers'
import { Controller } from '@/presenters/controller/controller'
import { FindCategoryByIdController, ListCategoriesController } from '@/presenters/controller/category'

export function categoriesControllerFactory<T extends Controller> (type: ControllerType<T>): ControllerFac {
  switch (type.name) {
    case ListCategoriesController.name:
      return listCategoriesControllerFactory
    case FindCategoryByIdController.name:
      return findCategoryByIdControllerFactory
    default:
      throw Error('Categoria desconhecida')
  }
}

function listCategoriesControllerFactory (): Controller {
  return new ListCategoriesController()
}

function findCategoryByIdControllerFactory (): Controller {
  return new FindCategoryByIdController()
}
