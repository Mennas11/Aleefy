import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Aleefy API is running!')
})

app.use('/api/products', productRoutes)

// Start server
const startServer = async () => {
  await connectDB()

  const PORT = process.env.PORT || 5000

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

startServer()