import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#1B3C53',
        'navy-medium': '#234C6A',
        'steel-blue': '#456882',
        'grey-light': '#E3E3E3',
      },
    },
  },
  plugins: [],
}
export default config
