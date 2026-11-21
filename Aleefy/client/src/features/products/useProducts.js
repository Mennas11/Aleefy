import { useEffect, useState } from 'react'
import { getProducts } from './productsApi'
import productImages from './productImages'

function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()

        const formattedProducts = data.map((product) => ({
          ...product,
          id: product._id,
          image: productImages[product.image] || product.image,
        }))

        setProducts(formattedProducts)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}

export default useProducts