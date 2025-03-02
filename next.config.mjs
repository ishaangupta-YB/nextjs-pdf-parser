/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['pdf2json'],
    },
    images: {
        domains: [
            "api.microlink.io",
        ],
    },
    swcMinify: true,
    compress: true,
    reactStrictMode: true,
};
export default nextConfig;
