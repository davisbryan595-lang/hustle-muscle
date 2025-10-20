/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      envVariants: ['dark'],
      features: {
        darkVariants: true,
      },
    },
  },
}

export default config
