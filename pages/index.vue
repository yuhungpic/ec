<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
<<<<<<< HEAD
    <!-- 載入狀態 -->
    <div v-if="pending" class="text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      載入中...
    </div>

    <!-- 錯誤狀態 -->
    <div v-else-if="error" class="text-center py-12 text-red-600">
      載入失敗，請稍後再試
    </div>

    <!-- 熱門商品區 -->
    <div v-else class="mb-12">
=======
    <!-- 熱門商品區 -->
    <div class="mb-12">
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
      <h2 class="text-2xl font-bold mb-6">熱門商品</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <NuxtLink :to="`/products/${product.id}`">
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-48 object-contain p-4"
            />
          </NuxtLink>
          <div class="p-4">
            <NuxtLink :to="`/products/${product.id}`">
              <h3 class="text-lg font-semibold hover:text-blue-600">
                {{ product.title }}
              </h3>
            </NuxtLink>
            <p class="text-gray-600 mt-2">${{ product.price }}</p>
            <p class="text-gray-500 mt-2 text-sm truncate">
              {{ product.description }}
            </p>
            <button
              @click="addToCart(product)"
              class="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
<<<<<<< HEAD

// 使用 useFetch 獲取商品數據
const { data: products, pending, error } = await useFetch('http://localhost:3001/api/products', {
  default: () => [],
=======
const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3001/api/products");
    products.value = await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
});

const addToCart = (product) => {
  cartStore.addToCart({
    id: product.id,
<<<<<<< HEAD
    name: product.title,
=======
    name: product.title, // 注意：API 返回的是 title 而不是 name
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
    price: product.price,
    image: product.image,
  });
  alert("已加入購物車！");
};
</script>
