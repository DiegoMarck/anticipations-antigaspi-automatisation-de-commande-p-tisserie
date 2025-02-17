import { useState } from 'react'
import { CalendarDaysIcon, ChartBarIcon, ShoppingBagIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

const stats = [
  { id: 1, name: 'Commandes du jour', value: '12', change: '+2.1%', changeType: 'positive' },
  { id: 2, name: 'Prévision CA', value: '2,100€', change: '+1.2%', changeType: 'positive' },
  { id: 3, name: 'Taux Gaspillage', value: '4.3%', change: '-0.4%', changeType: 'positive' },
  { id: 4, name: 'Score Prévision', value: '92%', change: '+2.3%', changeType: 'positive' },
]

const alerts = [
  {
    id: 1,
    type: 'warning',
    message: 'Stock faible pour Croissant aux amandes (5 unités)',
    timestamp: new Date(),
  },
  {
    id: 2,
    type: 'info',
    message: 'Festival local ce weekend : +20% de fréquentation prévue',
    timestamp: new Date(),
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [selectedDate] = useState(new Date())

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Tableau de bord</h1>
        <div className="text-sm text-gray-500">
          {format(selectedDate, 'EEEE d MMMM yyyy', { locale: fr })}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={classNames(
                stat.changeType === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium'
              )}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Graphique des ventes */}
        <div className="card min-h-[400px]">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Ventes vs Prévisions</h2>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                Ventes réelles
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Prévisions
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center h-[300px] text-gray-500">
            [Graphique des ventes]
          </div>
        </div>

        {/* Planning de production */}
        <div className="card min-h-[400px]">
          <h2 className="text-lg font-medium text-gray-900">Planning de production</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <CalendarDaysIcon className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Production matinale</p>
                  <p className="text-sm text-gray-500">8 commandes - 245 produits</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                En cours
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <CalendarDaysIcon className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Production après-midi</p>
                  <p className="text-sm text-gray-500">4 commandes - 120 produits</p>
                </div>
              </div>
              <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                À venir
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Alertes */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Alertes récentes</h2>
        <div className="mt-4 space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200"
            >
              <ExclamationTriangleIcon 
                className={classNames(
                  alert.type === 'warning' ? 'text-yellow-400' : 'text-blue-400',
                  'h-6 w-6 flex-shrink-0'
                )}
              />
              <div className="flex-1">
                <p className="text-sm text-gray-900">{alert.message}</p>
                <p className="text-xs text-gray-500">
                  {format(alert.timestamp, 'HH:mm', { locale: fr })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
