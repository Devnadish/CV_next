/** @type {import('next').NextConfig} */
const nextConfig = {
    // Set the output directory to 'build'
    distDir: 'build',

    // Enable SWC minification for faster build times
    swcMinify: true,
    optimizeFonts: false,

    // Configure custom HTTP agent options
    httpAgentOptions: {
      keepAlive: false,
    },

    // Configure image optimization options
    images: {
      domains: ['res.cloudinary.com'],
      // under test ---------
      disableStaticImages: true,
      // ----------------
      minimumCacheTTL: 60,
      // remotePatterns: [
      //   {
      //     protocol: 'http',
      //     hostname: 'localhost',
      //     port: '3000',
      //     pathname: '/assets/**',
      //   },
      // ],
    },

    // Define environment variables
    // env: {
    //   HOST: process.env.HOST || 'localhost',
    //   PORT: process.env.PORT || 3000,
    // },
  };

  module.exports = nextConfig;

























// /** @type {import('next').NextConfig} */
// const nextConfig = {

//     distDir: 'build',
//     swcMinify: true,
//     httpAgentOptions: {
//         keepAlive: false,
//      },
//     images:{
//         domains:['res.cloudinary.com','127.0.0.1'],
//         minimumCacheTTL: 60,
//         remotePatterns: [
//           {
//             protocol: 'http',
//             hostname: 'localhost',
//             port: '3000',
//             pathname: '/assets/**',
//           },
//         ],
//     },

//     env: {
//         HOST: process.env.HOST || 'localhost',
//         PORT: process.env.PORT || 3000,
//       },
// }

// module.exports = nextConfig

