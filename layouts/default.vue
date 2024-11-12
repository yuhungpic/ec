<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar />
    <main class="flex-grow bg-gray-100">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
// 如果需要，顯式引入組件
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script> 