<template>
  <div class="text-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
    <p>{{ message || '載入中...' }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: String
})
</script> 