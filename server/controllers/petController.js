
import mongoose from 'mongoose'
import Pet from '../models/pet.js'

// @desc    Add a new pet
// @route   POST /api/pets
export const createPet = async (req, res) => {
  try {
    const { name, species, breed, age, weight, gender, profileImage } = req.body

    if (!name || !species || age === undefined || weight === undefined) {
      return res.status(400).json({
        message: 'Name, species, age, and weight are required.',
      })
    }

    const pet = await Pet.create({
      owner: req.user.id,
      name,
      species,
      breed,
      age,
      weight,
      gender,
      profileImage,
    })

    return res.status(201).json({
      message: 'Pet added successfully.',
      pet,
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}

// @desc    Get all pets belonging to the logged-in user
// @route   GET /api/pets
export const getMyPets = async (req, res) => {
  try {
    const pets = await Pet.find({ owner: req.user.id }).sort({
      createdAt: -1,
    })

    return res.status(200).json({
      count: pets.length,
      pets,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Could not retrieve pets.',
    })
  }
}

// @desc    Get one pet
// @route   GET /api/pets/:id
export const getPetById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid pet ID.' })
    }

    const pet = await Pet.findOne({
      _id: req.params.id,
      owner: req.user.id,
    })

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found.' })
    }

    return res.status(200).json({ pet })
  } catch (error) {
    return res.status(500).json({
      message: 'Could not retrieve pet.',
    })
  }
}

// @desc    Update a pet
// @route   PUT /api/pets/:id

export const updatePet = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid pet ID.' })
    }

    // Only allow these fields to be updated
    const allowedFields = [
      'name',
      'species',
      'breed',
      'age',
      'weight',
      'gender',
      'profileImage',
    ]

    const updates = {}

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field]
      }
    })

    const pet = await Pet.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user.id,
      },
      { $set: updates },
      {
        new: true,
        runValidators: true,
      }
    )

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found.' })
    }

    return res.status(200).json({
      message: 'Pet updated successfully.',
      pet,
    })
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}


// @desc    Delete a pet
// @route   DELETE /api/pets/:id
export const deletePet = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Invalid pet ID.' })
    }

    const pet = await Pet.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    })

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found.' })
    }

    return res.status(200).json({
      message: 'Pet deleted successfully.',
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Could not delete pet.',
    })
  }
}
