
import express from 'express'
import protect from '../middleware/authMiddleware.js'

import {
  createPet,
  getMyPets,
  getPetById,
  updatePet,
  deletePet,
} from '../controllers/petController.js'

const router = express.Router()

// All pet routes require authentication
router.use(protect)

// Create a pet
router.post('/', createPet)

// Get all pets belonging to the logged-in user
router.get('/', getMyPets)

// Get one pet
router.get('/:id', getPetById)

// Update a pet
router.put('/:id', updatePet)

// Delete a pet
router.delete('/:id', deletePet)

export default router
