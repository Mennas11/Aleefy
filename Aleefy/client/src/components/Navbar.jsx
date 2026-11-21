import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const cartItems = useSelector((state) => state.cart.items)

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const closeMenu = () => setMenuOpen(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!search.trim()) return
    navigate(`/products?search=${encodeURIComponent(search.trim())}`)
    setSearch('')
    closeMenu()
  }

  return (
    <header className="site-header">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-paw">🐾</span>
          <span>Aleefy<span className="logo-dot">.</span></span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`navbar-menu ${menuOpen ? 'menu-open' : ''}`}>
          <div className="navbar-links">
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/products" onClick={closeMenu}>Shop</NavLink>
            <a href="/#about" onClick={closeMenu}>About</a>
          </div>

          <form className="navbar-search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search for pet products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
            <button type="submit" aria-label="Submit search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div className="navbar-actions">
            <Link to="/login" className="navbar-login" onClick={closeMenu}>
              Login
            </Link>

<Link to="/cart" className="navbar-cart" onClick={closeMenu}>
  <span className="navbar-cart-label">Cart</span>

  {cartCount > 0 && (
    <span className="cart-count-badge">
      {cartCount}
    </span>
  )}
</Link>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar