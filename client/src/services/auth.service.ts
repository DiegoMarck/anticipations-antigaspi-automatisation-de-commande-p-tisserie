import { api } from '../lib/api';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    nom: string;
    role: string;
  };
}

interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  async login(data: LoginData): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/login', data);
    return response.data;
  },

  async logout(): Promise<void> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },

  getToken(): string | null {
    return localStorage.getItem('token');
  },

  getUser(): any | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};
