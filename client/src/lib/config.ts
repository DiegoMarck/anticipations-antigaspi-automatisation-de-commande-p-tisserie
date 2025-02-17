export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const CONFIG = {
  api: {
    baseUrl: API_URL,
    endpoints: {
      login: '/login',
      users: '/users',
      stores: '/stores',
      products: '/products',
      sales: '/sales',
      forecasts: '/forecasts',
      orders: '/orders',
      productions: '/productions',
      notifications: '/notifications',
    },
  },
} as const;
