/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
    gap: {
      "4p": "4%",
    },
  },
  screens: {
    'vs': '450px',   
    'sm': '640px',   
    'md': '768px',  
    'lg': '1024px',  
    'xl': '1280px',  
    '2xl': '1536px', 
    '450px': '450px', 
  },
  plugins: [require("tailwindcss-animate")],
};
