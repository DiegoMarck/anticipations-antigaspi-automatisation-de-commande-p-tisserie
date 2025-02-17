import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoginPage from './pages/Auth/LoginPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import OrdersPage from './pages/Orders/OrdersPage'
import AnalyticsPage from './pages/Analytics/AnalyticsPage'
import StoresPage from './pages/Stores/StoresPage'
import ProductsPage from './pages/Products/ProductsPage'
import EventsPage from './pages/Events/EventsPage'
import ChallengesPage from './pages/Challenges/ChallengesPage'
import TeamPage from './pages/Team/TeamPage'
import AuthGuard from './components/Auth/AuthGuard'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true, 
        element: <DashboardPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/orders',
        element: <OrdersPage />,
      },
      {
        path: '/analytics',
        element: <AnalyticsPage />,
      },
      {
        path: '/stores',
        element: <StoresPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
      },
      {
        path: '/challenges',
        element: <ChallengesPage />,
      },
      {
        path: '/team',
        element: <TeamPage />,
      },
    ],
  },
])
