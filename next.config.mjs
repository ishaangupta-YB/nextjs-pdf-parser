/** @type {import('next').NextConfig} */
const nextConfig = {
    // Moved from experimental.serverComponentsExternalPackages in Next.js 15+
    serverExternalPackages: ['pdf2json'],
    compress: true,
    reactStrictMode: true,
};
export default nextConfig;
