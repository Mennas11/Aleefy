
import clothing1 from '../../assets/Images/clothing1.jpg'
import clothing2 from '../../assets/Images/clothing2.jpg'
import clothing5 from '../../assets/Images/clothing5.jpg'
import hoodie from '../../assets/Images/karsten-winegeart-BVqQNu5J7qI-unsplash.jpg'
import mrGrey from '../../assets/Images/logan-weaver-lgnwvr-qx6SruhqymY-unsplash.jpg'
import clothing6 from '../../assets/Images/clothing6.jpg'

import toy1 from '../../assets/Images/toy1.jpg'
import toy2 from '../../assets/Images/toy2.jpg'
import toy3 from '../../assets/Images/toy3.jpg'
import toy7 from '../../assets/Images/toy7.jpg'
import toy5 from '../../assets/Images/toy5.jpg'
import toy6 from '../../assets/Images/toy6.jpg'

import shampoo1 from '../../assets/Images/shampoo1.jpg'
import shampoo2 from '../../assets/Images/shampoo2.jpg'

const products = [
  // Apparel
  {
    id: 1,
    name: 'Banana Boat',
    category: 'Apparel',
    description: "A comfy banana wear for your dog's outing",
    image: clothing1,
    price: 450,
    onSale: true,
  },
  {
    id: 2,
    name: "Fluffy's Dress",
    category: 'Apparel',
    description: 'An elegant dress for your fluffy friend',
    image: clothing2,
    price: 550,
    onSale: true,
  },
  {
    id: 3,
    name: 'Spawty',
    category: 'Apparel',
    description: "Who said you can't take your furry friend to the gym",
    image: clothing5,
    price: 400,
    onSale: true,
  },
  {
    id: 4,
    name: 'Hawdie',
    category: 'Apparel',
    description: 'A comfy hoodie for your furry friend',
    image: hoodie,
    price: 650,
    onSale: true,
  },
  {
    id: 5,
    name: 'Mr. Grey',
    category: 'Apparel',
    description: 'Grey Apparel for your bestie doggo',
    image: mrGrey,
    price: 500,
    onSale: true,
  },
  {
    id: 6,
    name: 'Friesy Friesy',
    category: 'Apparel',
    description: 'Double date is also possible with the fur friend',
    image: clothing6,
    price: 480,
    onSale: true,
  },

  // Toys
  {
    id: 7,
    name: 'Chewy Bone',
    category: 'Toys',
    description: 'A fun and durable toy for your playful pup',
    image: toy1,
    price: 180,
    onSale: true,
  },
  {
    id: 8,
    name: 'Unicorn Cuddle',
    category: 'Toys',
    description: 'A soft and cuddly plush toy for cozy playtime.',
    image: toy2,
    price: 250,
    onSale: true,
  },
  {
    id: 9,
    name: 'Pawsome Teaser',
    category: 'Toys',
    description: 'An exciting interactive toy to keep your cat active and entertained.',
    image: toy3,
    price: 220,
    onSale: true,
  },
  {
    id: 10,
    name: 'Bouncy Ball',
    category: 'Toys',
    description: 'A colorful bouncing ball made for endless fun and chasing.',
    image: toy7,
    price: 120,
    onSale: true,
  },
  {
    id: 11,
    name: 'Teddy Tugger',
    category: 'Toys',
    description: 'A soft plush toy perfect for tugging, chewing, and cuddling.',
    image: toy5,
    price: 280,
    onSale: true,
  },
  {
    id: 12,
    name: 'Fetch Buddy',
    category: 'Toys',
    description: 'A playful toy designed for exciting fetch and chase games.',
    image: toy6,
    price: 200,
    onSale: true,
  },

  // Shampoo
  {
    id: 13,
    name: 'Pawfect Clean',
    category: 'Shampoo',
    description: 'A gentle shampoo for a fresh and happy pet',
    image: shampoo1,
    price: 300,
    onSale: false,
  },
  {
    id: 14,
    name: 'Fluffy Fresh',
    category: 'Shampoo',
    description: 'Leaves your furry friend soft, clean, and smelling great',
    image: shampoo2,
    price: 350,
    onSale: false,
  },
]

export default products
