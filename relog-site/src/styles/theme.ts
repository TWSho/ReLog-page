export const theme = {
  colors: {
    primary: '#FF75B2', // アクセントカラー
    white: '#FFFFFF',
    black: '#000000',
    gray: '#F5F5F5',
  },
  fonts: {
    primary: "'Noto Sans JP', 'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
  }
};

export type Theme = typeof theme;
