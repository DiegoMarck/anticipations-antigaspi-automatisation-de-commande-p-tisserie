import { Fragment, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Logo from '@/components/Logo'
import './MainLayout.css'

export default function MainLayout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Barre de navigation supérieure */}
      <header className="nav-header">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/dashboard" className="nav-logo-container">
            <Logo size={32} />
          </Link>

          {/* Menu burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-button"
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-[#4A2B0F] mb-1.5"></span>
            <span className="w-6 h-0.5 bg-[#4A2B0F] mb-1.5"></span>
            <span className="w-6 h-0.5 bg-[#4A2B0F]"></span>
          </button>

          {/* Navigation desktop */}
          <nav className="desktop-nav hidden md:block">
            <Link
              to="/dashboard"
              className={`block text-sm ${location.pathname === '/dashboard' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            >
              Tableau de bord
            </Link>
            <Link
              to="/orders"
              className={`block text-sm ${location.pathname === '/orders' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            >
              Commandes
            </Link>
            <Link
              to="/analytics"
              className={`block text-sm ${location.pathname === '/analytics' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            >
              Analytics
            </Link>
            <Link
              to="/stores"
              className={`block text-sm ${location.pathname === '/stores' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            >
              Boutiques
            </Link>
            <Link
              to="/products"
              className={`block text-sm ${location.pathname === '/products' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            >
              Produits
            </Link>
          </nav>

          {/* Mon compte */}
          <button className="account-button text-[#4A2B0F] text-sm font-medium">
            Mon compte
          </button>
        </div>
      </header>

      {/* Menu latéral */}
      <aside 
        className={`side-menu ${menuOpen ? 'open' : ''} fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-200 ease-in-out z-40 pt-16 border-r border-gray-200 md:hidden`}
      >
        <nav className="px-6 py-4 space-y-4">
          <Link
            to="/dashboard"
            className={`block text-sm ${location.pathname === '/dashboard' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            onClick={() => setMenuOpen(false)}
          >
            Tableau de bord
          </Link>
          <Link
            to="/orders"
            className={`block text-sm ${location.pathname === '/orders' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            onClick={() => setMenuOpen(false)}
          >
            Commandes
          </Link>
          <Link
            to="/analytics"
            className={`block text-sm ${location.pathname === '/analytics' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            onClick={() => setMenuOpen(false)}
          >
            Analytics
          </Link>
          <Link
            to="/stores"
            className={`block text-sm ${location.pathname === '/stores' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            onClick={() => setMenuOpen(false)}
          >
            Boutiques
          </Link>
          <Link
            to="/products"
            className={`block text-sm ${location.pathname === '/products' ? 'active text-[#4A2B0F] font-medium' : 'text-gray-600'}`}
            onClick={() => setMenuOpen(false)}
          >
            Produits
          </Link>
        </nav>
      </aside>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="overlay fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Contenu principal */}
      <main className="main-content mt-16 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
