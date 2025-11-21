export const theme = {
  colors: {
    primary: {
      pink: '#ff0080',
      purple: '#7c3aed',
      gradient: 'linear-gradient(135deg, #ff0080, #7c3aed)',
    },
    background: {
      dark: '#0a0a0a',
      darkGradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      card: 'rgba(255, 255, 255, 0.03)',
      cardHover: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      muted: '#666666',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(255, 0, 128, 0.5)',
    },
  },
  fonts: {
    heading: "'Space Grotesk', sans-serif",
    body: "'Oswald', sans-serif",
    default: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  spacing: {
    xs: '8px',
    sm: '15px',
    md: '25px',
    lg: '40px',
    xl: '60px',
  },
  borderRadius: {
    sm: '8px',
    md: '15px',
    lg: '20px',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px',
  },
};

export type Theme = typeof theme;
