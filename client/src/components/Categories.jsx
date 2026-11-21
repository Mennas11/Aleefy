
import { Link } from 'react-router-dom'
import productImages from '../features/products/productImages'
import './Categories.css'

const categories = [
  {
    name: 'Apparel',
    image: productImages['clothing1.jpg'],
    color: '#f8c4c7',
    icon: '👕',
  },
  {
    name: 'Toys',
    image: productImages['toy1.jpg'],
    color: '#c9e4f2',
    icon: '🧸',
  },
  {
    name: 'Shampoo',
    image: productImages['shampoo1.jpg'],
    color: '#ffe2a3',
    icon: '🧴',
  },
]

function Categories() {
  return (
    <section className="categories-section">
      <div className="categories-heading">
        <span>FIND THEIR FAVORITES</span>
        <h2>Shop by Category</h2>
        <p>Everything your furry friend needs, in one place.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            to={`/products?category=${encodeURIComponent(category.name)}`}
            className="category-card"
            key={category.name}
            style={{ backgroundColor: category.color }}
          >
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>

            <div className="category-info">
              <h3>{category.name}</h3>
              <span>Shop now →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
