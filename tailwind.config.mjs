/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 هذه السلسلة النصية هي المسؤولة عن جعل كلاسات dark: تعمل عند وجود كلاس dark في الـ html
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};