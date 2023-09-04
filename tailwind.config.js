/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   // './pages/**/*.{js,ts,jsx,tsx,mdx}',
  //   './components/**/*.{js,ts,jsx,tsx,mdx}',
  //   './app/**/*.{js,ts,jsx,tsx,mdx}',
  //   // './app/[lang]/**/*.{js,ts,jsx,tsx,mdx}'
  //   './app/**/[^/]*.{mdx,md}',
  // ],
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/[lang]/**/*.{js,ts,jsx,tsx,mdx}', // include files inside [lang]
    './app/**/[^/]*.{mdx,md}',
  ],


darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto-mono)'],
        cairo:['var(--font-cairo)'],
        lateef:['var(--font-lateef)'],
        tajawal:['var(--font-tajawal)']


      }},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },

  },
  plugins: [require('@tailwindcss/typography'),require('@tailwindcss/aspect-ratio')],
}
