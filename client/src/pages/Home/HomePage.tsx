import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '@/components/Logo';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'staff'
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'un utilisateur test
    if (loginData.email === 'staff@angelina-paris.fr' && loginData.password === 'angelina123') {
      navigate('/dashboard');
    } else {
      alert('Identifiants incorrects');
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici nous simulerons l'inscription
    console.log('Inscription:', registerData);
    alert('Demande d\'inscription envoyée avec succès !');
  };

  return (
    <div className="home-page">
      {/* Header avec Logo et Navigation */}
      <header className="home-header">
       <div className="w-6/12">
        <img src="/images/AngelinaLogo1.png" alt="Angelina Paris" className="home-logo" style={{width: '200%', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}/>
       </div>
        <nav className="home-nav">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            À propos
          </button>
          <button onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
            Inscription
          </button>
          <button onClick={() => document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' })}>
            Connexion
          </button>
        </nav>
      </header>

      {/* Section À propos */}
      <section id="about" className="home-section">
        <h2>Notre Histoire</h2>
        <div className="about-content">
          <p>
            Depuis 1903, Angelina incarne l'excellence de la pâtisserie française. Notre maison,
            fondée par l'autrichien Antoine Rumpelmayer, est devenue une institution parisienne,
            célèbre pour son chocolat chaud et son Mont-Blanc.
          </p>
          <p>
            Aujourd'hui, nous innovons avec notre application professionnelle anti-gaspillage.
            Cette plateforme permet à notre équipe de gérer efficacement les commandes,
            d'anticiper la production et de minimiser les pertes, tout en maintenant
            l'excellence qui fait notre réputation.
          </p>
        </div>
      </section>

      {/* Section Inscription */}
      <section id="register" className="home-section">
        <h2>Rejoindre l'équipe</h2>
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Prénom"
              value={registerData.firstName}
              onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nom"
              value={registerData.lastName}
              onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email professionnel"
              value={registerData.email}
              onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Mot de passe"
              value={registerData.password}
              onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="submit-button">Demander l'accès</button>
        </form>
      </section>

      {/* Section Connexion */}
      <section id="login" className="home-section">
        <h2>Connexion</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Mot de passe"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="submit-button">Se connecter</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <p>Angelina Paris - depuis 1903</p>
          <p>226 rue de Rivoli, 75001 Paris</p>
          <p> {new Date().getFullYear()} Tous droits réservés</p>
        </div>
        
        <div className="footer-social">
          <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
        </div>

        <div className="footer-legal">
          <a href="#">Mentions légales</a>
          <a href="#">Conditions générales d'utilisations</a>
          <a href="#">Politique de confidentialité</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
