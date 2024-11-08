<template>
  <footer class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">關於我們</h3>
          <p class="text-gray-400">
            MyStore 是您信賴的線上購物平台，提供優質商品與服務。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">快速連結</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/products" class="text-gray-400 hover:text-white transition-colors">
                商品列表
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cart" class="text-gray-400 hover:text-white transition-colors">
                購物車
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">聯絡資訊</h3>
          <ul class="space-y-2 text-gray-400">
            <li>電話：(02) 1234-5678</li>
            <li>信箱：contact@mystore.com</li>
            <li>地址：台北市信義區信義路100號</li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-4">訂閱電子報</h3>
          <div class="flex">
            <input
              type="email"
              placeholder="請輸入您的 Email"
              class="px-4 py-2 text-gray-800 rounded-l focus:outline-none"
            />
            <button class="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600 transition-colors">
              訂閱
            </button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} MyStore. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template> 