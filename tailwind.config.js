/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../app/pages/*.{js,ts,jsx,tsx,mdx}',
    '../app/components/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
  
  eslint: {
    ignoreDuringBuilds: true,
  },
}
