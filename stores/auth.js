import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.token,
  },

  actions: {
    async register(username, email, password) {
      try {
        const data = await $fetch(
          "http://localhost:3001/api/auth/register",
          {
            method: "POST",
            body: {
              username,
              email,
              password,
            },
          }
        );

        await this.login(email, password);
        return data;
      } catch (error) {
        console.error("註冊錯誤:", error);
        throw new Error(error.data?.message || "註冊失敗");
      }
    },

    async login(email, password) {
      try {
        const data = await $fetch(
          "http://localhost:3001/api/auth/login",
          {
            method: "POST",
            body: {
              email,
              password,
            },
          }
        );

        this.token = data.token;
        this.user = data.user;

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        return data;
      } catch (error) {
        console.error("登入錯誤:", error);
        throw new Error(error.data?.message || "登入失敗");
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },

    init() {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (token && user) {
        this.token = token;
        this.user = JSON.parse(user);
      }
    },

    async updateProfile(data) {
      try {
        const updatedUser = await $fetch(
          "http://localhost:3001/api/auth/profile",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
            body: data,
          }
        );

        this.user = updatedUser;
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } catch (error) {
        console.error("更新失敗:", error);
        throw new Error(error.data?.message || "更新失敗");
      }
    },
  },
}); 