export const API_BASE_URL = 'http://localhost:3001';

export const fetchProducts = () => {
  return useFetch(`${API_BASE_URL}/api/products`);
};

export const fetchProduct = (id) => {
  return useFetch(`${API_BASE_URL}/api/products/${id}`, {
    key: `product-${id}`
  });
}; 