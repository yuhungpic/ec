import { defineStore } from 'pinia'

interface User {
  id: number
  username: string
  email: string
}

interface AuthState {
  user: User | null
  token: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null
  }),

  getters: {
    isLoggedIn: (state) => !!state.token
  },

  actions: {
    async register(username: string, email: string, password: string) {
      try {
        const response = await fetch('http://localhost:3001/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            username,
            email,
            password
          })
        });

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Server response:', await response.text());
          throw new Error('伺服器返回了錯誤的數據格式');
        }

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || '註冊失敗');
        }

        await this.login(email, password);
        
        return data;
      } catch (error) {
        console.error('註冊錯誤:', error);
        throw error;
      }
    },

    async login(email: string, password: string) {
      try {
        const response = await fetch('http://localhost:3001/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        });

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Server response:', await response.text());
          throw new Error('伺服器返回了錯誤的數據格式');
        }

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || '登入失敗');
        }

        this.token = data.token;
        this.user = data.user;
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        return data;
      } catch (error) {
        console.error('登入錯誤:', error);
        throw error;
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },

    // 初始化時檢查 localStorage
    init() {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')

      if (token && user) {
        this.token = token
        this.user = JSON.parse(user)
      }
    },

    async updateProfile(data: { username?: string; password?: string }) {
      try {
        const response = await fetch('http://localhost:3001/api/auth/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          },
          body: JSON.stringify(data)
        })

        if (!response.ok) {
          throw new Error('更新失敗')
        }

        const updatedUser = await response.json()
        this.user = updatedUser
        localStorage.setItem('user', JSON.stringify(updatedUser))
      } catch (error) {
        throw error
      }
    }
  }
}) 