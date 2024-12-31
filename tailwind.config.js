/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all source files in your project
  ],
  theme: {
    extend: {
      // Custom Keyframes
      keyframes: {
        // Background Gradient Animation
        'background-gradient': {
          '0%': {
            backgroundImage: 'linear-gradient(40deg, #e4ddea 40%, #9fd2f4, #f7ad92, #d491ae, #9082f1)',
          },
          '50%': {
            backgroundImage: 'linear-gradient(40deg, #9fd2f4, #f7ad92, #d491ae, #9082f1, #e4ddea)',
          },
          '100%': {
            backgroundImage: 'linear-gradient(40deg, #e4ddea 40%, #9fd2f4, #f7ad92, #d491ae, #9082f1)',
          },
        },
        // Floating Effect
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      // Custom Animations
      animation: {
        'background-gradient': 'background-gradient 10s ease-in-out infinite', // Smooth gradient transition
        float: 'float 3s ease-in-out infinite', // Gentle floating effect
        'spin-slow': 'spin 8s linear infinite', // Slow spinning
        bounce: 'bounce 2s infinite', // Default bouncing effect
        gradientMove: 'gradientMove 5s ease infinite', // Animated gradient movement with a 5-second duration
        textFocusIn: 'text-focus-in 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        fadeIn: 'fade-in 2s ease-in',
        slideInTop: 'slide-in-top 0.5s ease-out',
        gradient: 'gradientShift 5s ease infinite',

      },
      fontFamily: {
        Playfair: ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
};
