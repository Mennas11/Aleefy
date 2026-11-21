import ProductCard from './ProductCard'
import useProducts from '../features/products/useProducts'

function Apparel() {
  const { products, loading, error } = useProducts()

  const apparelProducts = products.filter(
    (product) => product.category === 'Apparel'
  )

  if (loading) return <p>Loading apparel...</p>
  if (error) return <p>{error}</p>

  return (
    <section>
      <h3>Pets Apparel</h3>

      <div className="pet-clothing">
        {apparelProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Apparel