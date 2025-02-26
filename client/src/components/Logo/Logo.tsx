import React from 'react';
import './Logo.css';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'medium' }) => {
  return (
    <div className={`logo logo--${size} ${className}`} style={{ width: '50%' }}>
      <h1 className="logo__text">
        <span className="logo__text--main">Angelina</span>
        <span className="logo__text--sub">Paris</span>
      </h1>
    </div>
  );
};

export default Logo;
