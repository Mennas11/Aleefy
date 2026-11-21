import ProductCard from './ProductCard'
import useProducts from '../features/products/useProducts'

function Toys() {
  const { products, loading, error } = useProducts()

  const toyProducts = products.filter(
    (product) => product.category === 'Toys'
  )

  if (loading) return <p>Loading toys...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <h3>Pets Toys</h3>

      <div className="pet-toys">
        {toyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Toys