import { Link } from 'react-router-dom'
import {
  ShoppingBagIcon,
  ChartIcon,
  StoreIcon,
  CakeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@/components/icons'
import '@/styles/theme.css'

const stats = [
  {
    name: 'Commandes du jour',
    value: '24',
    change: '+12%',
    changeType: 'increase',
    href: '/orders',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Chiffre d\'affaires',
    value: '1 250€',
    change: '+8.2%',
    changeType: 'increase',
    href: '/analytics',
    icon: ChartIcon,
  },
]

const recentOrders = [
  {
    id: 1,
    orderNumber: 'CMD-2024-001',
    customer: 'Boutique Centre',
    amount: '350€',
    status: 'En cours',
  },
  {
    id: 2,
    orderNumber: 'CMD-2024-002',
    customer: 'Boutique Rivoli',
    amount: '520€',
    status: 'Terminé',
  },
  {
    id: 3,
    orderNumber: 'CMD-2024-003',
    customer: 'Boutique Tuileries',
    amount: '280€',
    status: 'En attente',
  },
]

const topProducts = [
  { name: 'Croissant', sales: 450, trend: '+12%' },
  { name: 'Pain au chocolat', sales: 380, trend: '+8%' },
  { name: 'Baguette tradition', sales: 320, trend: '+5%' },
  { name: 'Pain aux céréales', sales: 280, trend: '-2%' },
]

const activeStores = [
  { name: 'Boutique Centre', revenue: '5 250€', orders: 42, trend: '+15%' },
  { name: 'Boutique Rivoli', revenue: '4 180€', orders: 36, trend: '+8%' },
  { name: 'Boutique Tuileries', revenue: '3 720€', orders: 28, trend: '+3%' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-4xl font-semibold text-brown">Tableau de bord</h1>
        <p className="mt-2 text-sm text-gray-600">
          Vue d'ensemble de votre activité et des performances
        </p>
      </div>

      {/* Vue d'ensemble */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-brown">Vue d'ensemble</h2>
        
        {/* Première ligne: Commandes du jour et Chiffre d'affaires */}
        <div className="dashboard-grid">
          {stats.map((stat) => (
            <Link
              key={stat.name}
              to={stat.href}
              className="dashboard-card hover:transform hover:scale-105 transition-transform"
            >
              <div className="px-4 py-4">
                <dt>
                  <div className="absolute rounded-md bg-beige p-2">
                    <stat.icon size={16} color="var(--color-brown)" />
                  </div>
                  <p className="ml-12 truncate text-sm font-medium text-gray-600">{stat.name}</p>
                </dt>
                <dd className="ml-12 flex items-baseline">
                  <p className="text-xl font-semibold text-brown">{stat.value}</p>
                  <p className={`ml-2 flex items-baseline text-xs font-semibold ${
                    stat.changeType === 'increase' ? 'text-green-600' :
                    stat.changeType === 'decrease' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {stat.changeType === 'increase' ? (
                      <ArrowUpIcon size={12} color="currentColor" />
                    ) : stat.changeType === 'decrease' ? (
                      <ArrowDownIcon size={12} color="currentColor" />
                    ) : null}
                    <span className="sr-only">
                      {stat.changeType === 'increase' ? 'Augmenté de' : 'Diminué de'}
                    </span>
                    {stat.change}
                  </p>
                </dd>
              </div>
            </Link>
          ))}
        </div>

        {/* Deuxième ligne: Produits les plus vendus et Boutiques actives */}
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="dashboard-title">Produits les plus vendus</h2>
                <Link to="/products" className="text-sm font-medium text-brown hover:text-gold">
                  Voir tout
                </Link>
              </div>
              <div className="mt-4 flow-root">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 text-left text-sm font-semibold text-brown">Produit</th>
                      <th className="py-3 text-right text-sm font-semibold text-brown">Ventes</th>
                      <th className="py-3 text-right text-sm font-semibold text-brown">Tendance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {topProducts.map((product) => (
                      <tr key={product.name}>
                        <td className="whitespace-nowrap py-3 text-sm font-medium text-brown">
                          {product.name}
                        </td>
                        <td className="whitespace-nowrap py-3 text-sm text-right text-gray-600">
                          {product.sales}
                        </td>
                        <td className="whitespace-nowrap py-3 text-sm text-right">
                          <span className={`font-medium ${
                            product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {product.trend}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="dashboard-title">Boutiques actives</h2>
                <Link to="/stores" className="text-sm font-medium text-brown hover:text-gold">
                  Voir tout
                </Link>
              </div>
              <div className="mt-4 flow-root">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-3 text-left text-sm font-semibold text-brown">Boutique</th>
                      <th className="py-3 text-right text-sm font-semibold text-brown">CA</th>
                      <th className="py-3 text-right text-sm font-semibold text-brown">Commandes</th>
                      <th className="py-3 text-right text-sm font-semibold text-brown">Tendance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {activeStores.map((store) => (
                      <tr key={store.name}>
                        <td className="whitespace-nowrap py-3 text-sm font-medium text-brown">
                          {store.name}
                        </td>
                        <td className="whitespace-nowrap py-3 text-sm text-right text-gray-600">
                          {store.revenue}
                        </td>
                        <td className="whitespace-nowrap py-3 text-sm text-right text-gray-600">
                          {store.orders}
                        </td>
                        <td className="whitespace-nowrap py-3 text-sm text-right">
                          <span className={`font-medium ${
                            store.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {store.trend}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commandes récentes */}
      <div className="dashboard-card">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="dashboard-title">Commandes récentes</h2>
            <Link to="/orders" className="text-sm font-medium text-brown hover:text-gold">
              Voir tout
            </Link>
          </div>
          <div className="mt-4 flow-root">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-3 text-left text-sm font-semibold text-brown">Commande</th>
                  <th className="py-3 text-left text-sm font-semibold text-brown">Client</th>
                  <th className="py-3 text-left text-sm font-semibold text-brown">Montant</th>
                  <th className="py-3 text-left text-sm font-semibold text-brown">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="whitespace-nowrap py-3 text-sm font-medium text-brown">
                      {order.orderNumber}
                    </td>
                    <td className="whitespace-nowrap py-3 text-sm text-gray-600">
                      {order.customer}
                    </td>
                    <td className="whitespace-nowrap py-3 text-sm text-gray-600">
                      {order.amount}
                    </td>
                    <td className="whitespace-nowrap py-3 text-sm text-gray-600">
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
