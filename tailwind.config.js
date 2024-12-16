/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f5',  // Lightest shade for high contrast elements
          100: '#e6e6e6', // Light text
          200: '#cccccc', // Muted text
          300: '#999999', // Secondary text
          400: '#666666', // Subtle borders
          500: '#4d4d4d', // Lighter panels
          600: '#2d2d2d', // Main background
          700: '#262626', // Sidebar/darker panels
          800: '#1f1f1f', // Deep panels
          900: '#171717', // Dropdowns/modals
          950: '#0a0a0a', // Deepest shade
        },
        accent: {
          400: '#2196f3', // Primary blue (buttons, selections)
          500: '#1976d2', // Darker blue for hover states
          600: '#1565c0', // Pressed states
        },
        success: {
          500: '#2ecc71', // Success states
        },
        error: {
          500: '#e74c3c', // Error states
        },
        warning: {
          500: '#f1c40f', // Warning indicators
        },
        foreground: '#ffffff', // Pure white text
      },
      textColor: {
        primary: '#ffffff',    // Default white text
        secondary: '#cccccc',  // Muted text
        accent: '#2196f3',     // Interactive text
      },
      backgroundColor: {
        base: '2D2D2D',      // Main app background
        panel: '#262626',      // Sidebar/panels
        highlight: '#4d4d4d',  // Hover states
      },
    },
  },
  plugins: [],
};
