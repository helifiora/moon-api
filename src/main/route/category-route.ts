import { Router } from 'express'
import { createRoute } from './helper'
import { adaptRoute } from '../adapter/adapt-route'
import { categoriesControllerFactory as factory } from '../factory'

import {
  ListCategoriesController,
  FindCategoryByIdController
} from '@/presenters/controller/category'

const path = '/categories'
const router = Router()

router.get('/', adaptRoute(factory(ListCategoriesController)))
router.get('/:id', adaptRoute(factory(FindCategoryByIdController)))

export const categoryRoute = createRoute(path, router)
