export const Colors = {
  bg: '#09090f',
  bgCard: '#0f0f1a',
  bgCardAlt: '#12121f',
  border: '#1e1e35',
  borderGlow: '#6c3bff',

  primary: '#7c4dff',
  primaryLight: '#9d6fff',
  primaryDark: '#5c2de5',
  gradientPrimary: ['#7c4dff', '#3b82f6'] as const,

  accent: '#3b82f6',
  accentGlow: '#60a5fa',

  green: '#00e676',
  greenDark: '#00c853',
  greenGlow: '#00e67680',

  orange: '#ff6d00',
  orangeGlow: '#ff6d0060',

  pink: '#e91e8c',
  pinkGlow: '#e91e8c60',

  teal: '#00bcd4',
  tealGlow: '#00bcd460',

  text: '#ffffff',
  textSecondary: '#a0a0c0',
  textMuted: '#606080',

  white: '#ffffff',
  black: '#000000',
};

export const Fonts = {
  bold: 'System',
  semibold: 'System',
  regular: 'System',
};

export const Radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  full: 9999,
};

export const Shadow = {
  glow: (color: string) => ({
    shadowColor: color,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 10,
  }),
};
