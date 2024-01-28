/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3C665A",           
          "secondary": "#bbf7d0",           
          "accent": "#FFD166",           
          "neutral": "#ffffff",           
          "base-100": "#ffffff",            
          "info": "#ccfbf1",            
          "success": "#a5f3fc",           
          "warning": "#fde68a",           
          "error": "#fca5a5",
   
      },
      },
    ],
  },
  plugins: [require("daisyui")],
};

