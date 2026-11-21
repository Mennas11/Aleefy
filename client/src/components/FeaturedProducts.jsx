import { Link } from 'react-router-dom'
import useProducts from '../features/products/useProducts'
import ProductCard from './ProductCard'
import './FeaturedProducts.css'

function FeaturedProducts() {
  const { products, loading, error } = useProducts()

  const featuredProducts = products.slice(0, 4)

  return (
    <section className="featured-section">
      <div className="featured-heading">
        <div>
          <span>OUR LITTLE FAVORITES</span>
          <h2>Featured Products</h2>
          <p>Handpicked essentials for your furry best friend.</p>
        </div>

        <Link to="/products" className="featured-view-all">
          View all products →
        </Link>
      </div>

      {loading && <p className="featured-message">Loading products...</p>}

      {error && (
        <p className="featured-message">
          Couldn't load products. Please try again.
        </p>
      )}

      {!loading && !error && (
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default FeaturedProducts