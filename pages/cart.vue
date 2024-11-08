<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6">購物車</h2>
    
    <div v-if="cartStore.items.length === 0" class="text-center py-8">
      <p class="text-gray-500">購物車是空的</p>
      <NuxtLink 
        to="/products" 
        class="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        去購物
      </NuxtLink>
    </div>
    
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- 購物車商品列表 -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow-md">
          <div v-for="item in cartStore.items" :key="item.id" 
               class="flex items-center p-4 border-b">
            <img :src="item.image" :alt="item.name" 
                 class="w-20 h-20 object-cover rounded">
            
            <div class="ml-4 flex-grow">
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p class="text-gray-600">${{ item.price }}</p>
              
              <div class="flex items-center mt-2">
                <button 
                  @click="updateQuantity(item.id, item.quantity - 1)"
                  class="px-2 py-1 border rounded-l"
                >
                  -
                </button>
                <input 
                  type="number" 
                  v-model="item.quantity"
                  class="w-16 text-center border-t border-b"
                  min="1"
                >
                <button 
                  @click="updateQuantity(item.id, item.quantity + 1)"
                  class="px-2 py-1 border rounded-r"
                >
                  +
                </button>
                
                <button 
                  @click="cartStore.removeFromCart(item.id)"
                  class="ml-4 text-red-500 hover:text-red-700"
                >
                  刪除
                </button>
              </div>
            </div>
            
            <div class="text-right">
              <p class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 購物車摘要 -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-md p-4">
          <h3 class="text-lg font-semibold mb-4">訂單摘要</h3>
          
          <div class="flex justify-between mb-2">
            <span>商品數量</span>
            <span>{{ cartStore.totalItems }} 件</span>
          </div>
          
          <div class="flex justify-between mb-4">
            <span>總金額</span>
            <span class="font-semibold">${{ cartStore.totalAmount.toFixed(2) }}</span>
          </div>
          
          <button 
            @click="checkout"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            結帳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const updateQuantity = (productId, quantity) => {
  cartStore.updateQuantity(productId, quantity)
}

const checkout = () => {
  alert('準備進行結帳！')
}
</script> 