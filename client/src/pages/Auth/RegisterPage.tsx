import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/useAuth';
import './AuthPages.css';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await register(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/" className="logo-link">
          <img src="/images/AngelinaLogo1.png" alt="Angelina Paris" className="auth-logo" />
        </Link>

        <h1>Inscription</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-button">
            S'inscrire
          </button>
        </form>

        <p className="auth-footer">
          Déjà inscrit ?{' '}
          <Link to="/login" className="auth-link">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
