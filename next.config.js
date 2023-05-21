/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        appDir: true,
        typedRoutes: true,
    },
    reactStrictMode: true,
};

module.exports = nextConfig



