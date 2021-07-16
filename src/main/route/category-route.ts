import { Router } from 'express'
import { createRoute } from './helper'
import { adaptRoute } from '../adapter'
import { categoriesControllerFactory as factory } from '../factory'

import {
  ListCategoriesController,
  FindCategoryByIdController,
  CreateCategoryController,
  UpdateCategoryController,
  DeleteCategoryController
} from '@/presenters/controller/category'

const path = '/categories'
const router = Router()

router.get('/', adaptRoute(factory(ListCategoriesController)))
router.get('/:id', adaptRoute(factory(FindCategoryByIdController)))

router.post('/', adaptRoute(factory(CreateCategoryController)))
router.put('/:id', adaptRoute(factory(UpdateCategoryController)))
router.delete('/:id', adaptRoute(factory(DeleteCategoryController)))

export const categoryRoute = createRoute(path, router)
