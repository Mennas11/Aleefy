import { Link } from 'react-router-dom'
import './PromoBanner.css'

function PromoBanner() {
  return (
    <section className="promo-section">
      <div className="promo-content">
        <span className="promo-label">A LITTLE SOMETHING FOR THEM</span>
        <h2>Because every paw deserves a treat!</h2>
        <p>Find something special to make your furry friend's day.</p>
        <Link to="/products" className="promo-button">
          Explore the Shop <span>→</span>
        </Link>
      </div>

      <div className="promo-decoration">
        <span className="promo-paw">🐾</span>
        <span className="promo-heart">♡</span>
        <span className="promo-bone">🦴</span>
      </div>
    </section>
  )
}

export default PromoBanner