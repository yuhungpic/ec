<template>
<<<<<<< HEAD
  <!-- 錯誤狀態 -->
  <div v-if="error" class="text-center py-12 text-red-600">
    載入失敗，請稍後再試
  </div>

  <!-- 載入狀態 -->
  <div v-else-if="pending" class="text-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
    載入中...
  </div>

  <!-- 商品詳情 -->
  <div v-else-if="product" class="max-w-7xl mx-auto px-4 py-8">
=======
  <div v-if="product" class="max-w-7xl mx-auto px-4 py-8">
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-white p-4 rounded-lg">
        <img 
          :src="product.image" 
          :alt="product.title"
          class="w-full h-[400px] object-contain"
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
        <p class="text-2xl text-blue-600 mb-4">${{ product.price }}</p>
        <p class="text-gray-600 mb-6">{{ product.description }}</p>
        <div class="mb-6">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {{ product.category }}
          </span>
        </div>
        <button
          @click="addToCart"
          class="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
<<<<<<< HEAD
=======
  <div v-else class="text-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
    載入中...
  </div>
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const route = useRoute();
const cartStore = useCartStore();
<<<<<<< HEAD

// 使用 useFetch 獲取商品詳情
const { data: product, pending, error } = await useFetch(
  `http://localhost:3001/api/products/${route.params.id}`,
  {
    key: route.params.id, // 使用商品 ID 作為緩存 key
  }
);
=======
const product = ref(null);

onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:3001/api/products/${route.params.id}`);
    product.value = await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
  }
});
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart({
      id: product.value.id,
      name: product.value.title,
      price: product.value.price,
      image: product.value.image
    });
    alert("已加入購物車！");
  }
};
</script>
