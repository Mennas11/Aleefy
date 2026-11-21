import express from 'express'

import {
  getProducts,
  getProductById
} from '../controllers/productController.js'

const router = express.Router()

// GET all products
router.get('/', getProducts)

// GET one product by ID
router.get('/:id', getProductById)

export default router