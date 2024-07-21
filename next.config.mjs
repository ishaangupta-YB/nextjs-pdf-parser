/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['pdf2json'],
    },
    swcMinify: true,
    compress: true,
    reactStrictMode: true,
};
export default nextConfig;
