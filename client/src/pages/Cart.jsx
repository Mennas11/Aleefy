import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from '../features/cart/cartSlice'

import './Cart.css'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  useEffect(() => {
  window.scrollTo(0, 0)
    }, [])

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="cart-container">

          <div className="cart-heading">
            <div>
              <span className="cart-eyebrow">YOUR LITTLE PAW SHOP</span>
              <h1>Shopping Cart</h1>
              <p>Everything your furry friend picked out.</p>
            </div>

            {cartItems.length > 0 && (
              <span className="cart-items-count">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🐾</div>
              <h2>Your cart is feeling a little empty!</h2>
              <p>Let's find something special for your furry friend.</p>

              <Link to="/products" className="cart-shop-button">
                Explore Products <span>→</span>
              </Link>
            </div>
          ) : (
            <div className="cart-layout">

              <div className="cart-items-section">
                <div className="cart-items-header">
                  <h2>Your Items</h2>

                  <button
                    className="cart-clear-button"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear cart
                  </button>
                </div>

                <div className="cart-items">
                  {cartItems.map((item) => (
                    <article className="cart-item" key={item.id}>

                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>

                      <div className="cart-item-info">
                        <span className="cart-item-category">
                          {item.category}
                        </span>

                        <h3>{item.name}</h3>

                        <p className="cart-item-price">
                          EGP {item.price.toLocaleString('en-EG')}
                        </p>

                        <div className="cart-quantity">
                          <button
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() => dispatch(increaseQuantity(item.id))}
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-right">
                        <p className="cart-item-total">
                          EGP {(item.price * item.quantity).toLocaleString('en-EG')}
                        </p>

                        <button
                          className="cart-remove-button"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <i className="fa-regular fa-trash-can"></i>
                          Remove
                        </button>
                      </div>

                    </article>
                  ))}
                </div>

                <Link to="/products" className="cart-back-to-shop">
                  <span>←</span> Continue shopping
                </Link>
              </div>

              <aside className="cart-summary">
                <h2>Order Summary</h2>

                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span>EGP {totalPrice.toLocaleString('en-EG')}</span>
                </div>

                <div className="cart-summary-row">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="cart-summary-divider"></div>

                <div className="cart-summary-total">
                  <span>Total</span>
                  <strong>EGP {totalPrice.toLocaleString('en-EG')}</strong>
                </div>

                <button className="cart-checkout-button" disabled>
                  Proceed to Checkout <span>→</span>
                </button>

                <p className="cart-checkout-note">
                  Checkout will be available soon 🐾
                </p>

                <div className="cart-summary-footer">
                  <span>♡</span>
                  Made with love for your pets
                </div>
              </aside>

            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Cart
