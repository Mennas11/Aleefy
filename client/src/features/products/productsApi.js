const API_URL = 'http://127.0.0.1:5000/api/products'
// Get all products
export const getProducts = async () => {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return response.json()
}

// Get one product by MongoDB ID
export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)

  if (!response.ok) {
    throw new Error('Product not found')
  }

  return response.json()
}