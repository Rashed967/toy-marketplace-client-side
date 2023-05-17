/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f24a30",
        
"secondary": "#b5c2f2",
        
"accent": "#e8d937",
        
"neutral": "#21282C",
        
"base-100": "#4C2555",
        
"info": "#7ABBE1",
        
"success": "#21CAB0",
        
"warning": "#9C6007",
        
"error": "#EA2E67",
        },
      },
    ],
  },
}

