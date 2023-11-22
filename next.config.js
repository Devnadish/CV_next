/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    // experimental: {
    //   serverActions: true,
    // },
    images: {
        domains: ['res.cloudinary.com'],
        unoptimized: true,
    },
};

module.exports = nextConfig;
