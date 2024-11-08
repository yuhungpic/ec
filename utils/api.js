export const API_BASE_URL = 'http://localhost:3001/api';

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return response.json();
};

export const fetchProduct = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  return response.json();
}; 