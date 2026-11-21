import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import useProducts from '../features/products/useProducts'
import './Products.css'

function Products() {
  const { products, loading, error } = useProducts()

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [saleOnly, setSaleOnly] = useState(false)

  const [priceBounds, setPriceBounds] = useState({ min: 0, max: 1000 })
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)

  const categories = ['Apparel', 'Toys', 'Shampoo']

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((product) => product.price)

      const lowest = Math.floor(Math.min(...prices))
      const highest = Math.ceil(Math.max(...prices))

      setPriceBounds({ min: lowest, max: highest })
      setMinPrice(lowest)
      setMaxPrice(highest)
    }
  }, [products])

  const categoryCounts = categories.reduce((counts, category) => {
    counts[category] = products.filter(
      (product) => product.category === category
    ).length

    return counts
  }, {})

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      !selectedCategory || product.category === selectedCategory

    const matchesPrice =
      product.price >= minPrice && product.price <= maxPrice

    const matchesSale = !saleOnly || product.onSale

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesSale
    )
  })

  const resetFilters = () => {
    setSearch('')
    setSelectedCategory('')
    setSaleOnly(false)
    setMinPrice(priceBounds.min)
    setMaxPrice(priceBounds.max)
  }

  return (
    <>
      <Navbar />

      <main className="shop-page">
      <section className="shop-header">
  <div className="shop-header-content">
    <div className="shop-breadcrumb">
      <a href="/">Home</a>
      <span>/</span>
      <span>Shop</span>
    </div>

    <span className="shop-eyebrow">MADE FOR EVERY PAW</span>

    <h1>
      Shop all <span>pet essentials.</span>
    </h1>

    <p>
      Everyday favorites, little treats, and essentials
      for your furry best friend.
    </p>
  </div>
</section>

        <section className="shop-products-section">
          <div className="shop-layout">

            {/* FILTER SIDEBAR */}
            <aside className="shop-sidebar">
              <div className="filter-heading">
                <i className="fa-solid fa-sliders"></i>
                <h3>Filters</h3>
              </div>

              {/* SEARCH */}
              <div className="filter-search">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              {/* PRICE */}
              <div className="filter-group">
                <h4>Price</h4>

                <div className="price-values">
                  <span>EGP {minPrice}</span>
                  <span>EGP {maxPrice}</span>
                </div>

                <div className="price-slider">
                  <input
                    type="range"
                    min={priceBounds.min}
                    max={priceBounds.max}
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(
                        Math.min(Number(e.target.value), maxPrice)
                      )
                    }
                  />

                  <input
                    type="range"
                    min={priceBounds.min}
                    max={priceBounds.max}
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(
                        Math.max(Number(e.target.value), minPrice)
                      )
                    }
                  />
                </div>

                <div className="price-labels">
                  <span>Min price</span>
                  <span>Max price</span>
                </div>
              </div>

              {/* CATEGORY */}
              <div className="filter-group">
                <h4>Category</h4>

                <div className="category-filters">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`category-filter ${
                        selectedCategory === category ? 'active' : ''
                      }`}
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category ? '' : category
                        )
                      }
                    >
                      <span>{category}</span>
                      <span>{categoryCounts[category]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SALE FILTER */}
              <div className="filter-group">
                <h4>Offers</h4>

                <button
                  className={`sale-filter ${
                    saleOnly ? 'active' : ''
                  }`}
                  onClick={() => setSaleOnly(!saleOnly)}
                >
                  <span className="sale-filter-checkbox">
                    {saleOnly && (
                      <i className="fa-solid fa-check"></i>
                    )}
                  </span>

                  <span>On Sale</span>
                </button>
              </div>

              <button
                className="reset-filters-button"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </aside>

            {/* PRODUCTS */}
            <div className="shop-main-content">
              <div className="shop-products-heading">
                <div>
                  <h2>Shop all products</h2>
                  <p>
                    {loading
                      ? 'Loading products...'
                      : `${filteredProducts.length} products found`}
                  </p>
                </div>
              </div>

              {loading && (
                <div className="shop-message">
                  Loading products...
                </div>
              )}

              {error && (
                <div className="shop-message shop-error">
                  {error}
                </div>
              )}

              {!loading && !error && filteredProducts.length === 0 && (
                <div className="shop-message no-products">
                  <i className="fa-solid fa-paw"></i>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters.</p>

                  <button
                    className="reset-empty-button"
                    onClick={resetFilters}
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {!loading && !error && filteredProducts.length > 0 && (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Products