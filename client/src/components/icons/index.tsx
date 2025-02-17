import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

export const ShoppingBagIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6h18" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StoreIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M3 21h18M3 7v1a2 2 0 002 2h14a2 2 0 002-2V7M3 7l2-4h14l2 4H3z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 21V10M19 21V10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CakeIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8M4 21h16M4 13h16M12 8V3M8 8v-2M16 8v-2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
