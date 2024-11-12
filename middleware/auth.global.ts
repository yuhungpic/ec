import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  // 需要登入的頁面
  const requiresAuth = ["/profile", "/checkout"];

  if (requiresAuth.includes(to.path) && !authStore.isLoggedIn) {
    return navigateTo("/login");
  }

  return;
});
