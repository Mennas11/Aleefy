import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Stats from '../components/Stats'
import PromoBanner from '../components/PromoBanner'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Stats />
      <PromoBanner />
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default Home