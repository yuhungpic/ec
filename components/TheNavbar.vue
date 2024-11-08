<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- 左側 Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            MyStore
          </NuxtLink>
        </div>

        <!-- 中間導航連結 -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">首頁</NuxtLink>
          <NuxtLink to="/products" class="text-gray-600 hover:text-gray-900">商品列表</NuxtLink>
        </div>

        <!-- 右側購物車和會員區 -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/cart" class="text-gray-600 hover:text-gray-900 relative">
            <!-- 購物車圖標 -->
            <svg xmlns="http://www.w3.org/2000/svg" 
                 class="h-6 w-6" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor">
              <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            
            <!-- 購物車數量標記 -->
            <span v-if="cartStore.totalItems > 0"
                  class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {{ cartStore.totalItems }}
            </span>
          </NuxtLink>

          <!-- 未登入狀態 -->
          <template v-if="!isLoggedIn">
            <NuxtLink to="/login" 
                      class="text-gray-600 hover:text-gray-900">
              登入
            </NuxtLink>
            <NuxtLink to="/register"
                      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              註冊
            </NuxtLink>
          </template>

          <!-- 已登入狀態 -->
          <template v-else>
            <div class="relative" @click="isMenuOpen = !isMenuOpen">
              <button class="flex items-center space-x-1">
                <span>{{ user.username }}</span>
                <i class="fas fa-chevron-down"></i>
              </button>
              
              <!-- 下拉選單 -->
              <div v-if="isMenuOpen" 
                   class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <NuxtLink to="/profile" 
                          class="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  個人資料
                </NuxtLink>
                <button @click="logout" 
                        class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  登出
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'

const cartStore = useCartStore()
const authStore = useAuthStore()
const isMenuOpen = ref(false)

const isLoggedIn = computed(() => authStore.isLoggedIn)
const user = computed(() => authStore.user)

const logout = () => {
  authStore.logout()
  navigateTo('/login')
}
</script> 