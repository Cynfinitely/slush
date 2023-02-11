/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slush-img': "url('https://evermade-slush-org-2019.s3.eu-north-1.amazonaws.com/wp-content/uploads/2022/11/11152710/51717180248_5510ce6c1e_k.jpg')",
      },
      colors: {
        'slush': '#cf0',
      },
    },
  },
  plugins: [],
}


