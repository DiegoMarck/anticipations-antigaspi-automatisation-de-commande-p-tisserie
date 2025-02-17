import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <Logo size="large" className="home-logo" />
        <h2 className="home-subtitle">Portail Professionnel</h2>
        <p className="home-description">
          Bienvenue sur le portail professionnel d'Angelina Paris.
          Gérez vos commandes et suivez vos statistiques en temps réel.
        </p>
        <button 
          className="home-login-button"
          onClick={() => navigate('/login')}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default HomePage;
