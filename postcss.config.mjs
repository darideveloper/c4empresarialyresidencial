import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: {
    tailwindcss: {},
  },
}

export default withNextIntl(nextConfig)