import React from 'react';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 24 }) => {
  return (
    <img
      src="/images/AngelinaLogo1.png"
      alt="Angelina Paris"
      style={{
        height: `${size}px`,
        width: 'auto',
        display: 'block',
        maxWidth: '100%',
      }}
    />
  );
};

export default Logo;
