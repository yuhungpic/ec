<<<<<<< HEAD
export const API_BASE_URL = 'http://localhost:3001';

export const fetchProducts = () => {
  return useFetch(`${API_BASE_URL}/api/products`);
};

export const fetchProduct = (id) => {
  return useFetch(`${API_BASE_URL}/api/products/${id}`, {
    key: `product-${id}`
  });
=======
export const API_BASE_URL = 'http://localhost:3001/api';

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
};

export const fetchProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  return response.json();
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
}; 