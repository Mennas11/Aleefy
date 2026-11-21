import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Product from './models/product.js'

dotenv.config()

const products = [
  // Apparel
  {
    name: 'Banana Boat',
    category: 'Apparel',
    description: "A comfy banana wear for your dog's outing",
    image: 'clothing1.jpg',
    price: 450,
    onSale: true,
  },
  {
    name: "Fluffy's Dress",
    category: 'Apparel',
    description: 'An elegant dress for your fluffy friend',
    image: 'clothing2.jpg',
    price: 550,
    onSale: true,
  },
  {
    name: 'Spawty',
    category: 'Apparel',
    description: "Who said you can't take your furry friend to the gym",
    image: 'clothing5.jpg',
    price: 400,
    onSale: true,
  },
  {
    name: 'Hawdie',
    category: 'Apparel',
    description: 'A comfy hoodie for your furry friend',
    image: 'karsten-winegeart-BVqQNu5J7qI-unsplash.jpg',
    price: 650,
    onSale: true,
  },
  {
    name: 'Mr. Grey',
    category: 'Apparel',
    description: 'Grey Apparel for your bestie doggo',
    image: 'logan-weaver-lgnwvr-qx6SruhqymY-unsplash.jpg',
    price: 500,
    onSale: true,
  },
  {
    name: 'Friesy Friesy',
    category: 'Apparel',
    description: 'Double date is also possible with the fur friend',
    image: 'clothing6.jpg',
    price: 480,
    onSale: true,
  },

  // Toys
  {
    name: 'Chewy Bone',
    category: 'Toys',
    description: 'A fun and durable toy for your playful pup',
    image: 'toy1.jpg',
    price: 180,
    onSale: true,
  },
  {
    name: 'Unicorn Cuddle',
    category: 'Toys',
    description: 'A soft and cuddly plush toy for cozy playtime.',
    image: 'toy2.jpg',
    price: 250,
    onSale: true,
  },
  {
    name: 'Pawsome Teaser',
    category: 'Toys',
    description: 'An exciting interactive toy to keep your cat active and entertained.',
    image: 'toy3.jpg',
    price: 220,
    onSale: true,
  },
  {
    name: 'Bouncy Ball',
    category: 'Toys',
    description: 'A colorful bouncing ball made for endless fun and chasing.',
    image: 'toy7.jpg',
    price: 120,
    onSale: true,
  },
  {
    name: 'Teddy Tugger',
    category: 'Toys',
    description: 'A soft plush toy perfect for tugging, chewing, and cuddling.',
    image: 'toy5.jpg',
    price: 280,
    onSale: true,
  },
  {
    name: 'Fetch Buddy',
    category: 'Toys',
    description: 'A playful toy designed for exciting fetch and chase games.',
    image: 'toy6.jpg',
    price: 200,
    onSale: true,
  },

  // Shampoo
  {
    name: 'Pawfect Clean',
    category: 'Shampoo',
    description: 'A gentle shampoo for a fresh and happy pet',
    image: 'shampoo1.jpg',
    price: 300,
    onSale: false,
  },
  {
    name: 'Fluffy Fresh',
    category: 'Shampoo',
    description: 'Leaves your furry friend soft, clean, and smelling great',
    image: 'shampoo2.jpg',
    price: 350,
    onSale: false,
  },
]

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    await Product.deleteMany()
    await Product.insertMany(products)

    console.log(`${products.length} products inserted successfully!`)
  } catch (error) {
    console.error('Error seeding products:', error.message)
  } finally {
    await mongoose.disconnect()
  }
}

seedProducts()