
import { Link } from 'react-router-dom'
import './Hero.css'

import heroImage from '../assets/Images/victor-g-N04FIfHhv_k-unsplash.jpg'
import petImage from '../assets/Images/flouffy-g2FtlFrc164-unsplash.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">
            🐾 Made for Pet Lovers ❤️
          </span>

          <h1>
            Small paws.
            <br />
            <span>Big happiness.</span>
          </h1>

          <p>
            Discover the best pet products
            <br className="desktop-break" />
            for your furry friends.
          </p>

          <Link to="/products" className="hero-button">
            Shop Now <span>→</span>
          </Link>
        </div>

        <div className="hero-visual">
          <div className="hero-image-main">
            <img src={heroImage} alt="Happy furry friend" />
          </div>

          <div className="hero-image-small">
            <img src={petImage} alt="Another adorable pet" />
          </div>

          <span className="hero-doodle hero-heart">♡</span>
          <span className="hero-doodle hero-paw">🐾</span>
          <span className="hero-doodle hero-spark">〃</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
