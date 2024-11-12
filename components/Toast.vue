<template>
  <div 
    v-if="show"
    class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
  >
    {{ message }}
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  duration: {
    type: Number,
    default: 3000
  }
})

const show = ref(false)

onMounted(() => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, props.duration)
})
</script> 