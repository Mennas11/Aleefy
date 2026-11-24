
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import petRoutes from './routes/petRoutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Main route
app.get('/', (req, res) => {
  res.send('Aleefy API is running!')
})

// API routes
app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/pets', petRoutes)

// Start server
const startServer = async () => {
  await connectDB()

  const PORT = process.env.PORT || 5000

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()
