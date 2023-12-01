/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    images: {
        domains: ['res.cloudinary.com'],
        unoptimized: true,
    },
};

module.exports = nextConfig;
