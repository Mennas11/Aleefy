import ProductCard from './ProductCard'
import useProducts from '../features/products/useProducts'

function Shampoo() {
  const { products, loading, error } = useProducts()

  const shampooProducts = products.filter(
    (product) => product.category === 'Shampoo'
  )

  if (loading) return <p>Loading shampoo...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <h3>Pets Shampoo</h3>

      <div className="pet-shampoo">
        {shampooProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Shampoo