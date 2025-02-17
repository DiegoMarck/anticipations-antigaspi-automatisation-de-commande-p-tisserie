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
  {
    name: 'Produits populaires',
    value: '6',
    change: '-2.1%',
    changeType: 'decrease',
    href: '/products',
    icon: CakeIcon,
  },
  {
    name: 'Boutiques actives',
    value: '3',
    change: '0%',
    changeType: 'neutral',
    href: '/stores',
    icon: StoreIcon,
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

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-primary text-4xl font-semibold text-brown">Tableau de bord</h1>
        <p className="mt-2 text-secondary text-sm text-gray-600">
          Vue d'ensemble de votre activité et des performances
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            to={stat.href}
            className="card hover:transform hover:scale-105"
          >
            <div className="px-6 py-5">
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

      {/* Contenu principal */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Commandes récentes */}
        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-lg font-semibold text-brown">Commandes récentes</h2>
              <Link to="/orders" className="text-sm font-medium text-brown hover:text-gold">
                Voir tout
              </Link>
            </div>
            <div className="mt-6 flow-root">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3.5 text-left text-sm font-semibold text-brown">Commande</th>
                    <th className="py-3.5 text-left text-sm font-semibold text-brown">Client</th>
                    <th className="py-3.5 text-left text-sm font-semibold text-brown">Montant</th>
                    <th className="py-3.5 text-left text-sm font-semibold text-brown">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="whitespace-nowrap py-4 text-sm font-medium text-brown">
                        {order.orderNumber}
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm text-gray-600">
                        {order.customer}
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm text-gray-600">
                        {order.amount}
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm text-gray-600">
                        {order.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Produits populaires */}
        <div className="card">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-lg font-semibold text-brown">Produits populaires</h2>
              <Link to="/products" className="text-sm font-medium text-brown hover:text-gold">
                Voir tout
              </Link>
            </div>
            <div className="mt-6 flow-root">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3.5 text-left text-sm font-semibold text-brown">Produit</th>
                    <th className="py-3.5 text-right text-sm font-semibold text-brown">Ventes</th>
                    <th className="py-3.5 text-right text-sm font-semibold text-brown">Tendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topProducts.map((product) => (
                    <tr key={product.name}>
                      <td className="whitespace-nowrap py-4 text-sm font-medium text-brown">
                        {product.name}
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm text-right text-gray-600">
                        {product.sales}
                      </td>
                      <td className="whitespace-nowrap py-4 text-sm text-right">
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
      </div>
    </div>
  )
}
