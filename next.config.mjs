/** @type {import('next').NextConfig} */
const nextConfig = {

    // images: {
    //     domains: ['res.cloudinary.com'],
    //     // remotePatterns: ['res.cloudinary.com'],
    //   },

    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
          },
      ],
  },
};

export default nextConfig;
