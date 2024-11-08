<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold mb-6">個人資料</h2>
      
      <form @submit.prevent="updateProfile" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">使用者名稱</label>
          <input 
            type="text" 
            v-model="profile.username"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">電子郵件</label>
          <input 
            type="email" 
            v-model="profile.email"
            disabled
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">新密碼</label>
          <input 
            type="password" 
            v-model="newPassword"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
          <p class="mt-1 text-sm text-gray-500">如不修改密碼請留空</p>
        </div>

        <div class="flex justify-end">
          <button 
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            儲存變更
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const profile = ref({
  username: authStore.user?.username,
  email: authStore.user?.email
})
const newPassword = ref('')

const updateProfile = async () => {
  try {
    // 實作更新個人資料的邏輯
    await authStore.updateProfile({
      username: profile.value.username,
      password: newPassword.value || undefined
    })
    alert('個人資料已更新')
  } catch (error) {
    alert(error.message)
  }
}
</script> 