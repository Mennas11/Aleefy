
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <i className="fa-solid fa-paw"></i>
              Aleefy<span>.</span>
            </Link>

            <p>
              Everything your pets need, in one place.
              <br />
              Made with love for every little paw.
            </p>

            <div className="footer-paw-decoration">🐾</div>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Shop All Products</Link>
            <Link to="/products?category=Apparel">Pet Apparel</Link>
            <Link to="/products?category=Toys">Pet Toys</Link>
            <Link to="/products?category=Shampoo">Pet Shampoo</Link>
          </div>

          <div className="footer-links">
            <h4>Discover</h4>
            <Link to="/#about">About Aleefy</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/products">Latest Offers</Link>
          </div>

          <div className="footer-social">
            <h4>Stay Connected</h4>
            <p>Follow along for more happy paws and pet essentials.</p>

            <div className="footer-social-icons">
              <span aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <span aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Aleefy. All rights reserved.</p>
          <p>Made with <span>♥</span> for pets everywhere.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
