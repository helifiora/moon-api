import { Router } from 'express'
import { createRoute } from './helper'
import { adaptRoute } from '../adapter/adapt-route'

import {
  ListCategoriesController,
  FindCategoryByIdController
} from '@/presenters/controller/category'

const path = '/categories'
const router = Router()

router.get('/', adaptRoute(() => new ListCategoriesController()))
router.get('/:id', adaptRoute(() => new FindCategoryByIdController()))

export const categoryRoute = createRoute(path, router)
