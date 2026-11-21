
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { getProductById } from '../features/products/productsApi'
import productImages from '../features/products/productImages'
import { addToCart } from '../features/cart/cartSlice'

import './ProductDetails.css'

function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)

        const data = await getProductById(id)

        setProduct({
          ...data,
          id: data._id,
          image: productImages[data.image] || data.image,
        })
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (!product) return

    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product))
    }

    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 1500)
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="product-details-message">
          <p>Finding something special for your furry friend...</p>
        </div>
        <Footer />
      </>
    )
  }

  if (error || !product) {
    return (
      <>
        <Navbar />
        <div className="product-details-message">
          <h2>Oops! We couldn't find this product.</h2>
          <Link to="/products" className="details-back-button">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="product-details-page">
        <div className="product-details-container">

          <div className="product-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <section className="product-details">

            <div className="product-details-image">
              {product.onSale && (
                <span className="details-sale-badge">Sale</span>
              )}

              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <span className="details-category">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <p className="details-description">
                {product.description}
              </p>

              <div className="details-price">
                <span>EGP {product.price.toLocaleString('en-EG')}</span>
              </div>

              <div className="details-divider"></div>

              <p className="details-availability">
                <span className="availability-dot"></span>
                Available for your furry friend
              </p>

              <div className="details-purchase">
                <div className="details-quantity">
                  <button
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>{quantity}</span>

                  <button
                    onClick={() => setQuantity((current) => current + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  className={`details-add-button ${added ? 'is-added' : ''}`}
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
                      Add to Cart
                    </>
                  )}
                </button>
              </div>

              <div className="details-extra">
                <span>🐾</span>
                A little something special for every paw.
              </div>

              <Link to="/products" className="details-continue">
                ← Continue Shopping
              </Link>
            </div>

          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ProductDetails
