
import mongoose from 'mongoose'

const petSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    species: {
      type: String,
      required: true,
      enum: ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'],
    },

    breed: {
      type: String,
      trim: true,
      default: 'Unknown',
    },

    age: {
      type: Number,
      min: 0,
      required: true,
    },

    weight: {
      type: Number,
      min: 0,
      required: true,
    },

    gender: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'],
      default: 'Unknown',
    },

    profileImage: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)

const Pet = mongoose.model('Pet', petSchema)

export default Pet
