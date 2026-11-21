
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import './ProductCard.css'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  return (
    <article className="product-card">
      <div className="product-card-image">
        {product.onSale && (
          <span className="product-sale-badge">Sale</span>
        )}

        <Link to={`/products/${product._id}`}>
          <img src={product.image} alt={product.name} />
        </Link>

        <button
          className="product-quick-add"
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      <div className="product-card-info">
        <Link
          to={`/products/${product._id}`}
          className="product-card-name"
        >
          {product.name}
        </Link>

        <p className="product-card-description">
          {product.description}
        </p>

        <div className="product-card-bottom">
          <span className="product-card-price">
            EGP {product.price}
          </span>

          <button
            className={`product-add-button ${added ? 'is-added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? (
              <>
                <i className="fa-solid fa-check"></i>
                Added!
              </>
            ) : (
              <>
                <i className="fa-solid fa-cart-plus"></i>
                Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
