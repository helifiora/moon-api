import { ControllerFactory, ControllerType } from '@/main/factory/helpers'
import { Controller } from '@/presenters/controller/controller'
import {
  CreateCategoryController, DeleteCategoryController,
  FindCategoryByIdController,
  ListCategoriesController, UpdateCategoryController
} from '@/presenters/controller/category'

export function categoriesControllerFactory<T extends Controller> (type: ControllerType<T>): ControllerFactory {
  switch (type.name) {
    case ListCategoriesController.name:
      return listCategoriesControllerFactory
    case FindCategoryByIdController.name:
      return findCategoryByIdControllerFactory
    case CreateCategoryController.name:
      return createCategoryFactory
    case UpdateCategoryController.name:
      return updateCategoryFactory
    case DeleteCategoryController.name:
      return deleteCategoryFactory
    default:
      throw Error('Unknown type')
  }
}

function listCategoriesControllerFactory (): Controller {
  return new ListCategoriesController()
}

function findCategoryByIdControllerFactory (): Controller {
  return new FindCategoryByIdController()
}

function createCategoryFactory (): Controller {
  return new CreateCategoryController()
}

function updateCategoryFactory (): Controller {
  return new UpdateCategoryController()
}

function deleteCategoryFactory (): Controller {
  return new DeleteCategoryController()
}
