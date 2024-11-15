<template>
<<<<<<< HEAD
  <div 
    v-if="show"
    class="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
  >
    {{ message }}
  </div>
=======
  <Teleport to="body">
    <div v-if="isVisible"
         class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
         :class="{ 'translate-x-0 opacity-100': isVisible, 'translate-x-full opacity-0': !isVisible }">
      {{ message }}
    </div>
  </Teleport>
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
</template>

<script setup>
const props = defineProps({
<<<<<<< HEAD
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
=======
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const isVisible = ref(true)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
>>>>>>> 0cdc5c90974df5c8a291b9c52094b9d22b006507
  }, props.duration)
})
</script> 